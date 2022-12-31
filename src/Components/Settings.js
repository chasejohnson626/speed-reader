import React from 'react'

class Settings extends React.Component {
    constructor(props) {
        super(props)

        this.setWPM = this.setWPM.bind(this)
        this.setNumWordsDisp = this.setNumWordsDisp.bind(this)

        this.state = {
            wpm: props.wpm,
            numWordsDisp: props.numWordsDisp
        }
    }

    setWPM(wpm) {
        this.setState({
            wpm: wpm.target.value
        })
        this.props.setWPM(parseInt(wpm.target.value));
    }

    setNumWordsDisp(numWordsDisp) {
        this.setState({
            numWordsDisp: numWordsDisp.target.value
        })
        this.props.setNumWordsDisp(parseInt(numWordsDisp.target.value));
    }

    render() {
        return(
            <div className='bg-base-100 rounded-lg p-3 flex-grow gap-6 grid-rows-[auto_1fr] grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]'>
                <div className='form-control gap-3'>
                    <label className="input-group !p-0">
                        <span>WPM</span>
                        <input type="text" value={this.state.wpm} onChange={this.setWPM} className="w-0 flex-grow input input-bordered" />
                    </label>
                    <input type="range" min="10" max="1000" value={this.state.wpm} step='10' onChange={this.setWPM} className="range range-primary touch-none" />
                </div>
                <div className='form-control gap-3'>
                    <label className="input-group !p-0">
                        <span>Words</span>
                        <input type="text" value={this.state.numWordsDisp} onChange={this.setNumWordsDisp} className="w-0 flex-grow input input-bordered" />
                    </label>
                    <input type="range" min="1" max="10" value={this.state.numWordsDisp} onChange={this.setNumWordsDisp} className="range range-primary touch-none" />
                </div>
            </div>
        )
    }
}

export default Settings