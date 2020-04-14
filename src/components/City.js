import React from 'react'
import {WeatherForCities} from './Weather'

const City = ({city}) => {
    const showData = () => {
        let data = <div className="country-div"> <WeatherForCities city={city}/> </div>
        let noData = <p>You didn't search for anything.</p>
        return (
            city ? data : noData
        )
    }
    return (
    showData()
    )
}
export default City;