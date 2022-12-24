import React from 'react'
import { BsMoonStarsFill } from 'react-icons/bs';

const Header = ({ toggleDarkMode }) => {
    return(
        <div className='min-h-[60px] 
            flex
            items-center
            justify-between
            bg-white 
            dark:bg-gray-700 
            drop-shadow-lg 
            text-lg 
            font-medium 
            text-gray-600 
            dark:text-white
            px-5'>
            <h1>Speed Reading</h1>
            <button onClick={toggleDarkMode} className=' bg-inherit shadow-md dark:shadow-gray-800 rounded-3xl hover:bg-black hover:bg-opacity-10'>
                <BsMoonStarsFill className='m-3 w-6 h-6'/>
            </button>
        </div>
    );
}

export default Header