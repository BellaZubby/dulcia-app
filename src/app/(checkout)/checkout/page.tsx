"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Subtotal from "@/app/components/subtotal";
import {CartContext} from "@/app/components/cartContext";
import NavbarCartLogin from "@/app/components/navbarCartLogin";
import { auth } from "@/app/firebase";
type Props = {};

const Checkout = (props: Props) => {
  const {dispatch, state} = useContext(CartContext)
  
  // remove from cart
  const removeFromCart = (productId: string) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      product: productId,
    });
  };
  
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
  }, [])
  return (
 <>
          <NavbarCartLogin/>
          {/* new */}
          <div className="ssm:pb-20 pb-10 bg-white font-robotoCondensed">
            <div className="ssm:hidden  bg-primary-200 flex flex-col py-3 items-center justify-center">
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
           
            <div className="border border-gray-400 bg-white px-5 py-4 ssm:px-7 ssm:py-5 md:py-7 ssm:basis-[42%] md:basis-1/4">
              <Subtotal />
            </div>
          </div>
          {
            state.items.length > 0 && (
              <div className="grid md:grid-cols-4 ssm:grid-cols-3 grid-cols-1 gap-5 ssm:px-10 px-5">
              {state.items.map((item, idx) => (
                <div key={idx} className="mt-14">
                  <Image
                    className="h-72 object-cover shadow-lg"
                    src={item.product.image}
                    alt="bread"
                  />
                  <div className="mt-4">
                    <p className="text-primary-200 text-lg">
                      {item.product.name}
                    </p>
                    <p className="text-primary-200 font-bold">
                    ₦{item.product.price}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="bg-yellow-400 text-primary-200 rounded-sm px-2 py-1 mt-3 mb-10 md:mb-0 border border-gray-500 font-bold"
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            )
          }

          {
            state.items.length === 0 && (
              <div className="h-72 mt-20 ssm:px-10">
                 <h1 className="text-3xl ssm:text-4xl sm:text-5xl font-semibold text-center ssm:text-left">Cart is empty</h1>
              </div>
             
            )
          }
         
          {/* for mobile */}
          <div className="border border-gray-400 bg-primary-150 px-5 py-7 ssm:hidden mt-7 mx-5">
            <Subtotal />
          </div>

    </div>
        </>
  );
};

export default Checkout;
