"use client"
import { CartContext } from '@/app/components/cartContext'
import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { auth } from '@/app/firebase'
import PaymentTotal from '@/app/components/paymentTotal'
import CheckoutCart from '@/app/components/checkoutCart'
import Link from 'next/link'
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "@/lib/stripe";

type Props = {}

const PaymentPage = (props: Props) => {
    const {state, dispatch} = useContext(CartContext)

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

        if (authUser) {
            dispatch({
                type: 'SET_USER',
                user: authUser
            })
        }else {
            // user is logged out
            dispatch({
                type:'SET_USER',
                user: null
            })
        }

        if(!authUser) {
          dispatch({type: 'CLEAR_CART'});
        }
    })
}, [dispatch])
  return (
    <div className='w-full pt-[100px] font-robotoCondensed pb-14'>
        <h1 className='text-center text-white bg-primary-200 py-7 ssm:text-3xl text-2xl'>
          <span className='font-bold'>Checkout</span> {""}
          (<Link href={'/checkout'}>{state.items?.length} items</Link>)
        </h1>
        <div className='flex gap-14 px-7 ssm:px-10 mt-10'>
            <p className='text-primary-200 font-bold text-xl'>Delivery Address</p>
            <div>
            <p className='ssm:w-1/2 text-lg text-[#525150]'>{state.user?.email}</p>
            <p className='ssm:w-1/2 text-lg text-[#525150]'>House 18 Paradise Town, Lagos</p>
            </div>
            
        </div>
        <hr className='mx-10 mt-10'/>
        <div className='ssm:px-10 mt-10'>
            <p className='text-primary-200 px-7 ssm:px-0 font-bold text-xl'>Review items and delivery</p>
            <div className='ssm:mt-10'>
            {
            state.items.length > 0 && (
            <CheckoutCart/>
            )
          }

          {
            state.items.length === 0 && (
              <div className="h-72 mt-20 ssm:px-10">
                 <h1 className="text-3xl ssm:text-4xl sm:text-5xl font-semibold text-center ssm:text-left">No items</h1>
              </div>
             
            )
          }
         
            </div>
        </div>
        <hr className='mx-10 mt-10'/>
        <div  className='ssm:grid ssm:grid-cols-3 px-7 ssm:px-10 mt-10'>
            <p className='text-primary-200 font-bold text-xl'>Payment Method</p>
            <div className='ssm:mt-0 mt-4'>
              {/* everything stripe */}
                <Elements stripe={stripePromise}>
                  <PaymentTotal/>
                </Elements>
                
            </div>
        </div>
    </div>
  )
}

export default PaymentPage