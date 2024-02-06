import React, { useState, useEffect } from "react";
import HospitalCard from "./hospitalcard";

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

function Health() {
  const [hospital, setHospital] = useState([]);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");

  async function getHospitalInfo() {
    let url =
      `${baseUrlBLFBe}/api/v1/health/hospitals`;

      if(search || city){
        url += '?';

        let query = '';
        if(search){
            if(query){
                query += '&';
            }
            query += `search=${search}`;
        }
        if(city){
            if(query){
                query += '&';
            }
            query += `city=${city}`;
        }
        url += query;
      }

    const hospitalData = await get(url, null, null);
    console.log("data", hospitalData.data);

    if (hospitalData.status === 200) {
      setHospital(hospitalData.data);
    }
  }


// citys data

  async function getCities(city) {
    //     setCities([
    //     "Agra",
    //     "Mathura",
    //     "Firozabad",
    //     "Mainpuri",
    //     "Lucknow"
    // ])
    // return;

    let url =
      `${baseUrlBLFBe}/api/v1/geo/cities`;

    if (city) url += `?search=${city}`;
    const cityList = await get(url, null, null);

    if (cityList.status === 200) {
      setCities(cityList.data);
    }
  }

  useEffect((query) => {
    getHospitalInfo();
  }, [city, search]);

  const handleCitySearch = (event) => {
    getCities(event.target.value);
  };

  const handleCitySelect = (event) => {
      setCity(event.target.textContent)
  }

  const defaultProps = {
    options: cities,
    getOptionLabel: (option) => option
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="healthi">
        <div className="health-div1">
        <div><TextField type="text" placeholder="search Hospital" onChange={(e)=> handleSearch(e)}/></div>

        <div>
        <FormControl variant="outlined" style={{ width: "100%" }} className="formcontrol">
        <Autocomplete
          {...defaultProps}
          id="demo-simple-select"
          sx={{ width: "15em" }}
          onChange={(e)=> handleCitySelect(e)}
          renderInput={(params) => (
            <TextField
              onChange={(e) => handleCitySearch(e)}
              {...params}
              label="Search City..."
            />
          )}
        />
      </FormControl>
        </div>

        </div>
      <div className="hospital">
        {hospital.map((e) => {
          return <HospitalCard hospital={e} />;
        })}
      </div>
    </div>
  );
}

export default Health;
