import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './MediaCard.css'; 

export default function MediaCard(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${props.id}`);
    console.log(props.id);
  };

  return (
    <Card className="media-card" sx={{ width: 360 }} onClick={handleClick}>
      <div style={{ height: 340, width: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={props.image} alt="" className="card-image" style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">$ {props.price}</p>
    </Card>
  );
}
