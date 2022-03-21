import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const FooterBlock = styled.div`
  background-color: #242424;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
  @media screen and (max-width: 820px) {
    Button {
      width: 100%;
    }
  }
`;

const Text = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;

  ${(props) =>
    props.head &&
    css`
      font-size: 24px;
    `}

  ${(props) =>
    props.text &&
    css`
      font-size: 20px;
    `}
`;

const FooterInput = styled.input`
  padding: 8px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 18px;
  margin-bottom: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #b1b1b1;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

const LinkBlock = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 2rem;
  }
`;

const LinkWrap = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;

  h2 {
    margin-bottom: 16px;
    color: #fff;
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
      color: #a8a8a8;
      transition: 0.3s ease-out;
    }
  }
`;

const SocialBlock = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 980px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialLink = styled(Link)`
  color: #fff;
  font-size: 24px;
`;

const Copyright = styled.small`
  color: #fff;
`;
function Footer() {
  return (
    <FooterBlock>
      <Subscription>
        <Text head>
          Join the Adventure newsletter to receive our best vacation deals
        </Text>
        <Text text>You can unsubscribe at any time.</Text>
        <form>
          <FooterInput name='email' type='email' placeholder='Your Email' />
          <Button outline={true}>Subscribe</Button>
        </form>
      </Subscription>
      <LinkBlock>
        <LinkWrap>
          <LinkItems>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </LinkItems>
          <LinkItems>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </LinkItems>
        </LinkWrap>
        <LinkWrap>
          <LinkItems>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </LinkItems>
          <LinkItems>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </LinkItems>
        </LinkWrap>
      </LinkBlock>
      <SocialBlock>
        <SocialWrap>
          <FooterLogo>
            <LogoLink to='/'>
              LOGO
              <i className='fab fa-typo3' />
            </LogoLink>
          </FooterLogo>
          <Copyright>TRVL © 2022</Copyright>
          <SocialIcon>
            <SocialLink
              className='facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </SocialLink>
            <SocialLink
              className='instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </SocialLink>
            <SocialLink
              className='youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </SocialLink>
            <SocialLink
              className='twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </SocialLink>
            <SocialLink
              className='twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </SocialLink>
          </SocialIcon>
        </SocialWrap>
      </SocialBlock>
    </FooterBlock>
  );
}

export default Footer;
