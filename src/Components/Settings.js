import React from 'react'
import { BsInfoCircle } from 'react-icons/bs';

class Settings extends React.Component {
  constructor(props) {
    super(props)

    this.setWPM = this.setWPM.bind(this)
    this.setNumWordsDisp = this.setNumWordsDisp.bind(this)
    this.setTextSize = this.setTextSize.bind(this)
    this.setVariableSpeed = this.setVariableSpeed.bind(this)

    this.state = {
      wpm: props.wpm,
      numWordsDisp: props.numWordsDisp,
      textSize: props.textSize,
      variableSpeed: props.variableSpeed
    }
  }

  setWPM(wpm) {
    this.setState({
      wpm: wpm.target.value
    });
    this.props.setWPM(parseInt(wpm.target.value));
  }

  setNumWordsDisp(numWordsDisp) {
    this.setState({
      numWordsDisp: numWordsDisp.target.value
    });
    this.props.setNumWordsDisp(parseInt(numWordsDisp.target.value));
  }

  setTextSize(textSize) {
    this.setState({
      textSize: textSize.target.value
    });
    this.props.setTextSize(parseInt(textSize.target.value))
  }

  setVariableSpeed(variableSpeed) {
    this.setState({
      variableSpeed: variableSpeed.target.checked
    });
    this.props.setVariableSpeed(variableSpeed.target.checked)
  }

  render() {
    return (
      <div className='bg-base-100 rounded-lg p-3 flex-grow flex flex-col'>
        <div className='gap-3 grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]'>
          <div className='form-control gap-3 border-2 p-3 rounded-lg border-base-300'>
            <label className="input-group !p-0">
              <span>WPM</span>
              <input type="text" value={this.state.wpm} onChange={this.setWPM} className="w-0 flex-grow input input-bordered" />
            </label>
            <input type="range" min="10" max="1000" value={this.state.wpm} step='10' onChange={this.setWPM} className="range range-primary touch-none" />
          </div>
          <div className='form-control gap-3 border-2 p-3 rounded-lg border-base-300'>
            <label className="input-group !p-0">
              <span>Words</span>
              <input type="text" value={this.state.numWordsDisp} onChange={this.setNumWordsDisp} className="w-0 flex-grow input input-bordered" />
            </label>
            <input type="range" min="1" max="10" value={this.state.numWordsDisp} onChange={this.setNumWordsDisp} className="range range-primary touch-none" />
          </div>
          <div className='border-2 p-3 rounded-lg border-base-300'>
            <div className='mx-2'>Text Size</div>
            <input type="range" min="0" max="12" value={this.state.textSize} onChange={this.setTextSize} className="range range-primary" />
          </div>
          <div className="form-control border-2 rounded-lg border-base-300">
            <div className="cursor-pointer flex gap-1 px-0 py-3 justify-evenly items-center w-full h-full">
              <span className="label-text text-center">Variable Speed</span>
              <input type="checkbox" className="toggle toggle-primary" onClick={this.setVariableSpeed} checked={this.state.variableSpeed} />
              <div className="tooltip tooltip-left" data-tip="Maintain same WPM average but slow down on longer words and speed up on shorter words">
                <BsInfoCircle className='mx-auto' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-grow flex flex-col py-3'>
          <div className=' mt-auto flex justify-center items-center gap-3 flex-wrap'>
            <button onClick={this.props.reset} className="btn btn-outline btn-info">Reset</button>
            <button onClick={() => this.props.setInput('', false)} className="btn btn-outline btn-info">New Entry</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
