import { motion } from 'framer-motion';
import React from 'react'
import { slideInFromBottom, slideInFromRight } from '../Hooks/motion';
import cake1 from '@/app/assets/cake1.jpg'
import cake2 from '@/app/assets/cake2.jpg'
import Image from 'next/image';
import Link from 'next/link';

type Props = {}
const defaultAnimation = {
    hidden: {
      opacity: 0,
    },
  
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

const Services = (props: Props) => {
  return (
    <div className='grid ssm:grid-cols-2 ssm:gap-14 gap-9 items-center bg-gray-400 text-primary-200 py-14 ssm:py-20 px-5 font-abhaya overflow-x-hidden'>
        <motion.div 
        initial='hidden'
        animate='hidden'
        whileInView='visible'
        viewport={{once:true}}
        transition={{staggerChildren:0.5}}
        className='grid grid-cols-2 gap-5'>
            <motion.div variants={defaultAnimation}><Image src={cake1} alt='cake' className=''/></motion.div>
            <motion.div variants={defaultAnimation}><Image src={cake2} alt='cake' className='mt-10'/></motion.div>
            
            
        </motion.div>
        <div className='flex flex-col items-center justify-center gap-7'>
            <motion.h1 
            variants={slideInFromRight(0.5)}
            initial='hidden'
            whileInView='visible'
            viewport={{once:true}}
            className='text-2xl ssm:text-3xl sm:text-5xl font-bold text-center ssm:text-block'>For your custom orders and special occassion treats?</motion.h1>
            <motion.div
            variants={slideInFromBottom(0.6)}
            initial='hidden'
            whileInView='visible'
            viewport={{once:true}}
            >
            <Link href={'/contact'} className='border bg-yellow-200 border-primary-200 py-3 px-7 ssm:py-4 ssm:px-10 font-robotoCondensed rounded-md text-lg'>
               <motion.button
               className='hover:text-white'
                  initial={{scale:1}}
                  whileHover={{scale:1.2, transition:{duration:0.5}}}
               >
               Book us
                </motion.button>
            </Link>
            </motion.div>
            
              {/* <motion.div
                 
                 className='w-full'
                 >
                 <Link href={'/contact'} className='flex items-center justify-center font-robotoCondensed py-4 text-lg'>
                     <button className='viewlinks border border-primary-200 rounded-md'>Book us</button>
                   </Link>
                 </motion.div> */}
        </div>
    
    </div>
        
  )
}

export default Services