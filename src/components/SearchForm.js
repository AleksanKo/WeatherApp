import React from 'react'
import {Form, Button} from 'react-bootstrap'

const SearchForm = (props) => {
    const changeForm = () => {
    let countriesForm = <Form className='form-inline justify-content-center' onChange={()=>props.setShowAll(props.showAll)}>
    <div className='text-center'>
        <Form.Control id='country' value={props.filter} onChange={props.handleFilterChange}></Form.Control>
    </div>
</Form>
    let cityForm = <Form className='form-inline justify-content-center'> 
    <div className='text-center'>
        <Form.Control id='city'></Form.Control>
       <Button type='submit' onClick={props.handleClick}>Search</Button>
    </div>
</Form>
    let finalForm = (props.searchCountries === true) ? countriesForm : cityForm
    return (
        finalForm
    )
    }
    return (
        <>
        <div className='new-div'>
        {changeForm()}
  </div>
        </>
    )
}

export default SearchForm;
