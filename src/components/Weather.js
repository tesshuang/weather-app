import React from 'react'

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleChange(e) {
    console.log(e.target.value);

    this.setState({
      value: e.target.value
    })
  }

  handleSearch(e) {
    e.preventDefault(); 

  }
  render() {
    return(
      <div className='ui card weather'>
        <div className='content'>
          <div className='header'>Hi from the weathr comp</div>
        </div>
        <div className='content'>
          <form className='ui action input' onSubmit={this.handleSearch}> 
            <input 
              type='text' 
              placeholder='Search your city'
              onChange={this.handleChange} />
            <button 
              type='submit' 
              className='ui button'
              >
                Search
            </button>
          </form>
          <div>
            <p>Result from the api:</p>
          </div>
        </div>

      </div>
    )
  }
}