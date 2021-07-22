import React from 'react';
import styled from 'styled-components';

import Subject from '../components/Subject';
import productsEng from '../assets/eng/4products';
import photo1 from '../assets/feature1.png';
import photo2 from '../assets/feature2.png';
import photo3 from '../assets/feature3.png';

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
  margin-bottom: 9rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    margin-bottom: 3rem;

    h3 {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.8rem;
    }
  }
`;

const Left = styled.div`
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

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;

    img {
      width: 100%;
    }
  }
`;

const Right = styled.div<NumberProps>`
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
    margin-bottom: 3rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0 2rem 0;

    &::before {
      margin-bottom: 1rem;
    }
  }
`;

function Products() {
  const photos = [photo1, photo2, photo3];

  return (
    <Container>
      <Inner>
        <Subject main={productsEng.main} sub={productsEng.sub} />
        {productsEng.contents.map((product, index) => (
          <Wrapper key={index} number={`${index + 1}`}>
            <Left
              className="aos-animate"
              data-aos={!!((index + 1) % 2) ? 'fade-right' : 'fade-left'}
            >
              <img
                src={photos[index]}
                alt={`${'product' + Number(index + 1)}`}
              />
            </Left>
            <Right
              number={`${index + 1}`}
              className="aos-animate"
              data-aos={!!((index + 1) % 2) ? 'fade-left' : 'fade-right'}
            >
              <h3>{product.title}</h3>
              <p>{product.details}</p>
            </Right>
          </Wrapper>
        ))}
      </Inner>
    </Container>
  );
}

export default Products;
