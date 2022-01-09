import Image from 'next/image'
import React from 'react'

const ProfileInfo = ({ user }) => {
    console.log(user)
    return (
        <div>
            <div className="flex items-center gap-3 py-10 px-8">
                <Image 
                    src={user.avatarUrl}
                    alt={user.login}
                    height={80}
                    width={80}
                    className='rounded-full'
                />

                <div className="">
                    <h1 className='text-2xl'>
                        <a 
                            href={user.url}
                            target="_blank"
                            rel='norefarer'
                        >
                            {'@'}{user.login}
                        </a>
                    </h1>
                    <h2 className='font-normal text-slate-700'>{user.name}</h2>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
