import React from 'react';
import styled from 'styled-components';

import Subject from '../components/Subject';
import reviewEng from '../assets/eng/8focus';

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const Inner = styled.div`
  width: 70%;
  margin: auto;
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Main = styled.div`
  flex: 1;
  margin: 0 2rem;
  text-align: center;

  > i {
    font-size: 0.6rem;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const Title = styled.div`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Icon = styled.div`
  > i {
    font-size: 4.5rem;
  }
`;

const Details = styled.p`
  width: 11rem;
  margin: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.8rem;
    width: 90%;
  }
`;

function Focus() {
  return (
    <Wrapper id="menu5">
      <Inner>
        <Subject main={reviewEng.main} />
        <Container>
          {reviewEng.details.map((content, index) => (
            <Main key={index}>
              <Icon
                className="aos-animate"
                data-aos="flip-up"
                data-aos-duration="1000"
                data-aos-delay={'' + Number(500 * index)}
              >
                <i className={content.icon} />
              </Icon>
              <Title>{content.title}</Title>
              <i className="xi-star-o" />
              <Details>{content.contents}</Details>
            </Main>
          ))}
        </Container>
      </Inner>
    </Wrapper>
  );
}

export default Focus;
