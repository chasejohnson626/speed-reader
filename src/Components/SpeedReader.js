import React from 'react'
import Input from './Input.js'
import Header from './Header.js'
import Display from './Display.js'
import Settings from './Settings'

class SpeedReader extends React.Component {
    constructor(props) {
        super(props)

        this.darkMode = props.darkMode;
        this.setInput = this.setInput.bind(this)
        this.toggleDarkMode = this.toggleDarkMode.bind(this)

        this.state = {
            inputSet: false,
            inputText: ''
        }
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode
        this.props.toggleDarkMode(this.darkMode)
    }

    setInput(input) {
        console.log(input)
        this.setState({
            inputSet: true,
            inputText: input
        })
    }

    render() {
        console.log('newInput ' + this.state.inputText)
        return (
            <div className='h-[100vh] flex flex-col'>
                <Header toggleDarkMode={this.toggleDarkMode}/>
                { 
                    this.state.inputSet 
                        ? 
                        <div className='h-full w-full mx-auto max-w-6xl flex flex-wrap gap-3 py-3 justify-center'>
                            <Display inputText={this.state.inputText} />
                            <Settings />
                        </div> 
                        : 
                        <Input setInput={this.setInput} />
                }
            </div>
        );
    }
}

export default SpeedReader