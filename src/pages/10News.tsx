import React from 'react';
import styled from 'styled-components';
import newsEng from '../assets/eng/10news';

import Subject from '../components/Subject';

import newsBig from '../assets/news_big.jpg';
import newsSmall1 from '../assets/news_small1.jpg';
import newsSmall2 from '../assets/news_small2.jpg';
import newsSmall3 from '../assets/news_small3.jpg';
import newsSmall4 from '../assets/news_small4.jpg';

interface BadgeProps {
  content: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 120vh;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.color.lightGrey};

  @media (max-width: 768px) {
    padding: 0rem;
    width: 100%;
    height: 300vh;
  }
`;

const Inner = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      font-size: 1.1rem;
    }
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 0.3rem;

  ::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.charcoal};
    opacity: 0.7;
    position: absolute;
    transition: 0.5s;
  }

  :hover {
    ::before {
      opacity: 0.5;
    }
  }

  > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 65vh;
    margin-bottom: 2rem;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const LeftText = styled.div`
  text-align: center;
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;

  > h2,
  p {
    margin: 1rem 0;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
      line-height: 1.9rem;
    }
  }
`;

const RightInner = styled.div`
  width: calc((100% - 2rem) / 2);
  font-weight: 200;
  cursor: pointer;

  &:nth-child(1),
  :nth-child(3) {
    margin: 0 1rem;
  }

  &:nth-child(1),
  :nth-child(2) {
    margin-bottom: 1rem;
  }

  > :nth-child(2) {
    font-size: 0.9rem;
    line-height: 1.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 0.7rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 45vh;
    margin: 1rem 0;

    &:nth-child(1),
    :nth-child(2),
    :nth-child(3) {
      margin: 0;
    }

    .title {
      font-size: 1.2rem;
      line-height: 1.7rem;
      height: 4rem;
    }
  }
`;

const Date = styled.span`
  font-size: 0.7rem;
  display: block;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const RightImage = styled.div`
  height: 73%;
  overflow: hidden;
  position: relative;
  border-radius: 0.3rem;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    height: 65%;
  }
`;

const Badge = styled.span<BadgeProps>`
  position: absolute;
  top: -1px;
  right: 0;
  padding: 0 0.4rem;
  color: white;
  font-size: 0.7rem;
  border-radius: 0.3rem;
  background-color: ${({ content, theme }) =>
    content === 'new' ? theme.color.charcoal : theme.color.main};

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.1rem 0.7rem;
  }
`;

const ReadMore = styled.button`
  border: none;
  padding: 0.5rem 0.7rem;
  margin: 3rem 0;
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.color.charcoal};
  border: ${({ theme }) => theme.boxBorder};

  :hover {
    background-color: ${({ theme }) => theme.color.charcoal};
    color: white;
    border: transparent;
  }
`;

function News() {
  const newsPhotos = [newsSmall1, newsSmall2, newsSmall3, newsSmall4];
  return (
    <Wrapper id="menu7">
      <Inner>
        <Subject main={newsEng.subject} />
        <Main>
          <Left>
            <img src={newsBig} alt="" />
            <LeftText>
              <h2>{newsEng.mainNews.title}</h2>
              <p>{newsEng.mainNews.details}</p>
              <Date>{newsEng.mainNews.date}</Date>
            </LeftText>
          </Left>
          <Right>
            {newsEng.subNews.map((news, index) => (
              <RightInner key={index}>
                <RightImage>
                  <img src={newsPhotos[index]} alt={news.title} />
                  {news.badge && (
                    <Badge content={news.badge}>
                      {(news.badge + ' issue').toUpperCase()}
                    </Badge>
                  )}
                </RightImage>

                <div className="title">{news.title}</div>
                <Date>{news.date}</Date>
              </RightInner>
            ))}
          </Right>
        </Main>
        <ReadMore>{'read more news'.toUpperCase()}</ReadMore>
      </Inner>
    </Wrapper>
  );
}

export default News;
