import React from 'react'

class Display extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            words: props.inputText.split(/\n| /).filter(string => string),
            wordIndex: 0,
            word: null
        }
    }

    componentDidMount() {
        var intervalId = setInterval(() => {
            if (this.state.wordIndex < this.state.words.length - 1) {
                this.setState(prevState => ({
                    wordIndex: prevState.wordIndex + 1
                }))
            } else {
                if (this.state.intervalId) {
                    clearInterval(this.state.intervalId)
                }
            }
        }, 200);

        this.setState({
            intervalId: intervalId
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

    render() {
        return(
            <div className='bg-base-100 rounded-lg p-3 min-h-[60%] max-w-4xl w-full flex justify-center items-center'>
                <div className=' text-5xl'>
                    {this.state.words[this.state.wordIndex]}
                </div>
            </div>
        )
    }
}

export default Display