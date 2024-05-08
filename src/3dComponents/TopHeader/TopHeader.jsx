import React from "react";
import styled from "styled-components";

const Inner = styled.div`
  position: absolute;
  top: 0;
  z-index: 7;
  display: flex;
  margin: 0 auto;
  left: 0;
  right: 0;
  justify-content: space-between;
  padding: 30px 3% 0;
`;

const Logo = styled.div`
  font-size: 23px;
`;

const RightWrapper = styled.div`
  width: 51.6vw;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.div`
  width: 142px;
  line-height: 1.4em;
  font-size: 14px;

  a {
    display: block;
  }
`;

const Available = styled.div`
  width: 227px;
  height: 48px;
  text-align: right;
`;

const Dot = styled.span``;

const TopHeader = () => {
  return (
    <Inner>
      <Logo>/BohdanHoiko</Logo>
      <RightWrapper>
        <Nav>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Portfolio</a>
        </Nav>
        <Available>
          <Dot />
          <p>Available for now</p>
        </Available>
      </RightWrapper>
    </Inner>
  );
};

export default TopHeader;
