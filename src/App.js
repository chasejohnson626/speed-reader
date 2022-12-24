import React from 'react'
import SpeedReader from './Components/SpeedReader.js'
import colors from 'tailwindcss/colors'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
        darkModeClass: 'App'
    }

    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }

  toggleDarkMode(darkMode) {
    let darkModeClassStr = 'App'
    if (darkMode) {
      darkModeClassStr = 'App dark'
      document.body.style = `background: ${colors.gray[900]}`
    } else {
      document.body.style = `background: ${colors.gray[100]}`
    }
    this.setState({
      darkModeClass: darkModeClassStr
    })
  }

  render() {
    return (
      <div className={this.state.darkModeClass}>
        <header className="App-header">
          <SpeedReader toggleDarkMode={this.toggleDarkMode}/>
        </header>
      </div>
    );
  }
}

export default App;
