import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from '../reuse/Search'
import { BsGithub } from 'react-icons/bs'

const Navbar = () => {

    return (
        <nav className='flex justify-center items-center bg-white w-full'>
            <div className="flex justify-between w-full max-w-[1500px] mx-auto px-5 py-4">
                <Link href="/">
                    <a className='h-9 w-9'>
                        <Image 
                            src="/logo.png"
                            alt='logo'
                            height={36}
                            width={36}
                            priority={true}
                        />
                    </a>
                </Link>
                <Search />
                <a 
                    href="https://github.com/Mridul2820/git-o-get"
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsGithub size={24} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
