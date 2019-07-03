import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import GetDrinkButton from '../GetDrinkButton/GetDrinkButton';
import LocationEntryForm from '../LocationEntryForm/LocationEntryForm';
import './LocationEntry.css';

class LocationEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: [],
      recipe: [],
      ingredients: [],
      message: '',
      recipeHeader: '',
      ingredientsHeader: '',
      methodHeader: ''
    };
  }

handleFormSubmit = e => {

  e.preventDefault()

  const location = e.target.location.value
  const weatherApi = 'https://api.openweathermap.org/data/2.5/weather';
  const drinkApi = 'https://calm-sea-60714.herokuapp.com/drinks?type='

  const params = {
    q: location
  }

  function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${params[key]}`)
  return queryItems.join('&');
}

const geoKey = 'evHLAvBVsDCaNFdByNrmOKMYhL2QWujC';
const geoQuery = formatQueryParams(params);
const geoApi =  'https://open.mapquestapi.com/geocoding/v1/address?key=evHLAvBVsDCaNFdByNrmOKMYhL2QWujC&location=';
const geoUrl = geoApi + geoQuery

const geoOptions = {
  method: 'GET',
}

fetch(geoUrl,  geoOptions)
.then(response => response.json())
.then(data => {
  const results = data.results
  const lat = results[0].locations[0].latLng.lat
  const lon = results[0].locations[0].latLng.lng

const weatherKey = 'APPID=9627fcb46366ceb7b0232f3561cc95de';
const weatherQuery = formatQueryParams(params);
const weatherUrl = weatherApi + '?' + 'lat=' + lat + '&' +'lon=' + lon + '&' + weatherKey;

  const options = {
    method: 'GET',
  }

  fetch(weatherUrl, options)
  .then(response => response.json())
  .then(data => {
    const temp = data.main.temp

    if( temp > 291) {
    const coldDrinkUrl = drinkApi + 'cold';
    fetch(coldDrinkUrl, options)
    .then(response => response.json())
    .then(data => {
        let drink = data[Math.floor(Math.random() * data.length)]
        let name = drink.name;
        let recipe = drink.recipe;
        let ingredients = drink.ingredients

        this.setState({
            name,
            recipe, 
            ingredients,
            message: 'May we suggest:',
            recipeHeader: 'Recipe',
            ingredientsHeader: 'Ingredients',
            methodHeader: 'Method'
          });
      })
    }
    
    if( temp < 291) {
      const options = {
        method: 'GET',
      }
      const hotDrinkUrl = drinkApi + 'hot';
      fetch(hotDrinkUrl, options)
      .then(response => response.json())
      .then(data => {
        let drink = data[Math.floor(Math.random() * data.length)]
        let name = drink.name;
        let recipe = drink.recipe;
        let ingredients = drink.ingredients
    
        this.setState({
          name,
          recipe, 
          ingredients,
          message: 'May we suggest:',
          recipeHeader: 'Recipe',
          ingredientsHeader: 'Ingredients',
          methodHeader: 'Method'
        });
      })
    }
  })
})
}

    render() {
      return (
        <div className='LocationEntry'>
          <header className='LocationHeader'>
              <h3>Enter the name of your city or your city and two-letter state code to get a drink 
                suggestion.
              </h3>
          </header>
          <main> 
            <LocationEntryForm onSubmit={this.handleFormSubmit}>
              <div className='location-form'>
                <label htmlFor='location-input'>
                  Location:
                </label>
                </div>
                <br></br>
                <input type='text' id='location' name='location'/>
                <br></br>
                <button type='submit'>
                  Search
                </button>
              </LocationEntryForm>
            </main>
           
            <h3>{this.state.message} {this.state.name}</h3>
            <h3>{this.state.recipeHeader}</h3>
            <h4>{this.state.ingredientsHeader}</h4>
            <ul>{this.state.ingredients}</ul>
            <h4>{this.state.methodHeader}</h4>
            <p>{this.state.recipe}</p>
        </div>
      );
    } 
  }
  
  export default LocationEntry;
