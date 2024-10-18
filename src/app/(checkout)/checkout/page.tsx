"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Subtotal from "@/app/components/subtotal";
import {CartContext} from "@/app/components/cartContext";
import NavbarCartLogin from "@/app/components/navbarCartLogin";
import { auth } from "@/app/firebase";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import CheckoutCart from "@/app/components/checkoutCart";
type Props = {};

const Checkout = (props: Props) => {
  const {dispatch, state} = useContext(CartContext)
  
  
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
 <>
         
          {/* new */}
          <div className="ssm:pb-20 pb-10 bg-white font-robotoCondensed pt-[75px] xs:pt-[100px]">
            <div className={state.items.length === 0 ? "hidden":"block"}>
            <div className="ssm:hidden  bg-primary-200 flex flex-col items-center justify-center pb-7 pt-10">
            <h3 className="text-white text-lg">Hello, {state.user?.displayName}</h3>
          <h1 className="text-2xl font-bold text-white shadow-lg">
            Your Shopping Cart
          </h1>
            </div>
          
          <div className="ssm:flex hidden items-center justify-between sm:px-10 py-10 bg-primary-200 px-10 shadow-lg">
            <div>
            <h3 className="text-white text-xl">Hello, {state.user?.displayName}</h3>
            <h1 className="text-2xl ssm:text-4xl font-bold text-white">
              Your Shopping Cart
            </h1>
            </div>
           
            <div className="border border-gray-400 bg-white px-5 py-4 ssm:px-7 ssm:py-5 md:py-7 ssm:basis-[42%] md:basis-[30%]">
              <Subtotal />
            </div>
          </div>
            </div>
           
          {
            state.items.length > 0 && (
            <CheckoutCart/>
            )
          }

          {
            state.items.length === 0 && (
              // <div className="h-72 mt-20 ssm:px-10">
              //    <h1 className="text-3xl ssm:text-4xl sm:text-4xl font-semibold text-center ssm:text-left">Cart is empty</h1>
              // </div>
              <div className="h-72 flex items-center justify-center">
              <h1 className='text-2xl ssm:text-4xl font-bold text-primary-50'>Cart is empty</h1>
            </div>
             
            )
          }
         
          {/* for mobile */}
          <div className={state.items.length === 0 ? "hidden":"border border-gray-400 bg-primary-150 px-5 py-7 ssm:hidden mt-7 mx-5"}>
            <Subtotal />
          </div>

    </div>
        </>
  );
};

export default Checkout;
