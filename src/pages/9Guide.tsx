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
  height: 90vh;
`;

const Inner = styled.div`
  width: 70%;
  height: 100%;
  margin: auto;
  padding: 4rem 0;
  display: flex;
  border-top: ${({ theme }) => theme.boxBorder};
`;

const Left = styled.div`
  width: 40%;
  position: relative;
  > img {
    width: 250px;
  }
`;

const SliderWrapper = styled.div`
  position: absolute;
  top: 2.3rem;
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
`;

const Right = styled.div`
  width: 60%;
  height: 100%;
  padding-left: 3rem;
  margin: auto;
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
    console.log('dd', open);
  };

  console.log('guide', isOpen);

  return (
    <Wrapper>
      <Inner>
        <Left>
          <img src={mockup} alt="mockup" />
          <SliderWrapper>
            <Slider dots arrows={false} autoplay>
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
