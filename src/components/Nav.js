import React from 'react'
import { ThemeConsumer } from '../context/theme'

export default function Nav () {
  return (
    <ThemeConsumer>
      {({theme, setTheme}) => (
        <nav className='nav-bar'>
          <button 
            className='btn-clear toggle'
            onClick={setTheme}>
            {theme === 'light' ? '🌞' : '🌚'}
          </button>
        </nav>
      )}
      
    </ThemeConsumer>

    
  )
}