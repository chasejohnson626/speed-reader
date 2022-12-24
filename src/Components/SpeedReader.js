import React from 'react'
import Input from './Input.js'
import Header from './Header.js'

class SpeedReader extends React.Component {
    constructor (props) {
        super(props)

        this.inputText = ''
        this.darkMode = false;
        this.setInput = this.setInput.bind(this)
        this.toggleDarkMode = this.toggleDarkMode.bind(this)
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode
        this.props.toggleDarkMode(this.darkMode)
    }

    setInput(input) {
        this.inputText = input
    }

    render() {
        return (
            <div>
                <Header toggleDarkMode={this.toggleDarkMode}/>
                <div className='p-3'>
                    <Input setInput={this.setInput} />
                </div>
            </div>
        );
    }
}

export default SpeedReader