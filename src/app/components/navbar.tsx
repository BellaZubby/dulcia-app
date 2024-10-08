"use client"
import React from 'react'
import { motion } from 'framer-motion'
import useMediaQuery from '../Hooks/useMediaQuery'
import DesktopMenu from './menuAssets/desktopMenu'
import { menuLinks,  socialIcon } from '../Hooks/data'
import MobileMenu from './menuAssets/mobileMenu'
import { slideInFromTop } from '../Hooks/motion'


type Props = {

}

const Navbar = ({}: Props) => {
  
    const aboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <div 
    className='w-full fixed font-robotoCondensed z-[99]'>
        <div
        className=''>
            {
                aboveMediumScreen &&  <DesktopMenu 
                menu={menuLinks} socials={socialIcon}
                />
            }

            {
                !aboveMediumScreen && <MobileMenu 
                menu={menuLinks} socials={socialIcon}
                />
            }
        </div>

    </div>
  )
}

export default Navbar