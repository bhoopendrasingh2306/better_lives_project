
// copyed this from education.js



import React ,{useState,useEffect} from "react";
import InstituteCard from "./tourismcard";
import MediaCard from "../card";
import agraimage from "../../images/agra.jpeg";
import jaipurimage from "../../images/jaipur.jpg";
import goaimage from "../../images/goa.jpg";
import kashmirimage from "../../images/kashmir.jpg";
import ladakhimage from "../../images/ladakh.jpg";
import shimlaimage from "../../images/shimla.jpg";
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
import TourismCard from "./tourismcard";

function Tourism() {
    const [institutes, setInstitutes] = useState([]);
    const [city, setCity] = useState("");
    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState("");

    async function getInstituteInfo() {
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
    
        const instituteData = await get(url, null, null);
        console.log("data", instituteData.data);
    
        if (instituteData.status === 200) {
          setInstitutes(instituteData.data);
        }
      }

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
    <div className="tourismi">
      <div className="education-div1">
        <div>
          <TextField
            type="text"
            placeholder="search"
            onChange={(e) => handleSearch(e)}
          />
        </div>

        <div>
          <FormControl
            variant="outlined"
            style={{ width: "100%" }}
            className="formcontrol"
          >
            <Autocomplete
              {...defaultProps}
              id="demo-simple-select"
              sx={{ width: "15em" }}
              onChange={(e) => handleCitySelect(e)}
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
      <MediaCard name="Agra" description="Now Explore The tourism spots Around You" title="Agra"  image={agraimage}/>
      <MediaCard name="Jaipur" description="Now Explore The tourism spots Around You" title="Jaipur" image={jaipurimage}  />
      <MediaCard name="Ladakh" description="Now Explore The tourism spots Around You" title="Ladakh" image={ladakhimage} />
      <MediaCard name="Kashmir" description="Now Explore The tourism spots Around You" title="Kashmir" image={kashmirimage} />
      <MediaCard name="Goa" description="Now Explore The tourism spots Around You" title="Goa" image={goaimage} />
      <MediaCard name="Shimla" description="Now Explore The tourism spots Around You" title="Shimla" image={shimlaimage}  />
        {/* <TourismCard/>
        {institutes.map((e) => {
          return <TourismCard tourism={e} />;
        })} */}
      </div>
    </div>
  );
}

export default Tourism;
