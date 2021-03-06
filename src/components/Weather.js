import React from 'react'
import Result from './Result'
import { ThemeConsumer } from '../context/theme'

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      city: '',
      weatherData: null,
      NFmsg: null,
      errMsg: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleData = this.handleData.bind(this)
  }
  componentDidMount() {
    // console.log(navigator.geolocation);
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.handleData(position.coords.longitude, position.coords.latitude);
      },
      err => {
        // console.log(err.message);
        if(err.message) {
          this.setState({ 
            errMsg: err.message,
          })
        }
      }
    )  
  }

  handleChange(e) {
    this.setState({
      city: e.target.value
    })
  }

  async handleData(lon='', lat='') {
    // console.log(lon)
    try {
      const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lat=${lat}&lon=${lon}`);
      const data = await result.json();
      
      if ( data.cod === '404') {
        this.setState({
          NFmsg: data.message
        })
      } else if ( data.cod === 200 ) {
        this.setState({
          weatherData: data
        })
      } 
      console.log(data);
    } catch(e) {
      console.error(e);
    }
  }

  handleSearch (e) {
    e.preventDefault();
    this.handleData();
    // reset data
    this.setState({
      weatherData: null,
      city: '',
      NFmsg: ''
    }) 
  }
  render() {
    return(
      <ThemeConsumer>
        {({theme}) => (
          <div className={`ui card weather weather-${theme}`}>
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
              {!this.state.weatherData && !this.state.NFmsg && !this.state.errMsg &&
                <p>Searching your location...</p>
              }
              {this.state.errMsg && !this.state.weatherData && !this.state.NFmsg &&
                <p>{`${this.state.errMsg}. Search your city's weather`}</p>
              }
              {this.state.NFmsg && 
                <div>
                  <p>{`Sorry, ${this.state.NFmsg}`}</p>
                </div>}
              {this.state.weatherData && 
                <Result weatherData={this.state.weatherData} />}
            </div>
          </div>
        )}
      </ThemeConsumer>
      
    )
  }
}