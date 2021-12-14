import React from 'react';
import styled from 'styled-components';
import { Line } from './styles';

const Container = styled.div`
  padding: 1.5rem 3% ;
`;

const H2 = styled.h2`
  color: #979191;
  text-align: center;
  font-size: 4.5rem;
  margin: 2rem 0;
`;

const Title = styled.p`
  padding: 1.5rem 3% ;
  font-size: 2rem;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 30%;
  min-height: 3rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    color: #c28802
  }
  @media (max-width: 300px) {
    width: 45%;
  }   
`;

const goSection = (id) => {
  document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"})
}

const Header = () => {

  return (
    <Container>
      <H2>Luis Dominguez</H2>
      <Title>(logo react) Frontend Web Developer</Title>
      <Line />
      <Menu>
        <Button onClick={()=>goSection('Summary')}>Summary</Button>
        <Button onClick={()=>goSection('Portfolio')}>Portfolio</Button>
        <Button onClick={()=>goSection('Social')}>Social media</Button>
      </Menu>
        
      <Line />
    </Container>
  )
}

export default Header;