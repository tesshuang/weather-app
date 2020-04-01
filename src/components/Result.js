import React from 'react'

export default class Result extends React.Component {

  render() {
    const { name, weather, main, wind } = this.props.weatherData
    const curWeather = weather[0]
    const today = new Date().toString().slice(0, 15);

    return(
      <div>
        <div className='result-wrapper'>
          <h4 className='name'>{name}</h4>
          <p className='date'>{today}</p>
          <div className='general'>
            <img src={`http://openweathermap.org/img/wn/${curWeather.icon}@2x.png`} alt={`current weather of ${name}`}/>
            <p className='temp'>{`${main.temp}°`}</p>
            <p className='desc'>{curWeather.description}</p>
          </div>
          <div className='more-info'>
            <div className='info'>
              <div className='detail'>{`${wind.speed}m/s`}</div>
              <h5 className='title'>Wind</h5>
            </div>
            <div className='info'>
              <div className='detail'>{`${main.humidity}%`}</div>
              <h5 className='title'>Humidity</h5>
            </div>
            <div className='info'>
              <div className='detail'>{`${main.temp_max}°`}</div>
              <h5 className='title'>Max</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}