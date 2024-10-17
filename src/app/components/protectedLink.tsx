import Link from 'next/link';
import React, { useContext, useState } from 'react'
import { CartContext } from './cartContext';
import { FaShoppingCart } from 'react-icons/fa';
import ErrorMsgContainer from './errorMsgContainer';


type Props = {
    href: string;
    children: React.ReactNode;
    className: string;
}

const ProtectedLink = ({href, children, className}: Props) => {
    const {dispatch, state} = useContext(CartContext)
    const [error, setError] = useState('')
    const [openError, setOpenError] = useState(false)
    
    const alertLogin = () => {
        setError('Please sign-in to access cart');
        setOpenError(true);
    }
    if(!state.user) {
        return (
            <>
                        <div 
            className='flex items-center gap-2 cursor-pointer text-primary-50'
            onClick={alertLogin}>
            <FaShoppingCart className="w-9 h-9" />
            <span className='text-lg'>{state?.items.length}</span>


            </div>
            {
                error && openError && 
                <ErrorMsgContainer>
                               <h1 className='text-white sm:text-5xl ssm:text-3xl text-2xl px-10'>{error}</h1>
           
                            <button onClick={() => setOpenError(false)} className='border bg-primary-200 text-white px-7 py-3 rounded-md text-lg'>Close</button>
                </ErrorMsgContainer>
            }
            </>

        )
    }
  
    return (
    <Link href={href} className={className}>{children}</Link>
  )
}

export default ProtectedLink