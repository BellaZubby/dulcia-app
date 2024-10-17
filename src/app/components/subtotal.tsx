"use client"
import React, { useContext } from 'react'
import { NumericFormat } from 'react-number-format'
import { CartContext, getCartTotal } from './cartContext'
import { useRouter } from 'next/navigation'
type Props = {}

const Subtotal = (props: Props) => {
  const {dispatch, state} = useContext(CartContext);
  const router = useRouter();
 
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
        <button 
        onClick={(e:any) => router.push('/payment')}
        className='bg-yellow-400 text-primary-200 rounded-sm px-2 py-2 mt-3 md:mb-0 font-bold'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal