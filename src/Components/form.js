import React from 'react';
import Weather from './weather'

const Form = props => (<form onSubmit={props.getWeather} onClick > 

    <input type="text" name="city" placeholder="City..."></input>
    <input type="text" name="country" placeholder="Country..."></input>
    <input type="text" name="action" placeholder="I would like to do ..."></input>
    <button>Weather and suitability</button>

    </form>);

export default Form;