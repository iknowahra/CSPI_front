import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Subject from '../components/Subject';
import reviewEng from '../assets/eng/7review';

const Wrapper = styled.div`
  width: 100%;
  height: 75 vh;
  background-color: ${({ theme }) => theme.color.lightGrey};

  @media (max-width: 768px) {
    height: 100vh;

    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 2rem;
    }

    span {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const Inner = styled.div`
  width: 80%;
  margin: auto;
  padding: 3rem 0;

  > h3 {
    text-align: center;
    margin: -1rem 0 1rem 0;
  }

  @media (max-width: 768px) {
    width: 90%;

    > h3 {
      font-weight: 600;
      width: 90%;
      margin: auto;
      margin-bottom: 1rem;
      border-bottom: ${({ theme }) => theme.boxBorder};
      padding-bottom: 1rem;
    }
  }
`;

const SliderWrapper = styled.div`
  width: 90%;
  margin: auto;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const SliderSlap = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  p {
    width: 80%;
    margin: auto;
    margin-bottom: 1rem;
  }

  span {
    display: block;

    :nth-child(2) {
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    p {
      width: 95%;
      white-space: normal;
      text-align: start;
      margin-bottom: 1rem;
    }

    span {
    }
  }
`;

function Review() {
  return (
    <Wrapper id="menu4">
      <Inner>
        <Subject main={reviewEng.main} sub={reviewEng.sub.toUpperCase()} />
        <h3>{reviewEng.subTitle}</h3>
        <SliderWrapper>
          <Slider dots>
            {reviewEng.contents.map((content, index) => (
              <SliderSlap key={index}>
                <p>{content.details}</p>
                <span>{content.ceo}</span>
                <span>{content.position}</span>
              </SliderSlap>
            ))}
          </Slider>
        </SliderWrapper>
      </Inner>
    </Wrapper>
  );
}

export default Review;
