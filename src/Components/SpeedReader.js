import React from 'react'
import Input from './Input.js'
import Styles from './SpeedReader.module.css'

class SpeedReader extends React.Component {
    constructor (props) {
        super(props)

        /*
        this.state = {
            things here
        }
        */
        this.inputText = ''
        this.setInput = this.setInput.bind(this)
    }

    setInput(input) {
        this.inputText = input
    }

    render() {
        return (
            <div className={Styles.main}>
                <Input setInput={this.setInput} />
            </div>
        );
    }
}

export default SpeedReader