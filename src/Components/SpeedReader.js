import React from 'react'
import Input from './Input.js'
import Header from './Header.js'
import Display from './Display.js'
import Settings from './Settings'

class SpeedReader extends React.Component {
    constructor(props) {
        super(props)

        this.darkMode = props.darkMode;
        this.setInput = this.setInput.bind(this);
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
        this.setWPM = this.setWPM.bind(this);
        this.setNumWordsDisp = this.setNumWordsDisp.bind(this);
        this.stopPlayback = this.stopPlayback.bind(this);

        this.display = React.createRef();

        this.state = {
            inputSet: false,
            inputText: '',
            wpm: 300,
            numWordsDisp: 1
        };
    }

    setWPM(wpm) {
        this.stopPlayback();
        this.setState({
            wpm: wpm
        });
    }

    setNumWordsDisp(numWordsDisp) {
        this.stopPlayback();
        this.setState({
            numWordsDisp: numWordsDisp
        });
    }

    stopPlayback() {
        if (this.display.current.play) {
            this.display.current.setState({
                play: false
            });

            this.display.current.pause();
        }
    }

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        this.props.toggleDarkMode(this.darkMode);
    }

    setInput(input) {
        this.setState({
            inputSet: true,
            inputText: input
        });
    }

    render() {
        return (
            <div className='h-[100vh] flex flex-col'>
                <Header toggleDarkMode={this.toggleDarkMode}/>
                { 
                    this.state.inputSet 
                        ? 
                        <div className='h-full w-full mx-auto max-w-6xl flex flex-wrap gap-3 py-3 justify-center'>
                            <Display inputText={this.state.inputText} wpm={this.state.wpm} numWordsDisp={this.state.numWordsDisp} ref={this.display} />
                            <Settings wpm={this.state.wpm} numWordsDisp={this.state.numWordsDisp} setWPM={this.setWPM} setNumWordsDisp={this.setNumWordsDisp}/>
                        </div> 
                        : 
                        <Input inputText={this.state.inputText} setInput={this.setInput} />
                }
            </div>
        );
    }
}

export default SpeedReader