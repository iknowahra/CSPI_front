import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

interface Props {
  isScroll: boolean;
}

const Container = styled.div<Props>`
  position: fixed;
  width: 100%;
  z-index: 10;
  ${({ isScroll, theme }) =>
    isScroll
      ? `background-color: white;
         box-shadow: 0 1px 2px ${theme.color.lightGrey}`
      : ''};
`;

const Wrapper = styled.div`
  margin: auto;
  width: 85%;
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;

  > img {
    width: 3rem;
    object-fit: contain;
  }
`;

const Categories = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Menu = styled.a`
  margin: 0 0.4rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.charcoal};
`;

function Header() {
  const menues = [
    { name: 'About' },
    { name: 'Vision' },
    { name: 'F&Q' },
    { name: 'Review' },
    { name: 'Focus' },
    { name: 'Guide' },
    { name: 'Latest News' },
  ];

  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY === 0 ? setScroll(false) : setScroll(true);
    });
  }, []);

  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <img src={logo} alt="CSPI logo" />
        <Categories>
          {menues.map((menu, index) => (
            <Menu key={menu.name} href={`#menu${index + 1}`}>
              {menu.name}
            </Menu>
          ))}
        </Categories>
      </Wrapper>
    </Container>
  );
}

export default Header;
