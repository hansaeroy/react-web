import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from './Button';

const Nav = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: 1500px;
  /* position: relative; */
`;

const NavbarLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: end;
  margin-right: 2rem;

  li {
    height: 80px;
  }
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;

    ${({ click }) =>
      click &&
      css`
        background: #242222;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
      `};
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      background-color: #fff;
      color: #242424;
      border-radius: 0;
    }
  }
`;

const NavLinkMobile = styled(Link)`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    text-align: center;
    margin: 2rem auto;
    border-radius: 4px;
    width: 80%;
    text-decoration: none;
    font-size: 1.5rem;
    background-color: transparent;
    color: #fff;
    padding: 14px 20px;
    border: 1px solid #fff;
    transition: all 0.3s ease-out;

    &:hover {
      background: #fff;
      color: #242424;
      transition: 250ms;
    }
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
      <Nav>
        <NavContainer>
          <NavbarLogo to='/' onClick={closeMobileMenu}>
            LOGO <i className='fab fa-typo3' />
          </NavbarLogo>

          <MenuIcon onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </MenuIcon>

          <NavMenu click={click}>
            <li>
              <NavLink to='/' onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/services' onClick={closeMobileMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to='/products' onClick={closeMobileMenu}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLinkMobile to='/sign-up' onClick={closeMobileMenu}>
                Sign up
              </NavLinkMobile>
            </li>
          </NavMenu>
          {button && (
            <Link to='/sign-up'>
              <Button outline={true} color='primary'>
                SIGN UP
              </Button>
            </Link>
          )}
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
