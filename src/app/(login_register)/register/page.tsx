"use client"
import React, { useEffect, useState } from 'react'
import logo from "@/app/assets/dulcia-high-resolution-logo-transparent.png"
import Image from 'next/image'
import Link from 'next/link'
import { HiEyeSlash, HiEye } from 'react-icons/hi2'
import { auth } from '@/app/firebase'
import { useRouter } from 'next/navigation'
import { validationSchema } from '@/app/Hooks/schema'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Spinner from '@/app/components/spinner'


type Props = {
    
}

interface IFormInput {
  username:string;
  email:string;
  password: string;
  confirmPassword: string;
}

const Register = ({}: Props) => {
  const {register,trigger, formState:{errors}} = useForm<IFormInput>({resolver:yupResolver(validationSchema)
  })
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [visible, setVisible] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();



  // signup using firebase
  const signUp = async(e: any) => {
    e.preventDefault();
    setLoading(true); 

    setTimeout(async() => {
      //  checks validation b4 creating user
   const isValid = await trigger();
   if(isValid) {
    auth

    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      // this means it successfully created a new user with email and password.
      setSuccessMsg(`${username}, you have successfully created an account!. HAPPY SHOPPING 🎉`)
      console.log(auth);
      var user = auth.user;
      user?.updateProfile({
        displayName: username
      }).then(() => {

        setTimeout(() => {
          router.push('/login')
        }, 1500);
       
      })
    })
    .catch((error) => {
      alert(error.message)
    })
    .finally(() => {
      setLoading(false);
    });
 } 

 if(!isValid) {
    setLoading(false);
 }
 }, 2000);

 
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
                      <h1 className=' text-xl ssm:text-2xl text-primary-200 font-bold'>Register</h1>
                          <form className='flex flex-col'>
                          <div className='flex flex-col'>
                            <h5 className='text-sm font-bold'>Username</h5>
                            <input
                            {...register('username')}
                            value={username} 
                            onChange={e => setUsername(e.target.value)}
                            type='text' 
                            className='outline outline-1 pl-2 text-sm py-2'/>
                            {errors.username && 
                            <p className='text-[12px] text-red-500'>{errors.username.message}</p>}
                            </div>
                            <div className='flex flex-col mt-4'>
                            <h5 className='text-sm font-bold'>E-mail</h5>
                            <input
                            {...register('email')}
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                            type='text' 
                            className='outline outline-1 pl-2 text-sm py-2'/>
                            {errors.email && 
                            <p  className='text-[12px] text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className='mt-4'>
                            <h5 className='text-sm font-bold'>Password</h5>
                            <div  className='relative flex flex-col'>
                               <input
                               {...register('password')}
                               value={password} 
                               onChange={e => setPassword(e.target.value)}
                               type={visible ? 'text': 'password'} 
                               className='outline outline-1 pl-2 text-sm py-2'/>
                               {
                                visible ?   <HiEyeSlash onClick={toggleVisibility} className='absolute top-1/2 -translate-y-1/2 right-5 text-primary-200'/> : <HiEye onClick={toggleVisibility} className='absolute top-1/2 -translate-y-1/2 right-5 text-primary-200'/>
                               }
                              
                            </div>
                            {errors.password && 
                            <p  className='text-[12px] text-red-500'>{errors.password.message}</p>}
                            </div>
                            <div className='mt-4'>
                            <h5 className='text-sm font-bold'>Confirm-password</h5>
                            <div  className='relative flex flex-col'>
                               <input
                               {...register('confirmPassword')}
                               value={confirmPassword} 
                               onChange={e => setConfirmPassword(e.target.value)}
                               type={visible ? 'text': 'password'} 
                               className='outline outline-1 pl-2 text-sm py-2'/>
                               {
                                visible ?   <HiEyeSlash onClick={toggleVisibility} className='absolute top-1/2 -translate-y-1/2 right-5 text-primary-200'/> : <HiEye onClick={toggleVisibility} className='absolute top-1/2 -translate-y-1/2 right-5 text-primary-200'/>
                               }
                             
                            </div>
                            {errors.confirmPassword && 
                           <p  className='text-[12px] text-red-500'>{errors.confirmPassword.message}</p>}
                            </div>
                          
                            <button 
                            type='submit'
                            onClick={signUp}
                            className='bg-yellow-400 text-primary-200 rounded-sm px-2 py-2 mt-5 md:mb-0 font-bold'>Create account</button>
                          </form>

                          {
                            loading && <Spinner/>
                          }

                          <div className={successMsg ?'shadow-lg py-6 px-3':'hidden'}>
                            {
                              successMsg && <p className='text-green-600 font-semibold text-sm'>{successMsg}</p>
                            }
                          </div>
                          <p className='text-[12px]'>By signing-up you agree to Dulcia's <Link href={'#'} className='text-blue-400'>terms and conditions.</Link></p>
                          <div>
                            <p className='text-sm'>Already have an account?</p>
                            <Link href={'/login'} className='flex flex-col'>
                            <button className='bg-primary-200 text-white rounded-sm px-2 py-2 mt-3 md:mb-0 font-bold'>Sign-in</button>
  
                            </Link>
                           
                          </div>
                      </div>
                  
                </div>
    </>
  )
}

export default Register