import React, { useContext, useEffect, useState } from "react";
import { Menu, SelectedPage, Socials } from "@/app/Hooks/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {FaShoppingCart } from "react-icons/fa";
import logo from "@/app/assets/dulcia-high-resolution-logo-transparent.png";
import Image from "next/image";
import Search from "../search";
import { CartContext } from "../cartContext";
import { auth } from "@/app/firebase";
import ProtectedLink from "../protectedLink";
import SpinnerLogin from "../spinnerLogin";
import ProtectedOrderLink from "../protectedOrderLink";


type Props = {
  menu: Menu[];
  socials: Socials[];
};

const DesktopMenu = ({ menu, socials}: Props) => {
// defining active state
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Pastries);
const [loading, setLoading] = useState(false)
const router = useRouter();
useEffect(
    () => {
        const handleScroll = () => {
          if (window.scrollY === 0) {
            setSelectedPage(SelectedPage.Pastries);
          }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []
)



  const {dispatch, state} = useContext(CartContext);
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
    <><div className="hidden md:block">
      <div className="flex items-center justify-between px-6 py-2 bg-primary-150">
        <Link href={"/home"}>
          <Image
            src={logo}
            alt="logo"
            className="w-36 object-contain"
            priority />
        </Link>
          <Search/>
        <div className="flex items-center justify-center gap-6 text-primary-50">

          {
            state.user && (
              <div className="flex items-center gap-2 font-semibold">
              <span className="text-xl">Hello</span>
              <span className="text-xl">{state.user?.displayName}</span>
            </div>
            )
          }

        <div className='flex items-center gap-2' onClick={handleAuthentication}>
       <button className='text-xl font-semibold'>{state.user ? 'Logout' : 'Sign-in'}</button>
       {
        loading && <SpinnerLogin/>
       }  
       </div>

       <div className="flex items-center gap-4">
       <ProtectedOrderLink href='/orders' className="">
           <span className='text-xl font-bold'>Orders</span>
       </ProtectedOrderLink> 
      

       <ProtectedLink href='/checkout' className="flex items-center gap-2 mr-7">
       <FaShoppingCart className="w-9 h-9" />
       <span className="text-xl">{state?.items.length}</span>
       </ProtectedLink>
       </div>

     
            {/* <Link href={state.user && '/checkout'} >
              
              
            
            </Link> */}

        </div>
      </div>
      {/* second menu */}
      <div className="py-3 bg-primary-100">
        <div className="w-5/6 mx-auto flex items-center justify-between text-lg">
          <div className="flex items-center gap-10 text-primary-50">
            
            {menu.map((item, idx) => {
              const lowerCasePage = item.href.toLowerCase().replace(/ /g, "") as SelectedPage;
              const handleClick = () => {
                setSelectedPage(lowerCasePage);
              }
              return (
              <Link
                href={item.href}
                key={idx}
                onClick={handleClick}
                className={`${selectedPage === lowerCasePage ? "text-primary-300 text-[21px]" : ""} transition duration-500 hover:text-primary-300 text-[21px]`}
              >
                {item.name}
              </Link>
)})}
    
          </div>
          <div className="flex items-center justify-center gap-7 text-primary-50">
            {socials.map((item, idx) => (
              <Link href={item.href} key={idx}>

                <item.icon />

              </Link>
            ))}
          </div>
        </div>
      </div>
    </div></>
  );
};

export default DesktopMenu;
