import React from 'react';
import styled from 'styled-components';

import ceoPhoto from '../assets/vision1.jpg';
import accessPhoto from '../assets/access.png';
import aboutEng from '../assets/eng/2about';
import googleBadge from '../assets/google.svg';
import appBadge from '../assets/appstore.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 200vh;

    span,
    p {
      font-size: 1.1rem;
      line-height: 1.8rem;
      white-space: normal;
    }
  }
`;

const Inner = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  padding-top: 3.5rem;
  h1,
  h3 {
    margin-bottom: 0.8rem;
  }

  @media (max-width: 768px) {
    padding-top: 6rem;
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

  @media (max-width: 768px) {
    flex-direction: column;
    height: 50%;
  }
`;

const CeoLeft = styled.div`
  width: 50%;
  height: 100%;
  padding-right: 2rem;
  p {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 1.5rem;
    border-bottom: ${({ theme }) => theme.boxBorder};

    p {
      width: 100%;
    }
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

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 0;
    margin: 1rem 0;
  }
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

  @media (max-width: 768px) {
    width: 100%;

    > img {
      width: 100%;
    }
  }
`;

const Access = styled.div`
  height: 60%;
  display: flex;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 50%;
  }
`;

const AccessLeft = styled.div`
  width: 57%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
  > div {
    margin-bottom: 1rem;
    width: 70%;
    font-size: 1.5rem;
  }
  > p {
    margin-bottom: 2.5rem;
  }
  > span {
    display: flex;
    cursor: pointer;
    img {
      width: 8rem;
      margin-right: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AccessRight = styled.div`
  width: 43%;
  height: 100%;
  display: flex;
  align-items: flex-end;

  > img {
    max-width: 80%;
    width: 30rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;

    > img {
      width: 100%;
      max-width: 100%;
    }
  }
`;

function About() {
  return (
    <Container id="menu1">
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
            <div>{aboutEng.access.title}</div>
            <p>{aboutEng.access.details}</p>
            <span>
              <img src={googleBadge} alt="" />
              <img src={appBadge} alt="" />
            </span>
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
