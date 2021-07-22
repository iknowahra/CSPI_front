import React, { useState } from 'react';
import styled from 'styled-components';

import serviceEng from '../assets/eng/3service';

interface TabProps {
  no: string;
  selected: string;
  onClick?: () => void;
}

const Wrapper = styled.div`
  height: 28vh;
  background-color: ${({ theme }) => theme.color.main};

  @media (max-width: 768px) {
    height: 55vh;
  }
`;

const Inner = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  width: 45%;
  height: 100%;
  padding: 1.2rem 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

const Tab = styled.div<TabProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 0.5rem;
`;

const IconWrapper = styled.div<TabProps>`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-family: 'FontAwesome';
  font-size: 200%;
  font-weight: 100;
  background-color: ${({ no, selected, theme }) =>
    no === selected ? theme.color.charcoal : theme.color.lightGrey};
  color: ${({ no, selected, theme }) =>
    no === selected ? theme.color.lightGrey : theme.color.sub};
  transition: 0.5s;

  :hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 6rem;
    height: 6rem;
    font-size: 250%;

    :hover {
      transform: translateY(0);
    }
  }
`;

const TabLabel = styled.div<TabProps>`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  color: ${({ no, selected, theme }) =>
    no === selected ? theme.color.charcoal : theme.color.lightGrey};
  margin-top: 8px;
  text-align: center;
  line-height: 1.2rem;
  min-height: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4rem;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  margin-left: 3.3rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
    margin: 0;
    border-top: ${({ theme }) => theme.boxBorder};
  }
`;

const RightInner = styled.div<TabProps>`
  display: ${({ no, selected }) => (no === selected ? 'show' : 'none')};
  color: ${({ theme }) => theme.color.lightGrey};
  width: 80%;
  p {
    font-size: 0.9rem;
    line-height: 1.6rem;
    margin-top: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
    text-align: center;

    h3 {
      font-size: 1.4rem;
      font-weight: 600;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

function Service() {
  const [selected, setSelected] = useState('service1');

  return (
    <Wrapper>
      <Inner>
        <Left>
          {serviceEng.map((service, index) => (
            <Tab
              key={index}
              no={service.no}
              selected={selected}
              onClick={() => setSelected(service.no)}
            >
              <IconWrapper no={service.no} selected={selected}>
                <i className={service.icon} />
              </IconWrapper>
              <TabLabel no={service.no} selected={selected}>
                {service.subject}
              </TabLabel>
            </Tab>
          ))}
        </Left>
        <Right>
          {serviceEng.map((service, index) => (
            <RightInner key={index} no={service.no} selected={selected}>
              <h3>{service.title}</h3>
              <p>{service.details}</p>
            </RightInner>
          ))}
        </Right>
      </Inner>
    </Wrapper>
  );
}

export default Service;
