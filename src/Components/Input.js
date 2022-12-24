import React from 'react'

class Input extends React.Component {
    render() {
        return(
            <div className='flex 
                gap-3
                items-center
                bg-white 
                drop-shadow-lg 
                flex-col 
                p-3 
                dark:bg-gray-700 
                rounded-lg 
                dark:text-white'>
                <h2 className='text-lg font-medium text-gray-600 dark:text-white'>Speed Read Content</h2>
                <textarea className='dark:bg-gray-800 
                    bg-gray-100
                    w-full
                    resize-none min-h-[400px] 
                    rounded-lg p-1 
                    focus:outline-primary 
                    focus:outline-offset-0
                    focus:outline-none'
                    placeholder='Enter content here...'/>
            </div>
        );
    }
}

export default Input