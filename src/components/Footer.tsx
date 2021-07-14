import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/logo.png';
import Eng from '../assets/eng/1landing';

const Wrapper = styled.div`
  width: 100%;
  height: 25vh;
  background-color: ${({ theme }) => theme.color.grey};
  display: flex;
  align-items: center;
`;

const Inner = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 6rem;
    flex: 0.1;
    margin-right: 2rem;
  }
`;

const Address = styled.div`
  color: ${({ theme }) => theme.color.charcoal};
  :nth-child(2) {
    width: 50%;
  }
  :nth-child(3) {
    width: 40%;
  }
  div {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  }
  p {
    font-size: 0.8rem;
  }
  span {
    font-size: 0.8rem;
    margin-right: 2rem;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Inner>
        <img src={Logo} alt="cspi logo" />
        <Address>
          <div>{Eng.footer.Vn.name}</div>
          <p>{Eng.footer.Vn.location}</p>
          <div>
            <span>{Eng.footer.Vn.telephone}</span>
            <span>{Eng.footer.Vn.fax}</span>
          </div>
        </Address>
        <Address>
          <div>{Eng.footer.Kor.name}</div>
          <p>{Eng.footer.Kor.location}</p>
          <div>
            <span>{Eng.footer.Kor.telephone}</span>
            <span>{Eng.footer.Kor.fax}</span>
          </div>
        </Address>
      </Inner>
    </Wrapper>
  );
}

export default Footer;
