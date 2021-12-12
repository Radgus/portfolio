import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const Section = styled.section`
padding: 2.5rem 0;
height: 25rem;
`;

const Home = () => {

  return (
    <Container>
      <Section id='Summary'>
        <p></p>
      </Section>
      <Section id='Portfolio'>Portfolio</Section>
      <Section id='Social'>Social</Section>
    </Container>
  )
}

export default Home;