import * as React from 'react';
// import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import githubLogo from '../resource/images/github.png';
import pageLogo from '../resource/images/webpage.jpg';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  width: 100%;
  @media (min-width: 700px) {
    width: 50%;
  }
  @media (min-width: 1100px) {
    width: 33%;
  }
`;

const A= styled.a`
  width: 100%;
  text-decoration: none;
  color: black;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Img = styled.img`
  width: 100%;
  height: 14rem;
  object-fit: cover;
`;

const Logo = styled.img`
  width: 3rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: aquamarine;
  border-radius: 0;
  height: 5.4rem;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const DivGray = styled(Div)`
  background-color: whitesmoke;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  height: 5.4rem;
  position: relative;
`;

const Gap = styled.div`
  height: 5.4rem;
`;

const Card = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  overflow: hidden;
  max-width: 345px;
  position: relative;
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
              <Logo src={githubLogo} alt='github'/> {props.github} 
            </A>
          </DivGray>
        }
        <Gap />
        <Div>
          <A href={props.web}  target="_blank">
            <Logo src={pageLogo} alt='github'/> {props.web} 
          </A>
        </Div>
      </Card>
    </Container>
  );
}