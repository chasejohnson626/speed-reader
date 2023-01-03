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
    this.setTextSize = this.setTextSize.bind(this)
    this.reset = this.reset.bind(this)
    this.setVariableSpeed = this.setVariableSpeed.bind(this)

    this.display = React.createRef();
    this.settings = React.createRef();

    this.initialState = {
      wpm: 300,
      numWordsDisp: 1,
      textSize: 8,
      variableSpeed: false
    };

    this.state = {
      inputSet: false,
      inputText: '',
      ...this.initialState
    };
  }

  reset() {
    this.stopPlayback();
    this.setState({
      ...this.initialState
    });
    this.settings.current.setState({
      ...this.initialState
    })
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

  setVariableSpeed(variableSpeed) {
    this.stopPlayback();
    this.setState({
      variableSpeed: variableSpeed
    });
  }

  setTextSize(textSize) {
    this.setState({
      textSize: textSize
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

  setInput(input, dispOn) {
    this.setState({
      inputSet: dispOn,
      inputText: input
    });
  }

  render() {
    return (
      <div className='h-[100vh] flex flex-col'>
        <Header toggleDarkMode={this.toggleDarkMode} />
        {
          this.state.inputSet
            ?
            <div className='h-full w-full mx-auto max-w-6xl flex flex-wrap gap-3 py-3 justify-center'>
              <Display inputText={this.state.inputText} wpm={this.state.wpm} numWordsDisp={this.state.numWordsDisp} ref={this.display} textSize={this.state.textSize} variableSpeed={this.state.variableSpeed} />
              <Settings wpm={this.state.wpm} numWordsDisp={this.state.numWordsDisp} setWPM={this.setWPM} setNumWordsDisp={this.setNumWordsDisp} setTextSize={this.setTextSize} textSize={this.state.textSize} reset={this.reset} ref={this.settings} setInput={this.setInput} variableSpeed={this.state.variableSpeed} setVariableSpeed={this.setVariableSpeed} />
            </div>
            :
            <Input inputText={this.state.inputText} setInput={this.setInput} />
        }
      </div>
    );
  }
}

export default SpeedReader
