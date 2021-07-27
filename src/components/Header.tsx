import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

interface ContainerProps {
  isScroll: boolean;
}

interface ModalProps {
  isOpenModal?: boolean;
}

const Container = styled.div<ContainerProps>`
  position: fixed;
  width: 100%;
  z-index: 10;
  ${({ isScroll, theme }) =>
    isScroll
      ? `background-color: white;
         box-shadow: 0 1px 2px ${theme.color.lightGrey}`
      : ''};

  @media (max-width: 768px) {
    height: 4rem;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  width: 85%;
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;

  > img {
    padding-top: 1rem;
    width: 4rem;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    padding-top: 1rem;
    flex-direction: row-reverse;
    > img {
    }
  }
`;

const Categories = styled.div<ModalProps>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 768px) {
    z-index: 10;
    position: fixed;
    background-color: white;
    box-shadow: 0.8px 0 0.8px ${({ theme }) => theme.color.lightGrey};
    height: 100vh;
    width: 55%;
    top: 0;
    left: ${({ isOpenModal }) => (isOpenModal ? '0' : '-50rem')};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 6rem;
    transition: 0.8s;
  }
`;

const Menu = styled.a`
  margin: 0 0.4rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.color.charcoal};
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const Trigger = styled.button`
  display: none;

  @media (max-width: 768px) {
    z-index: 11;
    display: inline;
    position: absolute;
    top: 1.2rem;
    left: 1.3rem;
    border: none;
    font-size: 1.8rem;
    background-color: transparent;
  }
`;

const ModalHelper = styled.div<ModalProps>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpenModal }) => (isOpenModal ? 'block' : 'none')};
    z-index: 5;
    position: fixed;
    height: 100vh;
    width: 45%;
    top: 0;
    right: ${({ isOpenModal }) => (isOpenModal ? '0' : '30rem')};
    flex-direction: column;
  }
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
  const [isOpenModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY === 0 ? setScroll(false) : setScroll(true);
    });
  }, []);

  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <img src={logo} alt="CSPI logo" />
        <Trigger onClick={() => setOpenModal((p) => !p)}>
          <i className={isOpenModal ? 'xi-close' : 'xi-bars'} />
        </Trigger>
        <Categories isOpenModal={isOpenModal}>
          {menues.map((menu, index) => (
            <Menu
              key={menu.name}
              href={`#menu${index + 1}`}
              onClick={() => setOpenModal(false)}
            >
              {menu.name}
            </Menu>
          ))}
          <ModalHelper
            isOpenModal={isOpenModal}
            onClick={() => setOpenModal(false)}
          ></ModalHelper>
        </Categories>
      </Wrapper>
    </Container>
  );
}

export default Header;
