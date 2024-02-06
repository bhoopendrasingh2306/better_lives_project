import React, { useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
  FormControl,
  Input,
  Autocomplete,
  TextField,
} from "@mui/material";

import { get } from "../../services/http";
import { baseUrlBLFBe } from "../../helpers/constants";

function Weather() {
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState({});

  async function getCities(city) {
    //     setCities([
    //     "Agra",
    //     "Mathura",
    //     "Firozabad",
    //     "Mainpuri",
    //     "Lucknow"
    // ])
    // return;

    let url = `${baseUrlBLFBe}/api/v1/geo/cities`;

    if (city) url += `?search=${city}`;
    const cityList = await get(url, null, null);

    if (cityList.status === 200) {
      setCities(cityList.data);
    }
  }

  async function getWeatherInfo(city) {
    let url = `${baseUrlBLFBe}/api/v1/weather/info`;

    if (city) url += `?city=${city}`;

    const weatherData = await get(url, null, null);
    console.log("data", weatherData.data);

    if (weatherData.status === 200) {
      setWeather(weatherData.data);
    }
  }

  useEffect((query) => {
    getCities();
    getWeatherInfo("Agra");
  }, []);

  const handleSearch = (event) => {
    getCities(event.target.value);
  };

  const handleSelect = (event) => {
    if (event.target.textContent) {
      getWeatherInfo(event.target.textContent);
    }
  };

  const defaultProps = {
    options: cities,
    getOptionLabel: (option) => option,
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

 
  const weatherTypeFn = () => {
   
    let weatherTypedaa =
    weather && weather.weather && weather.weather.length
      ? weather?.weather[0]?.main
      : "";
      console.log(weatherTypedaa,"khgh")

      // if(weatherTypedaa.value=='clouds') {
      //   console.log("clear weatehr")
      // }
      // else {
      //   console.log("getout")
      // }
      

  };

  return (
    <div className="weather">
      <FormControl
        variant="outlined"
        style={{ width: "100%" }}
        className="formcontrol"
      >
        <Autocomplete
          {...defaultProps}
          id="demo-simple-select"
          sx={{ width: "15em" }}
          onChange={(e) => handleSelect(e)}
          renderInput={(params) => (
            <TextField
              onChange={(e) => handleSearch(e)}
              {...params}
              label="Search City..."
            />
          )}
        />
      </FormControl>
      {/* first pemplate */}
      <main className="main">
        <div className="pemplate">
          <div className="location-box">
            <div className="location">{weather?.name}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(
                (weather && weather.weather && weather.weather.length
                  ? weather?.main?.temp
                  : "") - 273.15
              )}
              °c
              <br></br>
              <div className="feelslike">
                FeelsLike:
                {Math.round(
                  (weather && weather.weather && weather.weather.length
                    ? weather?.main?.feels_like
                    : "") - 273.15
                )}
                °c
              </div>
            </div>
            <div className="weather-kind">
              {weather && weather.weather && weather.weather.length
                ? weather?.weather[0]?.main
                : ""}
            </div>
            <div>{weatherTypeFn()}</div>
            <div className="icon">
              <img
                src={
                  weather && weather.weather && weather.weather.length
                    ? `https://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`
                    : ""
                }
              ></img>
            </div>
          </div>
        </div>

        {/* second pemplate */}
        <div className="pemplate">
          <div className="location-box">
            <div className="location">{weather?.name}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="press-humid">
              Pressure:
              <br></br>
              {weather && weather.weather && weather.weather.length
                ? weather?.main?.pressure
                : ""}
              <br></br>
              Humidity:
              <br></br>
              {weather && weather.weather && weather.weather.length
                ? weather?.main?.humidity
                : ""}
            </div>
          </div>
        </div>

        {/* third pemplate */}
        <div className="pemplate">
          <div className="location-box">
            <div className="location">{weather?.name}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(
                (weather && weather.weather && weather.weather.length
                  ? weather?.main?.temp
                  : "") - 273.15
              )}
              °c
              <br></br>
              <div className="feelslike">
                FeelsLike:
                {Math.round(
                  (weather && weather.weather && weather.weather.length
                    ? weather?.main?.feels_like
                    : "") - 273.15
                )}
                °c
              </div>
            </div>
            <div className="weather-kind">
              {weather && weather.weather && weather.weather.length
                ? weather?.weather[0]?.main
                : ""}
            </div>
            
            <div className="icon">
              <img
                src={
                  weather && weather.weather && weather.weather.length
                    ? `https://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`
                    : ""
                }
              ></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Weather;
