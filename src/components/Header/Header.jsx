import React from "react";
import styled from "styled-components";

import logoType from "imgs/BHLogo.svg";

const Inner = styled.div`
  display: flex;
  padding: 30px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled.div`
  position: relative;
  z-index: 5;
  width: 44px;
  heigth: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const Nav = styled.nav`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  justify-content: center;
  z-index: 3;

  a {
    font-size: 17px;

    &:not(:last-child) {
      margin-right: 54px;
    }
  }
`;

const Button = styled.a`
  width: 205px;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  position: relative;
  z-index: 5;
`;

const Header = () => {
  return (
    <Inner>
      <Logo href="/">
        <img src={logoType} alt="BH" />
      </Logo>
      <Nav>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Portfolio</a>
      </Nav>
      <Button href="/">Contact Me</Button>
    </Inner>
  );
};

export default Header;
