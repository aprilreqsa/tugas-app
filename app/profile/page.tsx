import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaFacebook, FaHome, FaEnvelope,FaPhone} from 'react-icons/fa'

const page = () => {
  return (
    <div className='flex items-center justify-center flex-col space-y-3 object-cover'>
        <h1 className='font-bold text-4xl'>Profile</h1>
        <Image 
        alt='Foto profile'
        height={200}
        width={200}
        src="/images/foto.jpg"
        className='rounded-full'
        >
        </Image>
        <p className='text-xl'>Halo, Nama saya Mochamad Jafar Aprilreqsa Sidiq, sekarang saya sedang belajar di JDA (JABAR DIGITAL ACADEMY) </p>
        <div className='mt-5'>
            <div className='flex items-center space-x-2'>
            <FaHome  />
            <p className='text-xl'>Jl Linggawastu Dalam No 206 Bandung</p>
        </div>
        <div className='flex items-center space-x-2'>
            <FaEnvelope />
            <p className='text-xl'>Aprilreqsa3@gmail.com</p>
        </div>
        <div className='flex items-center space-x-2'>
            <FaPhone />
            <p className='text-xl'>0878-2407-2494</p>
        </div>
        <div className='flex items-center space-x-4'>
            <a href='https://www.facebook.com/RavenGarD' className=''>
                <FaFacebook className='h-5 w-5 hover:bg-gray-400 rounded-lg' />
            </a>
            <a href='https://www.instagram.com/aprilreqsas'>
                <FaInstagram className='h-5 w-5 hover:bg-gray-400 rounded-lg'/>
            </a>
            
        </div>
        </div>
        <button className='bg-red-600 rounded-lg p-2  hover:bg-red-400 text-white'>
            <Link href="/contact">
            Contact Me
            </Link>
        </button>
        

    </div>
  )
}

export default page