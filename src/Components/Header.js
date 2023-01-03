import React from 'react'
import { BsMoonStarsFill } from 'react-icons/bs';

const Header = ({ toggleDarkMode }) => {
  return (
    <div className='min-h-[60px] flex gap-10 text-center items-center justify-between bg-base-100 shadow-xl text-lg font-medium text-base-content dark:text-white px-5'>
      <div className='flex-grow basis-0'>
        <h1 className='float-left'>Speed Reading</h1>
      </div>
      <h1>Created by <a href="https://cjwebdev.com/" className='underline text-info'>CJ Web Dev</a></h1>
      <div className='flex-grow basis-0'>
        <button onClick={toggleDarkMode} className='float-right bg-primary text-primary-content shadow-md rounded-3xl hover:bg-primary-focus'>
          <BsMoonStarsFill className='m-3 w-6 h-6' />
        </button>
      </div>
    </div>
  );
}

export default Header
