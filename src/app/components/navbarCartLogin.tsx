import Link from 'next/link'
import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from './cartContext'
import logo from "@/app/assets/dulcia-high-resolution-logo-transparent.png";
import Image from "next/image";

type Props = {}

const NavbarCartLogin = (props: Props) => {
    const {dispatch, state} = useContext(CartContext);
  return (
    <div className="flex items-center justify-between ssm:px-10 pl-3 pr-7 py-4 bg-primary-150 font-robotoCondensed">
    <Link href={"/home"}>
      <Image
        src={logo}
        alt="logo"
        className="w-32 object-contain"
        priority />
    </Link>
    <div className=" text-primary-50 font-bold flex items-center gap-10">
        <Link href={'/checkout'} className="flex items-center gap-2">
          <FaShoppingCart className="w-7 h-7" />
          <span>{state?.items.length}</span>
        </Link>

    </div>
  </div>
  )
}

export default NavbarCartLogin