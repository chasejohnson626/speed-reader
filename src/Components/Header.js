import React from 'react'
import { BsMoonStarsFill } from 'react-icons/bs';

const Header = ({ toggleDarkMode }) => {
    return(
        <div className='min-h-[60px] 
            flex
            items-center
            justify-between
            bg-base-100
            shadow-xl
            text-lg 
            font-medium 
            text-base-content
            dark:text-white
            px-5'>
            <h1>Speed Reading</h1>
            <button onClick={toggleDarkMode} className='bg-primary 
                text-primary-content 
                shadow-md rounded-3xl 
                hover:bg-primary-focus'>
                <BsMoonStarsFill className='m-3 w-6 h-6'/>
            </button>
        </div>
    );
}

export default Header