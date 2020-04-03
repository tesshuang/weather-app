import React from 'react';
import Weather from './components/Weather'
import Nav from './components/Nav'

export default class App extends React.Component {
  render() {
    return (
      <div className='ui app'>
        <Nav />
        <Weather />
      </div>
    );
  }
}
