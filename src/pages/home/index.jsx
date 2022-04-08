import React from 'react';
import styled from 'styled-components';
import { Line } from '../../components/styles';
import instagramIcon from '../../resource/images/instagram.png';
import twitterIcon from '../../resource/images/twitter.png';
import linkedinIcon from '../../resource/images/linkedin.png';
import pokemonLogo from '../../resource/images/poke2.png';
import surbyteLogo from '../../resource/images/surbyte.png';
import acuicolaLogo from '../../resource/images/acuicola.png';
import videoLogo from '../../resource/images/video.jpg';
import fellowLogo from '../../resource/images/fellow.jpg';
import mapLogo from '../../resource/images/dirmap.png';
import recepcionLogo from '../../resource/images/recepcion.jpg';
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
        Frontend web developer with 4+ years of experience developing and implementing web systems. 
        I consider myself a responsible and honest person with interest in technological areas.
        </p>
      </Section>
      <Section id='Portfolio'>
        <Line /> 
        <h2>Portfolio</h2> <br />
        <SectionContainer>
          <ImgMediaCard 
            src={pokemonLogo}
            alt='pokemon fight'
            title='Yan ken Pokemon'
            description='The traditional game of Yan Ken Pon but with a pokemon theme.'
            web='https://radgus.github.io/yankenpokemon'
            github='https://github.com/Radgus/yankenpokemon'
          />
          <ImgMediaCard 
            src='https://images.prismic.io/wizeline-academy/650366df-0405-4712-bd3b-2703d87e7a61_watermark-designs-XL6gfkLmkOw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,26,1920,1231&w=621&h=398'
            alt='Fornitures'
            title='Wizeline Bootcamp Capstone'
            description='Ecommerce Store where you can buy furniture and home decor items.'
            web='https://react-bootcamp-capstone-4.herokuapp.com/'
            github='https://github.com/Radgus/react-bootcamp-capstone-4'
          />
          <ImgMediaCard 
            src={surbyteLogo}
            alt='Surbyte logo'
            title='Surbyte'
            description='System to estimate the competitiveness of companies. MERN stack technology.'
            web='https://www.surbyte.mx'
            github=''
          />
          <ImgMediaCard 
            src={acuicolaLogo}
            alt='Acuicola logo'
            title='Acuicolasoft'
            description='Acuicola production system. Project in Laravel.'
            web='https://acuicolasoft.int.org.mx'
            github=''
          />
          <ImgMediaCard 
            src={videoLogo}
            alt='Picture of Igor Korzh in Pexels'
            title='Luis_d_uri videos'
            description='Project created during the Platzi Javascript academy.'
            web='https://radgusvideos.herokuapp.com/'
            github=''
          />
          <ImgMediaCard 
            src={fellowLogo}
            alt='fellowship Logo'
            title='Tolkien API'
            description='This project consume a free API about Middle Earth of J. R. R. Tolkien.'
            web='https://luis-profile.herokuapp.com/tolkien'
            github=''
          />
          <ImgMediaCard 
            src={mapLogo}
            alt='map Logo'
            title='Display driving directions'
            description='Use the map-box-gl-directions plugin to show results from the Mapbox Directions API. Click the map to add an origin and destination.'
            web='https://luis-profile.herokuapp.com/map-directions'
            github=''
          />
          <ImgMediaCard 
            src={recepcionLogo}
            alt='reservation Logo'
            title='Table reservation'
            description='System for reserving a table in a restaurant.'
            web='https://radgus.github.io/reservaciones'
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