"use client"
import React, { useState } from 'react'
import logo from "@/app/assets/dulcia-high-resolution-logo-transparent.png"
import Image from 'next/image'
import Link from 'next/link'
import { HiEyeSlash, HiEye } from 'react-icons/hi2'
import { auth } from '@/app/firebase'
import { useRouter } from 'next/navigation'
import Spinner from '@/app/components/spinner'


type Props = {
    
}

const Login = ({}: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  const signIn = (e:any) => {
    // so the page doesnot refresh
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
            // firebase login function
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth) => {
        // console.log(auth);
        if(auth) {
          router.push('/')
        }
    })
    // .catch(error =>alert(error.message))
   .catch((error) => {
    if(error.code === 'auth/wrong-password') {
      setError('Incorrect passsword. Please try again.');
    } else if (error.code === 'auth/user-not-found') {
      setError('No user found with this email.');
    } else if (error.code === 'auth/invalid-email') {
      setError("The email address is not valid. Please enter a valid email.")
    }else{setError('incorrect email or password. Please try again')}
   }).finally(() => {
    setLoading(false);
   })
    
    }, 1500)


  };
  // password visibility
  const toggleVisibility = () => {
    setVisible(!visible)
  }
  return (
    <>
        <div className='flex flex-col items-center bg-gray-200 pt-10 pb-16'>
                    <Link href={"/home"} className=''>
                    <Image className='w-36 object-contain' src={logo} alt='Dulcia' priority/>
                    </Link>
                    <div className='mt-16 border py-14 px-5 mx-5 flex flex-col gap-6 shadow-lg bg-white'>
                    <h1 className=' text-xl ssm:text-2xl text-primary-200 font-bold'>Sign-in</h1>
                        <form className='flex flex-col'>
                          <div className='flex flex-col'>
                          <h5 className='text-[16px] font-bold mb-2'>E-mail</h5>
                          <input
                          value={email} 
                          onChange={e => setEmail(e.target.value)}
                          type='text' 
                          className='outline outline-1 pl-2 text-[15px] py-[14px]'/>
                          </div>
                          <div className='mt-4'>
                          <h5 className='text-[16px] font-bold mb-2'>Password</h5>
                          <div  className='relative flex flex-col'>
                             <input
                             value={password} 
                             onChange={e => setPassword(e.target.value)}
                             type={visible ? 'text': 'password'} 
                             className='outline outline-1 pl-2 text-[15px] py-[14px]'/>
                             {
                              visible ?   <HiEyeSlash onClick={toggleVisibility} className='absolute top-1/2 -translate-y-1/2 right-5 text-primary-200 w-6 h-6'/> : <HiEye onClick={toggleVisibility} className='w-6 h-6 absolute top-1/2 -translate-y-1/2 right-5 text-primary-200'/>
                             }
                           
                          </div>
                         
                          </div>
                        
                          <button 
                          type='submit'
                          onClick={signIn}
                          className='bg-yellow-400 text-primary-200 rounded-sm px-2 py-[14px] mt-5 md:mb-0 font-bold'>Sign In</button>

                        </form>
                        
                          {loading && <Spinner/>}

                        <div className={!error || loading ? 'hidden':'shadow-lg py-6 px-3'}>
                            {
                              error && <p className='text-red-500 font-semibold text-sm'>{error}</p>
                            }
                        </div>
                          
                        
                       
                        <p className='text-[12px]'>By signing-in you agree to Dulcia&apos;s <Link href={'#'} className='text-blue-400'>terms and conditions.</Link></p>
                        <div>
                          <p className='text-sm'>Don&apos;t have an account?</p>
                          <Link href={'/register'} className='flex flex-col'>
                          <button className='bg-primary-200 text-white rounded-sm px-2 py-[14px] mt-3 md:mb-0'>Create your Dulcia account</button>

                          </Link>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Login