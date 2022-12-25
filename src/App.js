import React from 'react'
import SpeedReader from './Components/SpeedReader.js'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.darkMode = false
    this.toggleDarkMode(this.darkMode)
    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }

  toggleDarkMode(darkMode) {
    let theme = darkMode ? 'dark' : 'light'
    document.querySelector('html').setAttribute('data-theme', theme);
  }

  render() {
    return (
      <div className='App'>
        <header className="App-header">
          <SpeedReader darkMode={this.darkMode} toggleDarkMode={this.toggleDarkMode}/>
        </header>
      </div>
    );
  }
}

export default App;
