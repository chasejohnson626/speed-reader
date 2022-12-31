import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';
import { BsFillPauseFill } from 'react-icons/bs';

class Display extends React.Component {
    constructor(props) {
        super(props)

        this.pausePlay = this.pausePlay.bind(this)
        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
        this.setIndex = this.setIndex.bind(this)

        this.state = {
            words: props.inputText.split(/\n| /).filter(string => string),
            wordIndex: 0,
            word: null,
            play: false,
            textSizes: ['text-xs', 'text-sm', 'text-md', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl']
        }
    }

    pausePlay(play) {
        if(play.target.checked) {
            this.play()
        } else {
            this.pause()
        }
        this.setState({
            play: play.target.checked
        })
    }

    play() {
        var intervalId = setInterval(() => {
            if (this.state.wordIndex < this.state.words.length - this.props.numWordsDisp) {
                this.setState(prevState => ({
                    wordIndex: prevState.wordIndex + this.props.numWordsDisp
                }))
            } else {
                if (this.state.intervalId) {
                    clearInterval(this.state.intervalId);
                    this.setState({
                        play: false
                    });
                }
            }
        }, (1/(this.props.wpm / 60)) * 1000 * this.props.numWordsDisp);

        this.setState({
            intervalId: intervalId
        })
    }

    pause() {
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId)
        }
    }

    setIndex(index) {
        this.setState({
            wordIndex: parseInt(index.target.value)
        })
    }

    componentWillUnmount() {
        this.pause()
    }

    render() {
        return(
            <div className='bg-base-100 rounded-lg p-3 min-h-[60%] max-w-4xl w-full flex flex-col justify-center items-center'>
                <div className={'my-auto text-center ' + this.state.textSizes[this.props.textSize]}>
                    {this.state.words.slice(this.state.wordIndex, this.state.wordIndex + this.props.numWordsDisp).join(' ')}
                </div>
                <div className='justify-end w-full flex items-center'>
                    <label className="swap">
                        <input type="checkbox" checked={this.state.play} onChange={this.pausePlay} />
                        <BsFillPauseFill className='swap-on fill-current w-10 h-10'/>
                        <BsFillPlayFill className='swap-off fill-current w-10 h-10'/>
                    </label>
                    <input type="range" min="0" max={this.state.words.length - this.props.numWordsDisp} value={this.state.wordIndex} onChange={this.setIndex} className="range range-primary touch-none" />
                </div>
            </div>
        )
    }
}

export default Display