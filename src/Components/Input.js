import React from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props)

    this.getText()

    this.state = {
      content: props.inputText,
      disabled: ''
    }
  }

  getText() {
    fetch('./defaultInput.txt')
      .then((r) => r.text())
      .then((text) => {
        this.setState({
          content: text
        })
      });
  }

  handleContentChange = event => {
    this.setContent(event.target.value)
  }

  setContent = content => {
    let disabledStr = 'disabled'
    if (content.length > 0) {
      disabledStr = ''
    }
    this.setState({
      content: content,
      disabled: disabledStr
    })
  }

  render() {
    return (
      <div className='flex 
                m-3
                flex-grow
                gap-3
                items-center
                bg-base-100
                drop-shadow-lg 
                flex-col 
                p-3 
                rounded-lg
                w-full
                max-w-5xl
                mx-auto'>
        <h2 className='text-lg font-medium text-base-content'>Speed Read Content</h2>
        <textarea value={this.state.content} onChange={this.handleContentChange} className='dark:bg-gray-800 
                    bg-base-200
                    w-full
                    resize-none
                    rounded-lg p-1 
                    focus:outline-primary 
                    focus:outline-offset-0
                    focus:outline-none
                    focus:outline-4
                    flex-grow'
          placeholder='Enter content here...' />
        <div className='w-full flex gap-3 justify-center'>
          <div className='basis-0 flex-grow'></div>
          <button disabled={this.state.disabled} type='button' onClick={() => this.props.setInput(this.state.content, true)} className="btn btn-outline btn-success ml-auto">Let's Go</button>
          <div className='basis-0 flex-grow'>
            <button type='button' onClick={() => this.setContent('')} className="btn btn-outline btn-info float-right">Clear</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Input
