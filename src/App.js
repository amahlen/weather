import React from "react";

//importing the components from compoents folder
import Weather from "./components/weather";
import Form from "./components/form";
import Titles from "./components/title";

//constructing the Api key
const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";


//creating a class and extends with React.Component
class App extends React.Component {

//
  state = {//making states

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    const city = e.target.elements.city.value;//constructing a city
    const country = e.target.elements.country.value;//constructing a country
    e.preventDefault();   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();//constructing a response
    console.log(response);//consoling the response

    if(city && country){//creating and if statement
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    }else{
      this.setState({//if the city or country is incorrect or empty there will be and error.
        error: "Please input search values..."
      })
    }
  }

  render() {//rendering the class

    return (//returning the components

      <div>
         <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Titles />
                </div>
                <div className="col-xs-7 form-container">
                <Form loadWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default App;//exporting the App