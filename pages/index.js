import React from 'react'
import Image from 'next/image'
import Search from '../components/reuse/Search'
import {useTheme} from 'next-themes'

const Home = () => {

    const FreturePoint = 'text-center font-semibold py-2 px-2 sm:px-4 bg-slate-200 rounded-md cursor-pointer shadow-bs4'
    const {theme, setTheme} = useTheme()
    return (
        <main className='py-8 px-5 h-full md:h-[calc(100vh-48px)] flex gap-10 flex-col justify-center items-center'>
            <h1 className='text-center text-2xl md:text-3xl font-bold'>Git O Get - Github Profile Stats and Graphs in One Place</h1>
            <div className="flex gap-5 flex-col md:flex-row justify-center items-center max-w-[1200px] w-full mx-auto pb-5 pt-0 md:pt-5">
                <div className="w-full md:w-[50%]">
                    <Image 
                        height={400}
                        width={500}
                        priority={true}
                        layout='responsive'
                        src="/svg/developer_activity.svg" 
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
                            height={64}
                            width={64}
                        />
                    </div>
                    <h2 className="text-center text-base sm:text-xl font-bold">Serach Your Github Username</h2>
                    <Search height="h-12"/>
                    <p className="font-semibold text-xl">Features</p>

                    <ul className='flex justify-center flex-wrap gap-3 select-none'>
                        <li className={FreturePoint}>Profile Details</li>
                        <li className={FreturePoint}>Language Crad</li>
                        <li className={FreturePoint}>Shareable Social Card</li>
                        <li className={FreturePoint}>Profile Stats</li>
                        <li className={FreturePoint}>Profile Contribution Calander</li>
                        <li className={FreturePoint}>List of Followers{'('}last 100{')'}</li>
                        <li className={FreturePoint}>Most forked Repository Graph</li>
                        <li className={FreturePoint}>Most Stared Repository Graph</li>
                    </ul>
                </div>
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="position: relative bottom: 30px bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Toggle Darkmode
                </button>
            </div>
            
        </main>
    )
}

export default Home
