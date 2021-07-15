import React from 'react';
import styled from 'styled-components';

import About from './2About';
import Welcome from './1Welcome';
import Service from './3Service';
import Products from './4Products';
import Vision from './5Vision';
import Faq from './6Faq';
import Review from './7Review';
import Focus from './8Focus';
import Guide from './9Guide';

const Container = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
`;

function Landing() {
  return (
    <Container>
      <Welcome />
      <About />
      <Service />
      <Products />
      <Vision />
      <Faq />
      <Review />
      <Focus />
      <Guide />
    </Container>
  );
}

export default Landing;
