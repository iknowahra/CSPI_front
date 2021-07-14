import React from 'react';
import styled from 'styled-components';

import ceoPhoto from '../assets/vision.jpg';
import accessPhoto from '../assets/access.png';
import aboutEng from '../assets/eng/2about';

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 90vh;
  flex-direction: column;
`;

const Inner = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  h1,
  h3 {
    margin-bottom: 0.8rem;
  }
`;

const CEO = styled.div`
  height: 40%;
  display: flex;
  align-items: center;

  h1,
  i {
    color: ${({ theme }) => theme.color.main};
  }
`;

const CeoLeft = styled.div`
  width: 50%;
  height: 100%;
  padding-right: 2rem;
  p {
    width: 90%;
  }
`;

const CeoRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  max-height: 100%;
  padding-left: 2rem;
`;

const RightInner = styled.div`
  width: 50%;
  height: 100%;

  > img {
    width: 10rem;
    height: 10rem;
    max-width: 100%;
    border-radius: 0.2rem;
    object-fit: cover;
    object-position: right;
  }
`;

const Access = styled.div`
  height: 60%;
  display: flex;
  overflow: hidden;
`;

const AccessLeft = styled.div`
  width: 57%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 2rem;
`;

const AccessLeftWrapper = styled.div`
  white-space: pre-wrap;
  p {
    width: 85%;
  }
`;

const AccessRight = styled.div`
  width: 43%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  > img {
    max-width: 100%;
    width: 30rem;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

function About() {
  return (
    <Container>
      <Inner>
        <CEO>
          <CeoLeft>
            <i className="fa fa-quote-left" />
            <h3>{aboutEng.ceoLeft.title}</h3>
            <p>{aboutEng.ceoLeft.details}</p>
            <span>{aboutEng.ceoLeft.ceo}</span>
          </CeoLeft>
          <CeoRight>
            <RightInner>
              <h3>{aboutEng.ceoRight.title}</h3>
              <h1>{aboutEng.ceoRight.sub}</h1>
              <p>{aboutEng.ceoRight.contents}</p>
            </RightInner>
            <RightInner>
              <img src={ceoPhoto} alt="ceo" />
            </RightInner>
          </CeoRight>
        </CEO>
        <Access>
          <AccessLeft>
            <AccessLeftWrapper>
              <h3>{aboutEng.access.title}</h3>
              <p>{aboutEng.access.details}</p>
            </AccessLeftWrapper>
          </AccessLeft>
          <AccessRight>
            <img src={accessPhoto} alt="access" />
          </AccessRight>
        </Access>
      </Inner>
    </Container>
  );
}

export default About;
