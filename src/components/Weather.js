import React from 'react'
import Result from './Result'

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      city: '',
      weatherData: null,
      NFmsg: null,
      lat: '',
      lon: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleData = this.handleData.bind(this)
  }
  componentDidMount() {
    console.log(navigator.geolocation);
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // console.log(position)
        this.setState({
          lat: Math.round(position.coords.latitude),
          lon: Math.round(position.coords.longitude),
        })
        this.handleData();
      },
      err => {
        console.log(err.message);
        // this.setState({ city: 'london' })
      }
    )
    
    
  }

  handleChange(e) {
    this.setState({
      city: e.target.value
    })
  }

  async handleData() {
    try {
      const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lat=${this.state.lat}&lon=${this.state.lon}`);
      const data = await result.json();
      
      if( data.cod === '404') {
        this.setState({
          NFmsg: data.message
        })
      }
      this.setState({
        weatherData: data
      })
      console.log(data);
    } catch(e) {
      console.error(e);
    }
  }

  handleSearch(e) {
    e.preventDefault(); 
    this.handleData();

    this.setState({
      city: ''
    })
  }
  render() {
    return(
      <div className='ui card weather'>
        <div className='content'>
          <form className='ui action input city-input' onSubmit={this.handleSearch}> 
            <input 
              type='text' 
              placeholder='Search your city'
              onChange={this.handleChange} 
              value={this.state.city}/>
            <button 
              type='submit' 
              className='ui button'
              >
                Search
            </button>
          </form>
        </div>
        <div className='content'>
          {this.state.NFmsg && 
            <div>
              <p>{this.state.NFmsg}</p>
            </div>}
          {this.state.weatherData && 
            <Result weatherData={this.state.weatherData} />}
        </div>
      </div>
    )
  }
}