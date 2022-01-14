import React from 'react'

const SocialCard = ({ ogImageUrl }) => {
    return (
        <div className='p-3 pb-0 shadow-bs1 rounded-md h-full w-full min-h-[400px] bg-white'>
            <p className='text-center mb-3 text-xl font-semibold'>Social Card</p>
            <img 
                src={ogImageUrl} 
                alt="Social card" 
                className='object-contain w-full'
            />
        </div>
    )
}

export default SocialCard
