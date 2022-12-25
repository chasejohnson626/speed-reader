import React from 'react'

class Input extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            content: '',
            disabled: 'disabled'
        }
    }

    handleContentChange = event => {
        let disabledStr = 'disabled'
        if (event.target.value.length > 0) {
            disabledStr = ''
        }
        this.setState({
            content: event.target.value,
            disabled: disabledStr
        })
    }

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
                <textarea value={this.state.content} onChange={this.handleContentChange} className='dark:bg-gray-800 
                    bg-base-200
                    w-full
                    resize-none min-h-[400px] 
                    rounded-lg p-1 
                    focus:outline-primary 
                    focus:outline-offset-0
                    focus:outline-none
                    focus:outline-4'
                    placeholder='Enter content here...' />
                <button disabled={this.state.disabled} type='button' onClick={() => this.props.setInput(this.state.content)} className="btn btn-outline btn-secondary">Let's Go</button>
            </div>
        );
    }
}

export default Input