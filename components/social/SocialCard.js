import React from 'react'
import SocialShare from './SocialShare'

const SocialCard = ({ ogImageUrl, username }) => {
    return (
        <div className='flex flex-col justify-between gap-4 py-3 px-3 md:px-5 shadow-bs1 rounded-md h-full w-full min-h-[400px] bg-white'>
            <div className="flex flex-col justify-center gap-4">
                <p className='text-center text-xl font-semibold'>Social Card</p>
                <img 
                    src={ogImageUrl} 
                    alt="Social card" 
                    className='object-contain w-full rounded-md shadow-bs5 hover:shadow-bs2 transition-all duration-200 border-2 border-slate-300'
                />
            </div>
            
            <SocialShare username={username} />
        </div>
    )
}

export default SocialCard
