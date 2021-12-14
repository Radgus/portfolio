import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import styled from 'styled-components';

const A= styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.4rem;
`;

export default function ImgMediaCard(props) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <A href="https://radgus.github.io/yankenpokemon/" target="_blank">
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.src}
        />
      </A>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.title}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <A href="https://radgus.github.io/yankenpokemon/"  target="_blank">
          <b>Web site: </b>
          https://radgus.github.io/yankenpokemon/
        </A>
      </CardActions>
      <CardActions>
        <A href="https://github.com/Radgus/yankenpokemon"  target="_blank">
          <b>Github: </b>
          https://github.com/Radgus/yankenpokemon
        </A>
      </CardActions>
    </Card>
  );
}