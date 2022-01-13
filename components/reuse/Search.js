import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useRouter } from 'next/router'

const Search = () => {
    const router = useRouter()

    const  handleOnSubmit = (event) => {
        event.preventDefault();
    
        const fields = Array.from(event.currentTarget.elements);
        const username = fields.find(field => field.name === 'username')?.value;
    
        router.push(`/user/${username}`);
    }

    return (
        <form className="flex items-center" onSubmit={handleOnSubmit}>
            <input 
                type="text" 
                name="username" 
                placeholder='username'
                className='px-2 outline-none h-9 border-2 border-purple-400 rounded-l-md focus:shadow-bs3'
            />
            <button type='submit' className='bg-purple-mid text-white h-9 px-2 rounded-r-md'>
                <FaSearch />
            </button>
        </form>
    )
}

export default Search
