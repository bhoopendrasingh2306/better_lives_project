import React ,{useState,useEffect} from "react";
import MediaCard from "../card";
import InstituteCard from "./institutecard";
import aktuimage from "../../images/aktu.jpg";
import kgmuimage from "../../images/kgmu.jpg";
import duimage from "../../images/du.jpg";
import hbtuimage from "../../images/hbtu.jpg";
import manipalimage from "../../images/manipal.jpg";
import luimage from "../../images/lu.jpg"

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

function Education() {
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
    <div className="educationi">
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

      <MediaCard name="AKTU" description="Now Explore Aktu University" title="AKTU"  image={aktuimage}/>
      <MediaCard name="KGMU" description="Now Explore KGMU University" title="Agra"  image={kgmuimage}/>
      <MediaCard name="Delhi University" description="Now Explore Delhi University" title="Agra"  image={duimage}/>
      <MediaCard name="HBTU" description="Now Explore Harcourt Buttler Technological University" title="Agra"  image={hbtuimage}/>
      <MediaCard name="Manipal University" description="Now Explore Manipal University" title="Agra"  image={manipalimage}/>
      <MediaCard name="Lucknow University" description="Now Explore Lucknow University" title="Agra"  image={luimage}/>
      {/* <MediaCard name="Agra" description="Now Explore The tourism spots Around You" title="Agra"  image={agraimage}/> */}
        {/* <InstituteCard/>
        {institutes.map((e) => {
          return <InstituteCard institutes={e} />;
        })} */}
      </div>
    </div>
  );
}

export default Education;
