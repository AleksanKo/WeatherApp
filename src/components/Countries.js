import React from 'react'
import {Country, CountryAll} from './Country'

const Countries = ({countries,filter, handleClick}) => {

    const countriesToShow = countries.filter(country=>country.name.toLowerCase().includes(filter.toLowerCase()))

    const countryAll = () => 
    countriesToShow.map(country => <CountryAll key={country.name} id={country.name} country={country}/>)

    const rows = () => 
    countriesToShow.map(country => <Country key={country.name} country={country} handleClick={handleClick}/>)

    if (filter === '') {
        return (
            <div>
            <p>You didn't search for anything.</p>
            </div>
        )

} else {
    if (countriesToShow.length > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
        } else if (countriesToShow.length === 0) {
            return (
                <div>
                    <p>Nothing found. Try again</p>
                </div>
            )
    } else if (countriesToShow.length === 1 || filter==='Ireland') {
        return (
            <div>
               {countryAll()}
            </div>
        )
    } else {
    return (
        <div>
        {rows()}
        </div>
    )
}
}
}
export default Countries;