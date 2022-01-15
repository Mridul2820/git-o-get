import React from 'react'
import Search from '../components/reuse/Search'

const Home = () => {


    return (
        <div className='py-8 px-5 h-full md:h-[calc(100vh-48px)] flex gap-10 flex-col justify-center items-center'>
            <h1 className='text-center text-2xl md:text-3xl font-bold'>View Your Github Profile in a Different and Graphical way</h1>
            <div className="flex gap-5 flex-col-reverse md:flex-row justify-center items-center max-w-[1200px] w-full mx-auto pb-5 pt-0 md:pt-5">
                <div className="w-full md:w-[50%]">
                    <img 
                        src="/assets/developer_activity.svg" 
                        alt="developer_activity"
                        className='w-full max-w-[500px] mx-auto'
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-5 shadow-bs3 hover:shadow-bs2 border-2 border-slate-400 rounded-md w-full md:w-[50%] h-full bg-white">
                    <div className="p-3 w-16 h-16 rounded-full shadow-bs2 border-2 border-slate-400">
                        <img 
                            src="/logo.png" 
                            alt="logo"
                            className='w-full'
                        />
                    </div>
                    <h2 className="text-xl font-bold">Serach Your Github Username</h2>
                    <Search />
                    <p className="font-semibold text-xl">Features</p>

                    <ul className='flex justify-center flex-wrap gap-3 select-none'>
                        <li className='p-2 bg-slate-200 rounded-md cursor-pointer shadow-bs4'>Profile Details</li>
                        <li className='p-2 bg-slate-200 rounded-md cursor-pointer shadow-bs4'>Language Crad</li>
                        <li className='p-2 bg-slate-200 rounded-md cursor-pointer shadow-bs4'>Shareable Social Card</li>
                        <li className='p-2 bg-slate-200 rounded-md cursor-pointer shadow-bs4'>Profile Stats</li>
                        <li className='p-2 bg-slate-200 rounded-md cursor-pointer shadow-bs4'>Profile Contribution Calander</li>
                        <li className='p-2 bg-slate-200 rounded-md cursor-pointer shadow-bs4'>List of Followers{'('}last 100{')'}</li>
                        <li className='p-2 bg-slate-200 rounded-md cursor-pointer shadow-bs4'>Most forked Repository Graph</li>
                        <li className='p-2 bg-slate-200 rounded-md cursor-pointer shadow-bs4'>Most Stared Repository Graph</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
