import React from 'react'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
    const router = useRouter()

    const  handleOnSubmit = (event) => {
        event.preventDefault();
    
        const fields = Array.from(event.currentTarget.elements);
        const username = fields.find(field => field.name === 'username')?.value;
    
        router.push(`/user/${username}`);
    }

    return (
        <div className='flex justify-between items-center gap-3 px-5 py-4 max-w-[400px] w-full'>
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

            <form className="flex items-center" onSubmit={handleOnSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder='username'
                    className='px-2 outline-none h-9 border-2 border-purple-400 rounded-l-md focus:shadow-bs3'
                />
                <button className='bg-purple-mid text-white h-9 px-2 rounded-r-md'>
                    <FaSearch />
                </button>
            </form>
        </div>
    )
}

export default Navbar
