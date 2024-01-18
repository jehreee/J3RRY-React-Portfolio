import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='flex justify-center text-center w-full h-10  border-t-4 border-gray-500 text-white bg-gray-800 md:h-10'>
            <footer className='pt-2'>
                <p>Copyright ⓒ <span className='font-signature'>J3RRY</span>  {year}</p>
            </footer>
        </div>
    )
}

export default Footer