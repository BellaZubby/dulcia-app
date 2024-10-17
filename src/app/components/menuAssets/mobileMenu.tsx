import React, {useContext, useEffect, useState } from "react";
import { Menu, SelectedPage, Socials } from "@/app/Hooks/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {FaShoppingCart } from "react-icons/fa";
import logo from "@/app/assets/dulcia-high-resolution-logo-transparent.png";
import Image from "next/image";
import useMediaQuery from "@/app/Hooks/useMediaQuery";
import { FaBars, FaX } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import Search from "../search";
import { CartContext } from "../cartContext";
import { auth } from "@/app/firebase";
import ProtectedLink from "../protectedLink";
import SpinnerLogin from "../spinnerLogin";
import ProtectedOrderLink from "../protectedOrderLink";


type Props = {
    socials: Socials[];
    menu: Menu[];
};

const MobileMenu = ({socials, menu}: Props) => {
  // defining the active state
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


  const {dispatch, state} = useContext(CartContext)
  const [isTogged, setIsToggled] = useState(false)
    const aboveMediumScreen = useMediaQuery("(min-width:1060px)");

    const handleAuthentication = () => {
      setLoading(true)
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
    <div className="md:hidden">
      <div className="flex items-center justify-evenly pr-3 ssm:pr-0 py-3 bg-primary-150">
        <Link href={"/home"}>
          <Image
            src={logo}
            alt="logo"
            className="w-32 object-contain"
            priority
          />
        </Link>
          <Search/>
          <div className="flex items-center gap-4 px-2">
          <ProtectedOrderLink href={'/orders'} className="">
            <span className="text-lg ssm:text-xl text-primary-50 font-semibold">Orders</span>
          </ProtectedOrderLink>
         
          <ProtectedLink href={'/checkout'} className="flex items-center gap-2 text-primary-50">
          <FaShoppingCart className="w-8 h-8" />
          <span className="text-lg ssm:text-xl">{state?.items.length}</span>
          </ProtectedLink>
          </div>

          
      </div>
        {/* dropdown */}
        <div className="flex items-center justify-between px-7 ssm:px-10 bg-primary-100 py-3">
         {
            isTogged ?  <FaX className="text-primary-50 w-7 h-7 ssm:w-9 ssm:h-9" onClick={() => setIsToggled(!isTogged)}/> : 
            <FaBars className="text-primary-50 w-8 h-8 ssm:w-9 ssm:h-9" onClick={() => setIsToggled(!isTogged)}/>
         }
          
          <div className="flex items-center gap-7 text-primary-50">
          {
            state.user && (
              <div className="flex items-center gap-1 font-semibold">
              <span className="text-[16px] ssm:text-xl">Hello</span>
              <span className="text-[16px] ssm:text-xl">{state.user?.displayName}</span>
              
            </div>
            )
          }
            <div className="flex items-center gap-2" onClick={handleAuthentication}>
       
      
           <button  className='text-lg ssm:text-xl'>{state.user ? 'Logout' : 'Sign In'}</button>
           {
            loading && <SpinnerLogin/>
           }
       
</div>
          </div>
        </div>
        <AnimatePresence>
        {
            !aboveMediumScreen && isTogged && 
                <motion.div 
                className="bg-primary-150 z-[20] w-[70%] px-10 h-screen flex flex-col gap-9"
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:-20}}
                transition={{duration:0.5}}
                >
                <div className=" flex flex-col gap-7 text-primary-50 pt-10">
            {menu.map((item, idx) => {
              const lowerCasePage = item.href.toLowerCase().replace(/ /g, "") as SelectedPage;
              const handleClick = () => {
                setSelectedPage(lowerCasePage);
                setIsToggled(false)
              }
              return (
              <Link
                href={item.href}
                key={idx}
                className={`${
                  selectedPage  === lowerCasePage ? "text-primary-300 text-[21px]" : ""
                } transition duration-500 hover:text-primary-300 text-[21px]`}
                onClick={handleClick}
              >
                {item.name}
              </Link>
    
)})}
          </div>
          <hr/> 
          <div className="flex items-center gap-7 text-primary-50">
            {socials.map((item, idx) => (
              <Link
              onClick={() => setIsToggled(false)} 
              href={item.href} key={idx}>
              
                  <item.icon/>
    
              </Link>
            ))}
          </div>
                </motion.div>

          
        }
        </AnimatePresence>
        
    </div>
  );
};

export default MobileMenu;
