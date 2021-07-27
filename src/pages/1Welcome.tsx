import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import photo1 from '../assets/slide-welcome-01.png';
import photo2 from '../assets/slide-welcome-02.png';
import photo3 from '../assets/slide-welcome-03.png';

import Eng from '../assets/eng/1landing';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    width: 100%;
    background-color: ${({ theme }) => theme.color.lightGrey};

    h1 {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    div,
    span,
    p,
    button {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }
`;

const Inner = styled.div`
  position: relative;
`;

const SliderWrapper = styled.div`
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Intro = styled.div`
  text-align: center;
  position: absolute;
  top: 45%;
  left: 3rem;
  transform: translateY(-50%);
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    top: 23rem;
    left: 0;
  }
`;

const MainSlogan = styled.h1`
  font-weight: 600;
  white-space: pre-line;
  line-height: 2.8rem;
  color: ${({ theme }) => theme.color.sub};
`;

const TypeSlogan = styled.h1`
  font-weight: 600;
  color: ${({ theme }) => theme.color.main};
  margin-top: 0.3rem;
  margin-bottom: 1rem;
`;

const Details = styled.p`
  @media (max-width: 768px) {
    width: 85%;
    margin: auto;
    white-space: normal;
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  border: ${({ theme }) => theme.boxBorder};
  border-radius: 0.3rem;
  padding: 0.6rem 1.3rem;
  margin: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.color.main};
  border: 1px solid ${({ theme }) => theme.color.main};
  &.guide {
    background-color: ${({ theme }) => theme.color.main};
    color: white;
    border: transparent;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.2rem;
    margin-top: 6rem;
  }
`;

function Welcome() {
  const photos = [photo1, photo2, photo3];
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Container>
      <Inner>
        <SliderWrapper>
          <Slider speed={1000} {...settings}>
            {photos.map((photo, index) => (
              <img key={index} src={photo} alt="" />
            ))}
          </Slider>
        </SliderWrapper>
        <Intro>
          <p>{Eng.slogan.sub}</p>
          <MainSlogan>{Eng.slogan.main}</MainSlogan>
          <Slider speed={500} {...settings}>
            {Eng.slogan.mainType.map((type, index) => (
              <TypeSlogan key={index}>{type}</TypeSlogan>
            ))}
          </Slider>
          <Details>{Eng.slogan.details}</Details>
          <Button>{Eng.slogan.button1}</Button>
          <Button className="guide">{Eng.slogan.button2}</Button>
        </Intro>
      </Inner>
    </Container>
  );
}

export default Welcome;
