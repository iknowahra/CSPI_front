import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  z-index: 10;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    bottom: 1.5rem;
  }
`;

const Button = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  padding-bottom: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.color.sub};

  i {
    color: white;
    font-size: 1rem;
  }

  :hover {
    background-color: ${({ theme }) => theme.color.grey};
    i {
      color: ${({ theme }) => theme.color.sub};
    }
  }

  @media (max-width: 768px) {
    width: 1.7rem;
    height: 1.7rem;
  }
`;

function BtnScrollUp() {
  const [isScroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY === 0 ? setScroll(false) : setScroll(true);
    });
  }, []);

  return (
    <Wrapper
      href="#"
      style={isScroll ? { display: 'flex' } : { display: 'none' }}
    >
      <Button>
        <i className="xi-angle-up-thin" />
      </Button>
    </Wrapper>
  );
}

export default BtnScrollUp;
