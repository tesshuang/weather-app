import React from 'react';
import Weather from './components/Weather'
import Nav from './components/Nav'

function App() {
  return (
    <div className='ui app'>
      <Nav />
      <Weather />
    </div>
  );
}

export default App;
