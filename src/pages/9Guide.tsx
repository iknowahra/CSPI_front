import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Modal from '../components/Modal';

import guideEng from '../assets/eng/9guide';
import mockup from '../assets/mockup.png';
import youtubeGuide from '../assets/guide.jpg';
import appScreen1 from '../assets/app-screen-01.png';
import appScreen2 from '../assets/app-screen-02.png';
import appScreen3 from '../assets/app-screen-03.png';
import appScreen4 from '../assets/app-screen-04.png';
import appScreen5 from '../assets/app-screen-05.png';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 3rem;

  @media (max-width: 768px) {
    height: 200vh;
    padding-top: 2rem;
  }
`;

const Inner = styled.div`
  width: 70%;
  height: 100%;
  margin: auto;
  padding: 4rem 0;
  display: flex;
  border-top: ${({ theme }) => theme.boxBorder};

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Left = styled.div`
  width: 40%;
  position: relative;

  > img {
    width: 250px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;

    > img {
      position: relative;
      width: auto;
      height: 85vh;
      margin: auto;
    }
  }
`;

const SliderWrapper = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 1rem;
  width: 13.7rem;
  height: 28.2rem;
  border-radius: 0.3rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    object-position: center;
    display: block;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    left: -5rem;
    right: 5rem;

    width: 18rem;
    height: 73vh;
    top: 3.2rem;
    left: 5rem;

    img {
      height: 100%;
    }
  }

  @media (max-width: 481px) {
    margin-left: auto;
    margin-right: auto;
    left: -5rem;
    right: 5rem;
    width: 63vw;
    height: 73vh;
    top: 3.2rem;
    left: 5rem;

    img {
      width: 100%;
      height: 95%;
      display: block;
      object-fit: fill;
    }
  }
`;

const Right = styled.div`
  width: 60%;
  height: 100%;
  padding-left: 3rem;
  margin: auto;

  @media (max-width: 768px) {
    width: 80%;
    height: 90%;
    margin: auto;
    margin-top: 3rem;
    padding: 0;
  }
`;

const Title = styled.div`
  white-space: pre-line;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 2rem;
`;

const TitleStrong = styled.span`
  font-size: 1.5rem;
  font-weight: 200;
  color: ${({ theme }) => theme.color.main};
`;

const TextInner = styled.div`
  display: flex;
  margin-bottom: 1rem;
  font-weight: 200;

  > i {
    font-size: 2rem;
    color: #ff0000;
    opacity: 0.8;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    flex-direction: column;

    > i {
      font-size: 3.5rem;
    }
  }
`;

const ImageInner = styled.div`
  position: relative;
  height: 60%;
  cursor: pointer;

  > i {
    color: white;
    font-size: 3.5rem;
    opacity: 0.5;
    position: absolute;
    top: 45%;
    left: 45%;
    transform: translate(-50% -50%);
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    > img {
      height: 95%;
    }
  }
`;

function Guide() {
  const [isOpen, setOpen] = useState(false);
  const sliderPhotos = [
    appScreen1,
    appScreen2,
    appScreen3,
    appScreen4,
    appScreen5,
  ];

  const handleModal = (open: boolean) => {
    setOpen(open);
  };

  return (
    <Wrapper id="menu6">
      <Inner>
        <Left>
          <img src={mockup} alt="mockup" />
          <SliderWrapper>
            <Slider arrows={false} autoplay>
              {sliderPhotos.map((photo, index) => (
                <img src={photo} key={index} alt={'mockup' + index} />
              ))}
            </Slider>
          </SliderWrapper>
        </Left>
        <Right>
          <Title>
            {guideEng.title.toUpperCase()}
            <TitleStrong>{guideEng.title2.toUpperCase()}</TitleStrong>
          </Title>
          <TextInner>
            <i className="xi-youtube-play" />
            <h3>{guideEng.guide}</h3>
          </TextInner>
          <ImageInner onClick={() => setOpen(true)}>
            <img src={youtubeGuide} alt="youtube" />
            <i className="xi-play-circle" />
          </ImageInner>
          {isOpen ? (
            <Modal title={guideEng.guide} handleModal={handleModal} />
          ) : null}
        </Right>
      </Inner>
    </Wrapper>
  );
}
export default Guide;
