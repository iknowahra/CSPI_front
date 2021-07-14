import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import photo1 from '../assets/slide-welcome-01.png';
import photo2 from '../assets/slide-welcome-02.png';
import photo3 from '../assets/slide-welcome-03.png';

import Eng from '../assets/eng/1landing';

const Container = styled.div`
  width: inherit;
  padding: 3rem 0 0 0;
  height: 100vh;
`;

const Inner = styled.div`
  position: relative;
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const Intro = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
`;

const MainSlogan = styled.h1`
  font-weight: 600;
  color: ${({ theme }) => theme.color.main};
  margin: 1rem 0 2rem 0;
`;

function Welcome() {
  const photos = [photo1, photo2, photo3];
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Inner>
        <SliderWrapper>
          <Slider {...settings}>
            {photos.map((photo, index) => (
              <img key={index} src={photo} alt="" />
            ))}
          </Slider>
        </SliderWrapper>
        <Intro>
          <h3>{Eng.slogan.sub}</h3>
          <MainSlogan>{Eng.slogan.main}</MainSlogan>
          <p>{Eng.slogan.detail}</p>
        </Intro>
      </Inner>
    </Container>
  );
}

export default Welcome;
