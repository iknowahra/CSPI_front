import React from 'react';
import styled from 'styled-components';

import CSPILogo from '../assets/logo.png';
import Zalo from '../assets/zalo';
import Eng from '../assets/eng/1landing';

const Wrapper = styled.div`
  width: 100%;
  height: 30vh;
  background-color: ${({ theme }) => theme.color.grey};
  display: flex;
  align-items: center;
`;

const Inner = styled.div`
  width: 80%;
  height: 80%;
  margin: auto;

  div,
  span {
    font-size: 0.8rem;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.div`
  width: 10%;
  img {
    width: 100%;
  }
`;
const Copyright = styled.div`
  width: 90%;
  margin: 0 2rem;
`;

const PolicySns = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.sub};
`;

const Policy = styled.div`
  span {
    display: block;
  }
`;

const Sns = styled.div`
  display: flex;
  a {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #e6e6e6;
    border-radius: 0.2rem;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      background-color: ${({ theme }) => theme.color.sub};

      i {
        color: ${({ theme }) => theme.color.lightGrey};
      }

      svg {
        fill: ${({ theme }) => theme.color.lightGrey};
      }
    }

    i {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.color.sub};
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
      fill: ${({ theme }) => theme.color.sub};
    }
  }
`;
const Address = styled.div`
  padding: 0.8rem 0;
  span {
    display: block;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Inner>
        <Contents>
          <Logo>
            <img src={CSPILogo} alt="cspi logo" />
          </Logo>
          <Copyright>
            <PolicySns>
              <Policy>
                <span>
                  <a href="#none">{Eng.footer.policy1}</a>
                  <a href="#none">{Eng.footer.policy2}</a>
                </span>
                <span>{Eng.footer.copyright}</span>
              </Policy>
              <Sns>
                <a href="#none">
                  <i className="xi-facebook" />
                </a>
                <a href="#none">
                  <i className="xi-instagram" />
                </a>
                <a href="#none">
                  <i className="xi-linkedin" />
                </a>
                <a href="#none">
                  <i className="xi-youtube-play" />
                </a>
                <a href="#none">
                  <Zalo />
                </a>
              </Sns>
            </PolicySns>
            <Address>
              <span>
                {Eng.footer.basic} | <a href="#none">{Eng.footer.email}</a>
              </span>
              <span>
                {Eng.footer.location} | {Eng.footer.contacts}
              </span>
            </Address>
          </Copyright>
        </Contents>
      </Inner>
    </Wrapper>
  );
}

export default Footer;
