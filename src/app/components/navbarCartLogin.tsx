import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from './cartContext'
import logo from "@/app/assets/dulcia-high-resolution-logo-transparent.png";
import Image from "next/image";
import { auth } from '../firebase';
import { useRouter } from 'next/navigation';
import SpinnerLogin from './spinnerLogin';
import ProtectedLink from './protectedLink';

type Props = {}

const NavbarCartLogin = (props: Props) => {
    const {dispatch, state} = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
   
    const handleAuthentication = () => {
      setLoading(true);
      // setTimeout(() => {
      //   if(state.user) {
      //     auth.signOut();
      //   } else {
      //       router.push('/login')
      //   } 
      // }, 2000)
      setTimeout(() => {
        try {
          if(state.user) {
            auth.signOut();
          } else {
              router.push('/login')
          } 
        } finally {
          setLoading(false)
        }
      }, 1000)
  }
  
  return (
    <div className='w-full fixed z-[999]'>
       <div className="flex items-center justify-between ssm:px-10 pl-1 pr-5 py-3 bg-primary-150 font-robotoCondensed">
    <Link href={"/home"}>
      <Image
        src={logo}
        alt="logo"
        className="w-32 object-contain"
        priority />
    </Link>
    <div className=" text-primary-50 font-bold flex items-center gap-5 ssm:gap-7 sm:gap-10">

        {
            state.user && (
              <div className="flex items-center gap-1 font-semibold">
              <span className="text-[16px] ssm:text-xl">Hello</span>
              <span className="text-[16px] ssm:text-xl">{state.user?.displayName}</span>
            </div>
            )
          }

<div className="flex items-center gap-2" onClick={handleAuthentication}>
       
      
       <button  className='text-[16px] ssm:text-xl'>{state.user ? 'Logout' : 'Sign In'}</button>
       {
        loading && <SpinnerLogin/>
       }
   
</div>

        {/* <Link href={'/checkout'} className="flex items-center gap-2">
          <FaShoppingCart className="w-8 h-8" />
          <span>{state?.items.length}</span>
        </Link> */}
        <ProtectedLink href={'/checkout'} className="flex items-center gap-2 text-primary-50 mr-2">
          <FaShoppingCart className=" w-8 h-8 ssm:w-9 ssm:h-8" />
          <span className="text-[16px] ssm:text-xl">{state?.items.length}</span>
        </ProtectedLink>

    </div>
  </div>
    </div>
   
  )
}

export default NavbarCartLogin