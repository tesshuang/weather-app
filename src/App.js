import React from 'react';
import Weather from './components/Weather'
import Nav from './components/Nav'
import { ThemeProvider } from './context/theme'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      setTheme: () => {
        this.setState(({theme}) => ({ theme:theme ==='light' ? 'dark' : 'light' }))
      }
    }
  }
  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className={`ui app app-${this.state.theme}`}>
          <Nav />
          <Weather />
        </div>
      </ThemeProvider>

    );
  }
}
