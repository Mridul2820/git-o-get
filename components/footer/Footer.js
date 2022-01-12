import React from 'react'

const Footer = () => {
    return (
        <div className='p-3 flex justify-center bg-slate-200'>
            &copy; {new Date().getFullYear()} by
            <a 
                className='ml-1 font-semibold' 
                href="https://www.mridul.tech/"
                target='_blank'
                rel='noreferrer'
            >
                Mridul
            </a>
            .{' '}
            Made with ❤ {'& '}
            <a 
                className='ml-1 font-semibold' 
                href="https://github.com/Mridul2820/crypto-check"
                target='_blank'
                rel='noreferrer'
            >
                {'<Code/>'}
            </a>
        </div>
    )
}

export default Footer
