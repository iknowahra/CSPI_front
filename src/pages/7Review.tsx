import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Subject from '../components/Subject';
import reviewEng from '../assets/eng/7review';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.lightGrey};
`;

const Inner = styled.div`
  width: 80%;
  margin: auto;
  padding-bottom: 4rem;
  > h3 {
    text-align: center;
    margin: -1rem 0 1rem 0;
  }
`;

const SliderWrapper = styled.div`
  width: 90%;
  margin: auto;
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
`;

function Review() {
  return (
    <Wrapper>
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
