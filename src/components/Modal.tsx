import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  handleModal: (handle: boolean) => void;
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;

  > i {
    color: ${({ theme }) => theme.color.lightGrey};
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

const Inner = styled.div`
  width: 80%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  iframe {
    width: 800px;
    height: 450px;
  }
`;

const Title = styled.h3`
  text-align: left;
  color: ${({ theme }) => theme.color.lightGrey};
  margin-bottom: 1rem;
`;

function Modal({ title, handleModal }: Props) {
  return (
    <Wrapper onClick={() => handleModal(false)}>
      <i className="xi-close" />
      <Inner>
        <Title>{title}</Title>
        <iframe
          src="https://www.youtube.com/embed/3P1CnWI62Ik"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Inner>
    </Wrapper>
  );
}

export default Modal;
