import React from 'react';
import styled from 'styled-components';

import BtnScrollUp from '../components/BtnScrollUp';
import About from './2About';
import Welcome from './1Welcome';
import Service from './3Service';
import Products from './4Products';
import Vision from './5Vision';
import Faq from './6Faq';
import Review from './7Review';
import Focus from './8Focus';
import Guide from './9Guide';
import News from './10News';

const Container = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

function Landing() {
  return (
    <Container>
      <BtnScrollUp />
      <Welcome />
      <About />
      <Service />
      <Products />
      <Vision />
      <Faq />
      <Review />
      <Focus />
      <Guide />
      <News />
    </Container>
  );
}

export default Landing;
