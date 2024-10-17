"use client"
import { CartContext } from '@/app/components/cartContext'
import Order from '@/app/components/order'
import { auth, db } from '@/app/firebase'
import React, { useContext, useEffect, useState } from 'react'

type Props = {}

const Orders = (props: Props) => {
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
const [orders, setOrders] = useState<any>([]);

useEffect(() => {
  if (state.user) {
    db
    .collection('users')
    .doc(state.user.uid)
    .collection('orders')
    .orderBy('created', 'desc')
    .onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc => (
          {
            id: doc.id,
            data: doc.data()
          }
        )))
    ))
  } else {
    setOrders([])
  }
  
}, [state.user])
  return (
    <div className='w-full ssm:pt-[100px] pt-20 pb-20 font-robotoCondensed ssm:px-10 px-5'>
        <h1 className={orders.length === 0 ? "hidden":'ssm:text-4xl text-3xl mt-12 text-primary-200 font-bold pl-5 ssm:pl-0'}>Your Order History</h1>
        {
          orders.length === 0 && 
          <div className="h-72 flex items-center justify-center">
                 <h1 className='text-2xl ssm:text-4xl font-bold text-primary-50'>No Orders yet</h1>
          </div>
        }
        <div>
          {
            orders.length > 0 && (
              <div>
                 {orders?.map((order:any, idx:any) =>(
              <Order key={idx} order={order}/>
            ) )}
              </div>
            )
          }
         
        </div>
        <h1 className={orders.length === 0 ? "hidden":"ssm:text-4xl text-3xl font-bold text-primary-200 text-center mt-16"}>Thank you for shopping with us!</h1>
    </div>
  )
}

export default Orders