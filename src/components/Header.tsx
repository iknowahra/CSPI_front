import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: white;
  box-shadow: 0 1px 2px ${({ theme }) => theme.color.lightGrey};
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

const Menu = styled(Link)`
  margin: 0 0.4rem;
  font-size: 0.8rem;
`;

function Header() {
  const menues = [
    { name: 'Home', link: '' },
    { name: 'Introduction', link: 'intro' },
    { name: 'Products', link: 'products' },
    { name: 'Inquery', link: 'inquery' },
  ];

  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="CSPI logo" />
        <Categories>
          {menues.map((menu) => (
            <Menu key={menu.name} to={`/${menu.link}`}>
              {menu.name}
            </Menu>
          ))}
        </Categories>
      </Wrapper>
    </Container>
  );
}

export default Header;
