import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from '../reuse/Search'

const Navbar = () => {

    return (
        <nav className='flex justify-between items-center gap-3 px-5 py-4 bg-white'>
            <div className="flex justify-between max-w-[420px] w-full">
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
            </div>
        </nav>
    )
}

export default Navbar
