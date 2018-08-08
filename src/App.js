import React, { Component } from 'react';
import './App.css';
import Form from './Components/form';
import Weather from './Components/weather';
import Sidepic from './Components/sidepic';


const API_KEY = "ba5ada34507b47c2eb8e97f8ebd33c4d";

class App extends Component {

  state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    describtion: undefined,
    error: undefined,
    answer: undefined
    

  }
  

  getWeather = async (e) => {

    e.preventDefault();
    
    const actionai = e.target.elements.action.value;
    let answer= 'you cant do it';

    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;
   
    let api_callo = await fetch('http://ip-api.com/json');
    let  datao = await api_callo.json();
  

    if (city===null || city==="" && country===null || country===""){
  
     
      city= datao.city;
      country= datao.country;
           
       
    } 
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (city && country )
    {
      
      this.setState(
        {
           temperature: data.main.temp,
           city:data.name,
           country: data.sys.country,
           humidity: data.main.humidity,
           description: data.weather[0].description,
           error: '',

           
  
  
        }
      );
    } else {

      this.setState(
        {
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          describtion: undefined,
          error: "Please enter a valid city and country!",
        }
      );


      }
    let retVal = true;


    switch (true) 
    {
      case (actionai === 'swimming' || 'fucking' && data.main.temp < 17): 
      retVal = false;
      break;

      case (actionai === 'running' && data.main.temp > 30): 
      retVal = false;
      break;

      case (actionai === 'skiing' && data.main.temp > 2): 
      retVal = false;
      break;

    }

      if (retVal=== true){
        this.setState(
          {
             answer: `It is almost perfect outside , Go and and spend your time ${actionai} `

          }
        );
      } else {
        this.setState(
          {

            answer:`The weather outside is not suitable for ${actionai} (your chosen activity) right now!`


          } );
      }

  }



  

  render()   
  {

    return (
      <div>
        <Sidepic/>
        <div className="col-sm-6 col-md-6"><Form getWeather={this.getWeather}/>
        <Weather
        city={this.state.city}
        country={this.state.country}
        temperature={this.state.temperature}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        answer={this.state.answer}

        />

        </div>
        
      </div>
    );

  }
};
export default App;

