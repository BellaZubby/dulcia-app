import React from 'react'

type Props = {
    children: React.ReactNode
}

const ErrorMsgContainer = ({children}: Props) => {
  return (
    <div className='fixed left-0 bottom-0 z-[999] h-full w-full flex flex-col items-center justify-center gap-5 bg-black/70'>
        {children}
    </div>
  )
}

export default ErrorMsgContainer