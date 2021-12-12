import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  background-color: #f5f5dc;
`;

const Layout = (props) => {

  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
}

export default Layout;
