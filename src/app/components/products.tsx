"use client"
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '../Hooks/motion';
import { DataTypes, QueryDataTypes } from '../Hooks/testData';
import {CartContext} from './cartContext';
import { SelectedPage } from '../Hooks/data';
import ErrorMsgContainer from './errorMsgContainer';
import Link from 'next/link';
import { FaArrowCircleLeft } from 'react-icons/fa';


type Props = {
  className:string;
    data: QueryDataTypes[];
}


const Products = ({data, className}: Props) => {

  // defining the active state
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Pastries);
  const [error, setError] = useState('');
  const [openError, setOpenError] = useState(false);

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
 // add to cart
 const addToCart = (product:DataTypes) => {

  const user = state.user;

  if (!user) {
    setError('Please sign-in to add items to the cart.');
    setOpenError(true);
    return;
  } else {
    dispatch({
      type: 'ADD_TO_CART',
      product: product
     });
  }

};

    return (
    <div className={className}>
          {
          data.map((item,idx)=> {
            return (
              <motion.section
              id={item.href}  
              key={idx}
              className={item.group === 'A' ? 'groupA pb-10 ssm:pb-16':'groupB pb-10 ssm:pb-16'}>
                <div className='pt-24 ssm:pt-28 md:pt-24'/>
                 <motion.h1 
                 variants={slideInFromLeft(0)}
                 initial='hidden'
                 whileInView='visible'
                 viewport={{once:true}}
                 className='text-3xl ssm:text-4xl text-primary-200 font-semibold mt-14 pl-10'>
                  {item.heading}
                  </motion.h1>
                 <div  
                 
                 className='grid grid-cols-1 ssm:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 px-6 ssm:px-9 md:px-7 mt-9'>
                 {
                    item.detail.map((detail: any,idx: React.Key | null | undefined) => (
                     
                        <motion.div 
                        initial={{opacity:0}}
                   whileInView={{opacity:1}}
                   viewport={{once:true}}
                   transition={{duration:0.5, delay:0.5}}
                        key={idx}>
                         <Image  className='h-72 object-cover' src={detail.image} alt='products' priority/>
                         <p className='text-primary-200 text-xl mt-3'>{detail.name}</p>
                         <p className='text-primary-200 font-bold text-lg'>₦{detail.price}</p>
                         <button onClick={() => addToCart(detail)} className='bg-yellow-400 border border-gray-500 text-primary-200 rounded-sm px-2 py-2 text-lg mt-3 mb-10 md:mb-0'>Add to cart</button>
                        </motion.div>
                    ))
                   }
                 </div>
              </motion.section>
              
           ) })
        }
      {
        error && openError && <ErrorMsgContainer>
           <h1 className='text-white sm:text-5xl ssm:text-3xl text-2xl px-10'>{error}</h1>
           
              <button onClick={() => setOpenError(false)} className='border bg-primary-200 text-white px-7 py-4 rounded-md text-lg'>Close</button>
           
        </ErrorMsgContainer>
      }

    </div>
  )
};



export default Products