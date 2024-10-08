"use client"
import React from 'react'
import { HeroTypes } from '@/app/Hooks/data'
import Slider from 'react-slick'
import './heroSlick.css'
import './heroTheme.css'
import Image from 'next/image';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { motion } from 'framer-motion'

type Props = {
  data:HeroTypes[];
}

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
            <BiChevronLeft className='w-10 h-10 ssm:w-12 ssm:h-12 sm:w-16 sm:h-16 text-[#908888]'/>
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
        <BiChevronRight className='w-10 h-10 ssm:w-12 ssm:h-12 sm:w-16 sm:h-16 text-[#908888] '/>
      </motion.div>
    );
};

const HeroSection = ({data}: Props) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows:true,
    autoplay:true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className='overflow-x-hidden mb-[-50px]'>
        <Slider {...settings}>
            {
              data.map((data, idx) =>(
                  <div key={idx} className='relative'>
                    <Image className='w-full h-screen object-cover' src={data.banner} alt='banner' priority/>
                    <div className='absolute inset-0 bg-gradient-to-b from-gray-500/20 to-white flex items-center justify-center'>
                      <h1 className='text-4xl sm:text-5xl md:text-7xl font-robotoCondensed text-transparent bg-clip-text bg-gradient-primary'>{data.title}</h1>
                    </div>
                  </div>
              ))
            }
        </Slider>
       
    </div>
  )
}

export default HeroSection