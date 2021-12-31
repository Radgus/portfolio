import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  width: 100%;
  @media (min-width: 800px) {
    width: 50%;
  }
  @media (min-width: 1100px) {
    width: 33%;
  }
`;

const A= styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.4rem;
`;

const Img = styled.img`
  width: 100%;
  height: 14rem;
  object-fit: cover;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: aquamarine;
  border-radius: 0;
  `;

const DivGray = styled(Div)`
  background-color: whitesmoke;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`;


export default function ImgMediaCard(props) {

  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <A href={props.web}  target="_blank">
          <Img
            src={props.src}
            alt="green iguana"
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
        {
          props.github != '' && 
          <DivGray>
            <A href={props.github}   target="_blank">
              <b>Github: </b>{props.github} 
            </A>
          </DivGray>
        }
        <Div>
          <A href={props.web}  target="_blank">
            <b>Web site: </b>{props.web} 
          </A>
        </Div>
      </Card>
    </Container>
  );
}