import Link from 'next/link'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const NotFound = () => {
    return (
        <div className='min-h-[calc(100vh-48px)] h-full w-full flex justify-center items-center flex-col gap-16 p-2 md:p-10 lg:p-20'>
            <img 
                src="/assets/404.svg" 
                alt="not found" 
                className='w-full max-w-[500px]'
            />
            <Link href='/'>
                <a className="bg-purple-mid flex justify-center items-center gap-2 text-white px-5 py-2 text-lg rounded-lg">
                    <BiArrowBack />Back to home
                </a>
            </Link>
        </div>
    )
}

export default NotFound
