import React from 'react';
import styled from 'styled-components';
import visionEng from '../assets/eng/5vision';
import photo from '../assets/vision.jpg';

interface HeaderProps {
  main: string;
  sub: string;
}
interface ContentsProps {
  index: number;
}

const Container = styled.div`
  width: 100%;
  height: 65vh;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.lightGrey};
`;

const Contents = styled.div<ContentsProps>`
  display: flex;
  flex-direction: ${({ index }) =>
    !!(Number(index) % 2) ? 'column' : 'column-reverse'};
  & > img {
    height: 50%;
    width: 100%;
    object-fit: cover;
  }
`;
const Wrapper = styled.div`
  height: 50%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  h3 {
    position: relative;
    padding: 0.8rem 0;
    margin-bottom: 1rem;
    ::after {
      content: '';
      width: 3rem;
      height: 0.2rem;
      background-color: ${({ theme }) => theme.color.main};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

function Header({ main, sub }: HeaderProps) {
  return (
    <Wrapper>
      <h3>{main}</h3>
      <p>{sub}</p>
    </Wrapper>
  );
}

function Vision() {
  const photos: string[] = [photo, photo, photo];
  return (
    <Container>
      <Inner>
        {visionEng.map((vision, index) => (
          <Contents key={index} index={index}>
            <Header main={vision.main} sub={vision.sub} />
            <img src={photos[index]} alt={vision.main} />
          </Contents>
        ))}
      </Inner>
    </Container>
  );
}

export default Vision;
