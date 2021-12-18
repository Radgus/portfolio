import React from 'react';
import styled from 'styled-components';
import { Line } from '../../components/styles';
import instagramIcon from '../../resource/images/instagram.png';
import twitterIcon from '../../resource/images/twitter.png';
import linkedinIcon from '../../resource/images/linkedin.png';
import pokemonLogo from '../../resource/images/poke2.png';
import surbyteLogo from '../../resource/images/surbyte.png';
import acuicolaLogo from '../../resource/images/acuicola.png';
import fellowLogo from '../../resource/images/fellow.jpg';
import mapLogo from '../../resource/images/dirmap.png';
import ImgMediaCard from '../../components/Card';


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

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
        <h2>Summary</h2> <br />
        <p className='section__p'>
        Fullstack web developer with 4+ years of experience developing and implementing web systems. 
        I consider myself a responsible and honest person with interest in technological areas.
        </p>
      </Section>
      <Section id='Portfolio'>
        <h2>Portfolio</h2> <br />
        <SectionContainer>
          <ImgMediaCard 
            src={pokemonLogo}
            title='Yan ken Pokemon'
            description='The traditional game of Yan Ken Pon but with a pokemon theme.'
            web='https://radgus.github.io/yankenpokemon'
            github='https://github.com/Radgus/yankenpokemon'
          />
          <ImgMediaCard 
            src={surbyteLogo}
            title='Surbyte'
            description='System to estimate the competitiveness of companies. MERN stack technology.'
            web='https://www.surbyte.mx'
            github=''
          />
          <ImgMediaCard 
            src={acuicolaLogo}
            title='Acuicolasoft'
            description='Acuicola production system. Project in Laravel.'
            web='https://acuicolasoft.int.org.mx'
            github=''
          />
          <ImgMediaCard 
            src={fellowLogo}
            title='Tolkien API'
            description='This project consume a free API about Middle Earth of J. R. R. Tolkien.'
            web='https://luis-profile.herokuapp.com/tolkien'
            github=''
          />
          <ImgMediaCard 
            src={mapLogo}
            title='Display driving directions'
            description='Use the map-box-gl-directions plugin to show results from the Mapbox Directions API. Click the map to add an origin and destination.'
            web='https://luis-profile.herokuapp.com/map-directions'
            github=''
          />
        </SectionContainer>
      </Section>
      <Section id='Social'>
        <Line /> 
          <Social>
          <Anchor href='https://www.instagram.com/luis_d_uri/'> <Img src={instagramIcon}/> </Anchor>
          <Anchor href='https://twitter.com/Luis_D_Uri'> <Img src={twitterIcon}/> </Anchor>
          <Anchor href='https://linkedin.com/in/luis-d-uri'> <Img src={linkedinIcon}/> </Anchor>
          </Social>
        <Line />
      </Section>                     
    </Container>
  )
}

export default Home;