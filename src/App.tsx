import React, { useEffect } from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Main from './components/Router';
import Footer from './components/Footer';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
`;

function App() {
  useEffect(() => {
    AOS.init({
      delay: 100,
      offset: 80,
      duration: 2000,
      animatedClassName: 'aos-animate',
      once: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

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
