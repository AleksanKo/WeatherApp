import React, {useEffect, useState} from 'react'
import axios from 'axios'

const WeatherForCountries = ({capital}) => {
    const [wind, setWind] = useState('')
    const [temp, setTemp] = useState(0)
    let api = '75a6f0f0c102814dcb600a363fb65988'
    useEffect(() => {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?q=' + capital + '&units=metric&appid=' + api) 
      .then(response => {
        setWind(response.data.wind.speed)
        setTemp(response.data.main.temp)
        console.log(response.data.wind.speed,'in',response.data.name)
        },)
  }, [])
  return (
      <div>
      <h2>Weather in {capital}</h2>
      <p>Current temperature: {temp} Celsius</p>
      <p>Current wind: {wind} m/s</p>
      </div>
  )
}

const WeatherForCities = ({city}) => {
  const [wind, setWind] = useState(0)
  const [temp, setTemp] = useState(0)
  const [feeling, setFeeling] = useState(0)
  const [weather, setWeather] = useState('')
  const [newCity, setCity] = useState('')
  
  let api = '75a6f0f0c102814dcb600a363fb65988'


  const errorNoCity = () => {
    if (wind) {
      return (
        <div>
        <h2>Weather in {newCity}</h2>
        <p>Current temperature: {temp} °C</p>
        <p>Current wind: {wind} m/s</p>
        <p>Feels like {feeling} °C</p>
        <p>
        {weather}</p>
        </div>
      )
    } else {
      return (
        <div>
        <p>Sorry, no city with such name was found. Try again?</p>
      </div>
      )
    }
  }
  
  useEffect(() => {
  axios
    .get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + api) 
    .then(response => {
      setCity(response.data.name)
      setWind(response.data.wind.speed)
      setTemp(response.data.main.temp)
      setFeeling(response.data.main.feels_like)
      setWeather(response.data.weather[0].main)
      
      console.log(response.data.wind.speed,'in',response.data.name)
      console.log(response.data)
      },
      )
    .catch(error => {
      console.log(error)
      console.log('No such city', error)
      setWind(0)
      setTemp(0)
    })    

  }, [city])
return (
  errorNoCity()
)
}
export {WeatherForCities, WeatherForCountries};
