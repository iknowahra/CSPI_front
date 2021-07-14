import React from 'react';
import styled from 'styled-components';

import Subject from '../components/Subject';
import productsEng from '../assets/eng/4products';
import photo from '../assets/feature.png';

interface NumberProps {
  number: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Inner = styled.div`
  width: 80%;
  margin: auto;
`;

const Wrapper = styled.div<NumberProps>`
  display: flex;
  flex-direction: ${({ number }) =>
    !!(Number(number) % 2) ? 'row' : 'row-reverse'};
  justify-content: center;
  margin: 4.5rem 0;
`;

const ImgWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    height: inherit;
    margin: auto;
    object-fit: contain;
  }
`;

const Contents = styled.div<NumberProps>`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 1rem 10%;

  &::before {
    content: '${({ number }) => number}';
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 10%;
    background-color: ${({ theme }) => theme.color.charcoal};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

function Products() {
  return (
    <Container>
      <Inner>
        <Subject
          main={productsEng.subject1.main}
          sub={productsEng.subject1.sub}
        />
        <Wrapper number={'1'}>
          <ImgWrapper>
            <img src={photo} alt="feature01" />
          </ImgWrapper>
          <Contents number={'1'}>
            <h3>{productsEng.subject1.contents.feature01[0]}</h3>
            <p>{productsEng.subject1.contents.feature01[1]}</p>
          </Contents>
        </Wrapper>
        <Wrapper number={'2'}>
          <ImgWrapper>
            <img src={photo} alt="feature02" />
          </ImgWrapper>
          <Contents number={'2'}>
            <h3>{productsEng.subject1.contents.feature02[0]}</h3>
            <p>{productsEng.subject1.contents.feature02[1]}</p>
          </Contents>
        </Wrapper>
        <Wrapper number={'3'}>
          <ImgWrapper>
            <img src={photo} alt="feature03" />
          </ImgWrapper>
          <Contents number={'3'}>
            <h3>{productsEng.subject1.contents.feature03[0]}</h3>
            <p>{productsEng.subject1.contents.feature03[1]}</p>
          </Contents>
        </Wrapper>
      </Inner>
    </Container>
  );
}

export default Products;
