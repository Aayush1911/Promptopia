'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState,useEffect } from 'react'
import{signIn,signOut,useSession,getProviders} from 'next-auth/react'

function Nav() {
  const isUserLogedIn=false;
  const[proviser,setProvider]=useState(null)
  
  useEffect(()=>{
    const setProvider=async()=>{
      const response=await getProviders();
      setProvider(response)
    }
  },[])
  setProvider()

  return (
    <nav className='flex-between w-full mb-16  pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
      <Image src="/assets/images/logo.svg" alt='Promptopia logo' width={30} height={30} className='object-contain'/>
      <p className='logo_text'>Promtopia</p>
      </Link>
      {/* Dektop navigation */}
      <div className='sm:flex hidden'>
      {isUserLogedIn ? (
        <div className='flex gap-3 md:gap-5'>
        <Link href='/create-prompt' className='black_btn'>
        Create Post
        </Link>
        <button type='button' onClick={signOut} className='outline_btn'>
        Sign Out
        </button>
        <Link href='/profile'>
          <Image src="/assets/images/logo.svg" alt='profile' className='rounded-full mr-3'
          width={37} height={37}
          />
        </Link>
      </div>
      ):(
        <>

        </>
      )}
      </div>
    </nav>
  )
}

export default Nav