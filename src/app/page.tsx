"use client"
import Image from "next/image";
import HomePage from "./(pages)/home/page";
import { Suspense } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { contactData, socialIcon, openingHours } from "./Hooks/data";
import { auth } from '@/app/firebase'
import { useContext, useEffect } from 'react'
import { CartContext } from "./components/cartContext";
import Spinner from "./components/spinner";


export default function Home() {
  const {dispatch, state} = useContext(CartContext)
  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
          
          console.log('THE USER IS ', authUser?.displayName);
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
    <main className="">
      <Suspense>
      <Navbar/>
      </Suspense>
      <Suspense>
      <HomePage/>
      </Suspense>
      
     
      <Footer contact={contactData} socials={socialIcon} openingHours={openingHours}/>
    </main>
  );
}
