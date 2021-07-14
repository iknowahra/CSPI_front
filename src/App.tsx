import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Router';
import Footer from './components/Footer';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
`;

function App() {
  return (
    <>
      <Router>
        <Wrapper>
          <Header />
          <Main />
          <Footer />
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
