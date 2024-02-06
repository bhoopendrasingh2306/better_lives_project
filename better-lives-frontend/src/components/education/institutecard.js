import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InstituteCard({hospital}) {
  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardMedia
        sx={{ height: 140 }}
        image="../images/imag1.jpg"
        title="university"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AKTU
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Here you can explore the colleges/schools of your own city..
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
