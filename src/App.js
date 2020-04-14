import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import SearchForm from './components/SearchForm'
import Countries from './components/Countries'
import City from './components/City'
import {Button,Navbar} from 'react-bootstrap'

 const App = () => {
   const [countries, setCountries] = useState([])
   const [showAll, setShowAll] = useState(false)
   const [filter, setFilter] = useState('')
   const [searchCountries, setSearchCountries] = useState(true)
   const [city, setCity] = useState('')

   useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all').then(response => {
        setCountries(response.data)
      },)
  }, [])
  
  const handleFilterChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value)
  }

const handleCityChange = (event) => {
  event.preventDefault();
  console.log('wtf')
  console.log(document.getElementById('city').value)
  setCity(document.getElementById('city').value)
  console.log(city, 'this is the city')
}

const handleClick = (event) => {
  event.preventDefault();
  setFilter(event.target.getAttribute('country'))
}

const toggleClick = () => {
  searchCountries ? setSearchCountries(false) : setSearchCountries(true)
}

let text = searchCountries ? 'by countries' : 'by cities'

const showForm = () => {
  let showCountries = <Countries countries={countries} filter={filter} handleClick={handleClick}/>
  let showCities = <City city={city}/>
  return (
  searchCountries ?  showCountries : showCities
  )
}

  //const props = []
  return (
    <>
    <Navbar expand="lg">
    <Navbar.Brand>
    <h1>A small Weather App</h1>
    </Navbar.Brand>
    </Navbar>
    <div className="container">
    <p>Search for the weather and some country information</p>
    <div className="new-div">
    Find
    <Button className='button-cls' onClick={toggleClick}>{text}</Button>
    <SearchForm searchCountries={searchCountries} filter={filter} handleFilterChange={handleFilterChange} handleCityChange={handleCityChange}
    showAll={showAll} setShowAll={setShowAll} handleClick={handleCityChange}/>
    {showForm()}
    </div>
    </div>
    <footer>
    <div className='footer-div'>
    <a className='source-link' 
    href="https://unsplash.com/@ejfotografik?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Eric Jacob">
    <span className='span-source'>
    <svg className='svg-source' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>unsplash-logo</title>
    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span>
    <span className='span-source'>Eric Jacob</span></a>
    </div>
    </footer>
    </>
  )
 }

export default App;
