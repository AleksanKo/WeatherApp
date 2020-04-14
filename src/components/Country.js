import React from 'react'
import {Button, ListGroup} from 'react-bootstrap'
import {WeatherForCountries} from './Weather'


const CountryAll = ({country}) => (
    <div className="country-div">
    <h1>{country.name}</h1>
    <p capital={country.capital}>Capital: {country.capital}</p>
    <p>Population: {country.population} </p>
    <h2>Languages</h2>
    <div className="lang-div text-center">
    <ListGroup className='text-center align-items-center'>
        {country.languages.map(language => 
        <ListGroup.Item key={language.iso639_1} 
        action onClick={() => 
        window.open(`https://en.wikipedia.org/wiki/${language.name}_language`)}>
        {language.name}
        </ListGroup.Item>)}
    </ListGroup>
    </div>
    <img height="200" width="300" src={country.flag} alt="a flag of the country"></img>
    <WeatherForCountries capital={country.capital}/>
</div>
)


const Country = ({country, handleClick}) => (
    <div className="country-div">
    <p>{country.name} <Button onClick={handleClick} country={country.name}>Show</Button></p>
</div>
)

export {Country, CountryAll};