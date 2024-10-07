import React from 'react'
import { BsStarFill } from 'react-icons/bs'
type Props = {
  filled:any;
}

const Rating = ({filled}: Props) => {
  return (
    <div>
      <span className={filled ? 'text-[#ffd700]':'text-[#e2dfdf]'}>
          <BsStarFill/>
      </span>
    </div>
  )
}

export default Rating