import React from 'react'
import logo from "@/app/assets/dulcia-high-resolution-logo-transparent.png";
import Image from 'next/image'
import { Socials, FooterDetailType, OpeningHoursType } from '../Hooks/data'
import Link from 'next/link'

type Props = {
    contact: FooterDetailType[];
    socials: Socials[];
    openingHours: OpeningHoursType[];
}

const Footer = ({contact, socials, openingHours}: Props) => {
  return (
    <div className='bg-gray-600/50 w-full sm:pt-16 pt-12 font-abhaya '>
    <div className='grid md:grid-cols-4 grid-cols-1 gap-10 md:gap-0 text-[#000] pb-14'>
          <div className='col-span-1'>
              <Image className='w-40 sm:w-52 object-cover' src={logo} alt='logo' priority />
          </div>
          <div className='col-span-1 px-8'>
              <h6 className='text-xl sm:text-2xl font-bold text-primary-50'>Contact</h6>
              {contact.map((contact, idx) => (
                  <div key={idx}>
                      <p className='flex items-center gap-3 mt-4 sm:mt-6 text-sm sm:text-[16px]'>
                          <span className='text-primary-300'><contact.icon /></span>
                          {contact.title}
                      </p>
                  </div>
              ))}

          </div>
          
          <div className='px-8'>
              <h6 className='text-xl sm:text-2xl font-bold text-primary-50'>Opening Hours</h6>
              {openingHours.map((time, idx) => (
                  <div key={idx} className='mt-4 sm:mt-6 text-sm sm:text-[16px]'>
                      <p>{time.day}<span className='text-black/50'>............</span>{time.time}</p>
                  </div>
              ))}
          </div>

          <div className='px-8'>
              <h6 className='text-xl sm:text-2xl font-bold text-primary-50'>Follow Us</h6>
              <div className='flex items-center gap-5'>
                  {socials.map((social, idx) => (
                      <div key={idx} className='border-[1px] border-primary-50 rounded-full p-2 sm:mt-6 mt-4'>
                          <Link href={social.href} className='text-primary-300'><social.icon /></Link>
                      </div>
                  ))}
              </div>

          </div>
      </div>
      <div className='bg-gray-600/70 flex flex-col items-center ssm:items-start p-3'>
              <p className='text-sm text-center xs:text-block'>Copyright © 2024 All rights reserved Dulcia Confectionery</p>
              <p className='text-[12px] sm:text-sm text-primary-50 font-bold mt-1'>Powered by Bella</p>
          </div>
</div>
  )
}

export default Footer