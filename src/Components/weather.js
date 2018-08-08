import React from 'react';


class Weather extends React.Component {


    

    render() {
        return (
            <div className="weinfo">
            {this.props.city && this.props.country &&  <div><i className="fas fa-bolt"></i><h1>Weather information in {this.props.city},{this.props.country}</h1></div>}
            <div className="desinfo">
            {this.props.temperature &&  <h3>Temperature : {this.props.temperature}</h3>}
            {this.props.humidity && <h3>Humidity : {this.props.humidity}</h3>}
            {this.props.description && <h3>Current state : {this.props.description}</h3>}
            {this.props.error && <h3>{this.props.error}</h3>}
            <h3> {this.props.answer} </h3>
            
    
            </div>
            
         
            </div>
        );
    }
};

export default Weather;