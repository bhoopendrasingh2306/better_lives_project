import React from "react";
import MediaCard from "./card"
import { Link } from "react-router-dom";
import weatherimage from "../images/wether.jpg"
import healthImage from "../images/healthImage.jpg"
import tourImage from "../images/tourismImage.jpg"
import educationImage from "../images/educationImage.png"
import mapImage from "../images/africa.jpg";
import ecomimage from "../images/ecom.jpg";
import teachingimage from "../images/onlineteaching.jpg"

function Explore(){
    return(
        <div className="explore-div1">
            <Link to='/explore/weather'><MediaCard name="Weather" description="Now Explore The Weather Around You" title="Weather" image={weatherimage} /></Link>
            <Link to='/explore/health'><MediaCard name ="Health" description="Now Explore The Health Facilities" title="Health" image={healthImage}/></Link>
            <Link to='/explore/tourism'><MediaCard name ="Tourism" description="Now Explore The Tourism Places" title="Tourism" image={tourImage}/></Link>
            <Link to='/explore/education'><MediaCard name ="Education" description="Now Explore Education Facilities" title="Education" image={educationImage}/></Link>
            <Link to='/explore/map'><MediaCard name ="Map" description="Now Explore Maps Facilities" title="Map" image={mapImage}/></Link>
            <MediaCard name ="E-commerce" description="Now Explore E-commerce Facilities" title="ecommerce" image={ecomimage}/>
            <MediaCard name ="Teaching" description="Now Explore Teaching Facilities" title="online teaching" image={teachingimage}/>
            <MediaCard/>
            <MediaCard/>
        </div>
    )
}

export default Explore;