import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';

const SectionBlock = styled.div`
  /* background: url() center center/cover no-repeat; */
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;

  h1 {
    color: white;
    font-size: 100px;
    margin-top: -100px;
  }

  p {
    color: white;
    margin-top: 8px;
    font-size: 32px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
  }

  @media screen and (max-width: 960px) {
    h1 {
      font-size: 70px;
      margin-top: -150px;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 50px;
      margin-top: -100px;
    }

    p {
      font-size: 30px;
    }
  }
`;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`;

const ButtonBlock = styled.div`
  margin-top: 32px;

  Button {
    margin: 6px;
  }

  @media screen and (max-width: 768px) {
    Button {
      width: 100%;
      display: block;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const HeroSection = () => {
  return (
    <SectionBlock>
      <Video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <ButtonBlock>
        <StyledLink to='/sign-up'>
          <Button outline={true} size='large'>
            GET STARTED
          </Button>
        </StyledLink>
        <StyledLink to='/products'>
          <Button size='large'>
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button>
        </StyledLink>
      </ButtonBlock>
    </SectionBlock>
  );
};

export default HeroSection;
