import React, { useContext, useState} from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Products from './products';
import { queryData as data, DataTypes } from '../Hooks/testData';
import {CartContext} from './cartContext';
import Link from 'next/link';
import ErrorMsgContainer from './errorMsgContainer';


type Props = {
    query:string;
   

}

const SearchResult = ({query}: Props) => {
  const {dispatch, state} = useContext(CartContext)
  const [error, setError] = useState('')
  const [openError, setOpenError] = useState(false);


  // add to cart
  const addToCart = (product:DataTypes) => {
    const user = state.user;

    if (!user) {
      setError('Please sign-in to add items to the cart.');
      setOpenError(true)
      return;
    } else {
      dispatch({
        type: 'ADD_TO_CART',
        product: product
       });
    }
   
   
 }

   const filteredData = data.map(item => ({
    ...item,
    detail: item.detail.filter(info => info.name.toLowerCase().includes(query.toLowerCase()),)
   })).filter(item => item.detail.length > 0);
    return (
    <div className='pt-40 md:pb-10 ssm:pt-48 sm:pt-48 bm:pt-48 md:pt-48 font-robotoCondensed'>
        {query && filteredData.length > 0 ? <h1 className='text-2xl sm:text-3xl text-primary-200 text-center'>Search result for &quot;<span className='font-semibold'>{query}</span>&quot;</h1>: " "} 

        {
          filteredData.length > 0 ? (
            <div className=''>

            {
          filteredData.map((item,idx)=>(
              <div
              className='' 
              key={idx}>
                 <motion.h1 
                 className=' text-3xl ssm:text-4xl text-primary-200 font-semibold mt-14 pl-6'>
                  {item.heading}
                  </motion.h1>
                 <div  
                   
                 className='grid grid-cols-1 ssm:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 px-5 md:px-7 mt-12'>
                 {
                    item.detail.map((detail: any,idx: React.Key | null | undefined) => (
                        <motion.div 
                        key={idx}>
                         <Image  className='h-72 object-cover' src={detail.image} alt='products'/>
                         <p className='text-primary-200 text-xl'>{detail.name}</p>
                         <p className='text-primary-200 font-bold text-lg'>₦{detail.price}</p>
                         <button onClick={() => addToCart(detail)} className='bg-yellow-400 text-primary-200 border border-gray-500 rounded-sm px-2 py-2 text-lg mt-3 mb-10 md:mb-0'>Add to cart</button>
                        </motion.div>
                    ))
                   }
                 </div>
                  
              </div>
              
          ))
        }

          </div>
          ): (
             <>
             
             <div className='flex items-center justify-center'>
               <h1 className='tracking-wider text-red-500 font-bold text-2xl sm:text-3xl text-center'>Sorry, product currently not available</h1>
             </div>
            
             
            <Products data={data} className=''/>
            </>
          )
        }
            {
        error && openError && <ErrorMsgContainer>
           <h1 className='text-white sm:text-5xl ssm:text-3xl text-2xl px-10'>{error}</h1>
           
              <button onClick={() => setOpenError(false)} className='border bg-primary-200 text-white px-7 py-4 rounded-md text-lg'>Close</button>
           
        </ErrorMsgContainer>
      }   
    </div>
  )
  
}

export default SearchResult