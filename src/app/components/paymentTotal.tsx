import router from 'next/router'
import React, {useContext, useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format'
import { CartContext, getCartTotal } from './cartContext'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
// import axios from 'axios'
import axios from '../axios'
import { StripeCardElement } from '@stripe/stripe-js'
import { useRouter } from 'next/navigation'
import SpinnerLogin from './spinnerLogin'
import { db } from '../firebase'
// import axios from 'axios'

type Props = {}

const PaymentTotal = (props: Props) => {
    const {dispatch, state} = useContext(CartContext)
    
    const router = useRouter();
    const stripe = useStripe();
    const elements = useElements();

   // button states for disabling of card and error
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState<any>(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer the correct amount with each change of the basket.
       const getClientSecret = async() => {

        if (state.items.length > 0) {
            try {
                const response = await axios({
                    method: 'post',
                    // stripe expects the total in a currencies subunit eg Kobo
                    url: `/payments/create?total=${getCartTotal(state) * 100}`
                    
                });
                setClientSecret(response.data.clientSecret);
            } catch (error) {
                console.error('Error fetching client secret:', error);
            }
        }
            
       }; 

       getClientSecret()

    }, [state]);

    console.log('The secret is ', clientSecret)
    console.log(state.user)

    const handleSubmit = async(e: any) => {
    // write the stripe functions
        e.preventDefault();
        setProcessing(true);

        if(!stripe || !elements) {
            setProcessing(false);
            return;
        }

        const cardElement = elements?.getElement(CardElement);

        if(!cardElement) {
            setProcessing(false);
            return;
        }

         const payload = await stripe?.confirmCardPayment(clientSecret!, {
            payment_method: {
                card: cardElement as StripeCardElement,
            },
         }).then(({paymentIntent}) => {
            // paymentIntent = payment confirmation
            db
                .collection('users')
                .doc(state.user?.uid)
                .collection('orders')
                .doc(paymentIntent?.id)
                .set({
                    items: state.items,
                    amount: paymentIntent?.amount,
                    created: paymentIntent?.created
                })
            setSucceeded(true)
            setError(null)
            setProcessing(false)

          // router.replace('/orders')
            setTimeout(() => {
                router.replace('/orders')
                dispatch({
                    type: 'CLEAR_CART'
                })
              }, 2000);
             

         })
    }

    const handleChange = (e: any) => {
        // listen for changes in the CardElement
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
  return (
    
    <div className='border border-gray-300 px-7 py-7'>
        <form onSubmit={handleSubmit}  className='flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
            <h5 className='text-primary-200 font-semibold text-[17px] ssm:mt-0'>Card Details</h5>
            <CardElement onChange={handleChange} className='border py-3 px-2'/>
            </div>
            <div className='flex flex-col gap-3'>
            <NumericFormat
            renderText={(value) => (
                <>
                    <p className='text-[17px]'>
                    <strong className="text-primary-200">Order Total: {value}</strong>
                    </p>
                    
                </>
            )}
            decimalScale={2}
            value={getCartTotal(state)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₦'}
        
        />

        <button 
        // disabled={processing || disable || succeeded}
        disabled={processing || disabled || succeeded}
        onClick={(e:any) => router.push('')}
        className={disabled ? 'bg-yellow-400/30 text-primary-200/30 rounded-sm px-2 py-2 md:mb-0 font-bold text-lg': 'bg-yellow-400 text-primary-200 rounded-sm px-2 py-2 md:mb-0 font-bold text-lg'}>
            <span>{processing ? 'Processing' : succeeded ? 'Payment done!' : "Buy now"}</span>
        </button>

            </div>
            <div className={succeeded ?'shadow-lg py-6 px-3':'hidden'}>
             {processing && 
            <div className='fixed left-0 top-1/2 -translate-y-1/2 h-full z-[999] w-full flex flex-col items-center justify-center gap-5 bg-black/40'>
               <p className='text-green-600 font-semibold text-lg bg-white p-9 rounded-lg'>Processing</p>
               <SpinnerLogin/>
            </div>
             
            }
            </div>
            <div className={succeeded ?'shadow-lg py-6 px-3':'hidden'}>
             {succeeded && 
            <div className='fixed left-0 top-1/2 -translate-y-1/2 h-full z-[999] w-full flex flex-col items-center justify-center gap-5 bg-black/40'>
               <p className='text-green-600 font-semibold text-lg bg-white p-9 rounded-lg'>Payment successful ✔</p>
            </div>
             
            }
            </div>
           
           {error && <div>{error}</div>}
        </form>
       
       
    </div>
  )
}

export default PaymentTotal