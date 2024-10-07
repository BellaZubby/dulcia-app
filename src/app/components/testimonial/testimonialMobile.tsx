import React from 'react'
import Rating from '../rating';
import Image, { StaticImageData } from 'next/image';
import man1 from '@/app/assets/man1.jpg'
import man2 from '@/app/assets/man2.jpg'
import woman1 from '@/app/assets/woman1.jpg'
import woman2 from '@/app/assets/woman2.jpg'
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import './testimonialTheme.css'
import './testimonialSlick.css'


export interface ClientTypes {
    image:StaticImageData;
    name:string;
    location:string;
    review:string;
    rating:number;
  }
  
  const clientData:ClientTypes[] = [
    {
      image: man1,
      name: 'Ben Duke',
      location: 'New Jersey',
      rating: 4,
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias amet, sapiente magnam veritatis corrupti nemo!'
    },
    {
        image: man2,
        name: 'Paul Amor',
        location: 'Texas',
        rating: 3,
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias amet, sapiente magnam veritatis corrupti nemo!'
      },
      {
        image: woman1,
        name: 'Emily Heirs',
        location: 'New York',
        rating: 4,
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias amet, sapiente magnam veritatis corrupti nemo!'
      },
      {
        image: woman2,
        name: 'Amber Flamingo',
        location: 'Boston',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias amet, sapiente magnam veritatis corrupti nemo!'
      },

  ]

  export interface onClickType {
    onClick?(): (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
  
  // for arrows
  // leftarrow
  const PrevArrow: React.FC<onClickType> = ({ onClick }) => {
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5, delay:0.5}}
            className="slick-arrow slick-Prev"
            onClick={onClick}>
              <BiChevronLeft className='w-7 h-7 ssm:w-9 ssm:h-9 sm:w-10 sm:h-10 text-[#908888]'/>
        </motion.div>);
  };
  
  //  for nextArrow
  const NextArrow: React.FC<onClickType> = ({ onClick }) => {
    return (
    <motion.div
      initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5, delay:0.5}}
        className="slick-arrow slick-Next"
        onClick={onClick}>
          <BiChevronRight className='w-7 h-7 ssm:w-9 ssm:h-9 sm:w-10 sm:h-10 text-[#908888] '/>
        </motion.div>
      );
  };
  

type Props = {}

const TestimonialMobile = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows:false,
    autoplay:true,
    autoplaySpeed: 2000,
    prevArrow:<PrevArrow/>,
    nextArrow:<NextArrow/>,
  };
  return (
    <div className='bg-primary-150/40 py-16'>
        <h1 className='text-center sm:text-xl text-lg text-primary-300 font-semibold'>TESTIMONIAL</h1>
        <p className='text-center text-3xl ssm:text-5xl font-abhaya font-semibold mt-7'>Reviews from our customers</p>
        <div className='my-12 mx-5'>
            <Slider {...settings}>
                {
                  clientData.map((review, idx) => (
                    <div key={idx} className='bg-white rounded-md px-5 py-5 ssm:px-10 ssm:py-16'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-6'>
                        <Image src={review.image} alt='client' className='w-16 h-16 ssm:w-20 ssm:h-20 object-cover rounded-full'/>
                        <div>
                          <p className='font-bold text-primary-200 xs:text-xl text-lg ssm:text-2xl'>{review.name}</p>
                          <p className='text-primary-300 text-sm ssm:text-lg'>{review.location}</p>
                        </div>
                        </div>
                      
                        <div className='flex items-center justify-center gap-1'>
                          {
                            Array(review.rating).fill(true).map((filled, i) => (
                              <Rating key={i} filled={filled}/>
                            ))
                          }
                        </div>
                      </div>
                     
                      <p className='mt-5 ssm:text-lg xs:text-[16px] text-[15px] tracking-wider'>{review.review}</p>
                    </div>
                  ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default TestimonialMobile