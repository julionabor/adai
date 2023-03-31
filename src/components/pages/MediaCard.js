import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://via.placeholder.com/400x400"
        title="green iguana"
      />


      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><FaInstagram /> Instagram</Button>
        <Button size="small"><FaWhatsapp /> WhatsApp</Button>
      </CardActions>
    </Card>
  );
}
export default MediaCard