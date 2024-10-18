import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';
import BreathingAnimation from './breathingAnimation';
import { slideInFromBottom } from '../Hooks/motion';
import school from '@/app/assets/school.jpg'
import Image from 'next/image';


type Props = {
    className:string;
}

const School = ({className}: Props) => {
  return (
    <div className={className}>
        <div className='bg-dulcia-school w-full h-[600px] md:h-[700px] bg-cover bg-fixed bg-no-repeat bg-center hidden ssm:block'>
            <div className='bg-black/50 w-full h-full inset-0 flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-10'>
                
                <motion.h1 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:1, delay:0.5}}
                className='text-white ssm:text-5xl sm:text-5xl md:text-7xl font-semibold text-center p-1'>DULCIA CONFECTIONERY SCHOOL</motion.h1>
                
               
                
                <motion.div
                  initial={{opacity:0, y:20}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true, amount:0.5}}
                  transition={{duration:1, delay:0.5}}
                >
                    <BreathingAnimation text='Coming soon !'/>
                </motion.div>
                <motion.div
                      variants={slideInFromBottom(0.7)}
                      initial='hidden'
                      whileInView='visible'
                      viewport={{once:true}}
                >
                <Link href={'/'} className='border border-primary-150 rounded-md px-10 py-3 text-lg schoolLink'>
                 Details
                </Link>
                </motion.div>
                
            </div>

            </div>
        </div>
        <div className='relative ssm:hidden'>
            <Image src={school} alt='school' className='h-72 object-cover w-full'/>
            <div className='absolute inset-0 bg-black/50 h-full w-full flex flex-col items-center justify-center gap-6'>
            <motion.h1 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:1, delay:0.5}}
                className='text-white text-2xl text-center font-semibold p-1'>DULCIA CONFECTIONERY SCHOOL</motion.h1>
                
               
                {/* <p className='text-yellow-500 text-4xl'>Coming soon!</p> */}
                <motion.div
                  initial={{opacity:0, y:20}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true, amount:0.5}}
                  transition={{duration:1, delay:0.5}}
                >
                    <BreathingAnimation text='Coming soon !'/>
                </motion.div>
                <motion.div
                      variants={slideInFromBottom(0.7)}
                      initial='hidden'
                      whileInView='visible'
                      viewport={{once:true}}
                >
                <Link href={'/dulcia-school'} className='border border-primary-150 rounded-md ssm:px-10 ssm:py-3 px-5 py-2 ssm:text-lg schoolLink'>
                 Details
                </Link>
                </motion.div>
           </div>
        </div>
    </div>
  )
}

export default School