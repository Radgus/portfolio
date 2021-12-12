import React from 'react';
import styled from 'styled-components';
import { Line } from '../../components/styles';
import facebookIcon from '../../resource/images/facebook.jpg';
import instagramIcon from '../../resource/images/instagram.png';
import twitterIcon from '../../resource/images/twitter.png';
import linkedinIcon from '../../resource/images/linkedin.png';



const Container = styled.div`
  padding: 0 3% ;
`;

const Section = styled.section`
  padding: 1.5rem 0;
  .section__p {
    font-size: 1.4rem;
    text-align: justify;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 5rem;
  justify-content: space-between;
`;


const Anchor = styled.a`

`;

const Img = styled.img`
  min-width: 4rem;
  height: 4rem;
  margin: 0 1.5rem;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

const Home = () => {

  return (
    <Container>
      <Section id='Summary'>
        <h3>Summary</h3> <br />
        <p className='section__p'>
        Fullstack web developer with 4+ years of experience developing and implementing web systems. 
        I consider myself a responsible and honest person with interest in technological areas.
        </p>
      </Section>
      <Section id='Portfolio'>Portfolio</Section>
      <Section id='Social'>
        <Line /> 
          <Social>
          <Anchor href='#'> <Img src={facebookIcon}/> </Anchor>
          <Anchor href='#'> <Img src={instagramIcon}/> </Anchor>
          <Anchor href='#'> <Img src={twitterIcon}/> </Anchor>
          <Anchor href='#'> <Img src={linkedinIcon}/> </Anchor>
          </Social>
        <Line />
      </Section>                     
    </Container>
  )
}

export default Home;