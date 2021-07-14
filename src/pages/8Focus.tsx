import React from 'react';
import styled from 'styled-components';

import Subject from '../components/Subject';
import reviewEng from '../assets/eng/8focus';

const Wrapper = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  width: 70%;
  margin: auto;
  padding-bottom: 4rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  flex: 1;
  margin: 0 2rem;
  text-align: center;
  > i {
    font-size: 0.6rem;
  }
`;

const Title = styled.div`
  font-size: 1rem;
`;

const Icon = styled.div`
  > i {
    font-size: 4.5rem;
  }
`;

const Details = styled.p`
  width: 11rem;
  margin: auto;
`;

function Focus() {
  return (
    <Wrapper>
      <Inner>
        <Subject main={reviewEng.main} />
        <Container>
          {reviewEng.details.map((content, index) => (
            <Main>
              <Icon>
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
