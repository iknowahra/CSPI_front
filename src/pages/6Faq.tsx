import React, { useState } from 'react';
import styled from 'styled-components';
import Subject from '../components/Subject';
import photo from '../assets/faq.png';
import { fnqEng, subjectEng, awardEng } from '../assets/eng/6faq';

interface AcordianProps {
  no: string;
  selected: string;
}

const Wrapper = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  width: 80%;
  margin: auto;
  padding: 2rem 0;
`;

const Container = styled.div`
  display: flex;
`;

const Contents = styled.div`
  width: 45%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  :nth-child(1) {
    margin-right: 1rem;
    width: 55%;
  }
`;

const Acordian = styled.div<AcordianProps>`
  border: 1px solid
    ${({ no, selected, theme }) =>
      no === selected ? theme.color.lightMain : theme.color.grey};
  border-radius: 0.4rem;
  padding: 0.5rem 1.2rem;
  margin-bottom: 0.7rem;
  width: 100%;
`;

const Title = styled.div<AcordianProps>`
  font-size: 0.9rem;
  color: ${({ no, selected, theme }) =>
    no === selected ? theme.color.main : theme.color.charcoal};
  ::after {
    font-family: 'FontAwesome';
    content: ' ${({ no, selected }) => (no === selected ? '\f105' : '\f107')}';
    float: right;
  }
`;

const Details = styled.p<AcordianProps>`
  margin-top: 1rem;
  display: ${({ no, selected }) => (no === selected ? 'show' : 'none')};
`;

const AwardImage = styled.div`
  position: relative;

  ::after {
    content: 'december 9, 2020';
    width: 8rem;
    height: 1.2rem;
    padding: 0.3rem 0.5rem;
    color: white;
    font-size: 0.9rem;
    background-color: ${({ theme }) => theme.color.charcoal};
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: -1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 25rem;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border: ${({ theme }) => theme.boxBorder};
  }
`;

const AwardTitle = styled.h2`
  margin: 2rem 0 1rem 0;
  color: #e4b02e;
`;

const AwardDetails = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  width: 25rem;
  max-width: 100%;
`;

const AwardButton = styled.button`
  border: 2px solid ${({ theme }) => theme.color.sub};
  padding: 0.5rem 0.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.charcoal};
  text-transform: uppercase;
  background-color: white;

  :hover {
    background-color: ${({ theme }) => theme.color.main};
    color: white;
    border: transparent;
  }
`;

function Fnq() {
  const [selected, setSelected] = useState('fnq1');
  return (
    <Wrapper id="menu3">
      <Inner>
        <Subject main={subjectEng.main} sub={subjectEng.sub} />
        <Container>
          <Contents>
            {fnqEng.map((fnq, index) => (
              <Acordian
                key={index}
                onClick={() => setSelected(fnq.no)}
                no={fnq.no}
                selected={selected}
              >
                <Title no={fnq.no} selected={selected}>
                  {fnq.title}
                </Title>
                <Details no={fnq.no} selected={selected}>
                  {fnq.details}
                </Details>
              </Acordian>
            ))}
          </Contents>
          <Contents>
            <AwardImage>
              <img src={photo} alt="award" />
            </AwardImage>
            <AwardTitle>{awardEng.title}</AwardTitle>
            <AwardDetails>{awardEng.details}</AwardDetails>
            <AwardButton>{awardEng.button}</AwardButton>
          </Contents>
        </Container>
      </Inner>
    </Wrapper>
  );
}

export default Fnq;
