import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="SuperAwesomePin">{text}</div>;

export default function HospitalCard({hospital}) {

  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
    position: { lat: 27.176670, lng: 78.008075 },
    map,
    title: 'Hello World!'
    });
    return marker;
   };

  const defaultProps = {
    center: {
      lat: 27.176670,
      lng: 78.008075
    },
    zoom: 11
  };

  function getCenter() {
    if (
      !hospital ||
      !hospital._location_coordinates ||
      hospital._location_coordinates === "NA"
    ) {
      return {
        lat: 27.17667,
        lng: 78.008075,
      };
    }

    const coords = hospital._location_coordinates.split(",");

    return {
      lat: Number(coords[0]),
      lng: Number(coords[1]),
    };
  }

  return (
    <Card sx={{ maxWidth: 345 }} className='card'>

      <CardMedia
        sx={{ height: 140 }}
        image="../images/imag1.jpg"
        title="hospitals"
      >
        <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={getCenter()}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
        

      
      </GoogleMapReact>
      </CardMedia>
      
      <CardContent>
     
        <Typography gutterBottom variant="h5" component="div">
          {hospital.hospital_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Here you can explore the hospital of your own city..
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
