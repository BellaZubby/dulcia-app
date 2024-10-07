import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    text:string
}

const BreathingAnimation = ({text}: Props) => {
  return (
    <motion.div
        initial={{scale:1}}
        animate={{scale: [1, 1.1, 1]}}
        transition={{duration:2, repeat:Infinity}}
        className='inline-block text-xl ssm:text-4xl sm:text-4xl md:text-5xl text-yellow-500/70'>
            {text}
    </motion.div>
  )
}

export default BreathingAnimation