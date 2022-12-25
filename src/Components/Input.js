import React from 'react'

class Input extends React.Component {
    render() {
        return(
            <div className='flex 
                gap-3
                items-center
                bg-base-100
                drop-shadow-lg 
                flex-col 
                p-3 
                rounded-lg'>
                <h2 className='text-lg font-medium text-base-content'>Speed Read Content</h2>
                <textarea className='dark:bg-gray-800 
                    bg-base-200
                    w-full
                    resize-none min-h-[400px] 
                    rounded-lg p-1 
                    focus:outline-primary 
                    focus:outline-offset-0
                    focus:outline-none
                    focus:outline-4'
                    placeholder='Enter content here...'/>
            </div>
        );
    }
}

export default Input