"use client"
import React, { useContext, useState } from 'react'
import { NumericFormat } from 'react-number-format'
import { CartContext, getCartTotal } from './cartContext'
import { useRouter } from 'next/navigation'
import { auth, db } from '@/app/firebase'
type Props = {}

const Subtotal = (props: Props) => {
  const {dispatch, state} = useContext(CartContext);
  const router = useRouter();
  const [address, setAddress] = useState('');
  const [disabled, setDisabled] = useState(true);
  const handleUpdate = async() => {
    // const user = state.user;
    // if(user) {
    //   await db
    //     .collection('users')
    //     .doc(user?.uid)
    //     .set({address}, {merge:true});
    //     alert('Address updated!');
    // }
    if(state.user) {
      dispatch({
        type: 'SET_ADDRESS',
        address: address
       });
    }
    setDisabled(false);
  }
 
  return (
    <div className='flex flex-col'>
        <NumericFormat
            renderText={(value) => (
                <>
                    <p className='text-lg'>
                    Subtotal ({state.items.length} items):{' '}
                    <strong className="text-primary-200">{value}</strong>
                    </p>
                    
                </>
            )}
            decimalScale={2}
            value={getCartTotal(state)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₦'}
        
        />
        <div className='mt-3 grid grid-cols-4 gap-3 items-center'>
        <input
          type='text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder='Enter Delivery Address'
          className='border-[1px] border-gray-300 py-[6px] px-3 placeholder:text-sm text-[16px] outline-none col-span-3'
        />
        <button 
        disabled={!address}
        onClick={handleUpdate} className={`py-1 px-[10px] rounded-lg text-primary-150 col-span-1 ${!address ? 'bg-primary-200/50':'bg-primary-200'}`}>Add</button>
        </div>
        
        <button 
        disabled={disabled || !address}
        onClick={(e:any) => router.push('/payment')}
        className={`rounded-sm px-2 py-2 mt-3 md:mb-0 font-bold ${disabled || !address ? 'bg-yellow-400/30 text-primary-200/30 ':'bg-yellow-400 text-primary-200'}`}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal