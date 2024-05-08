import React from "react";
import styled from "styled-components";

const Inner = styled.a`
  width: 310px;
  height: 75px;
  background: #fff;
  color: #000;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 5;
  border-radius: 13px;
  font-family: "Montreal-Medium";
  letter-spacing: 0.06em;
  box-shadow: 0px 5px 13.1px rgba(0, 0, 0, 0.04);
`;

const Button = (props) => {
  const { link, text, className } = props;

  return (
    <Inner className={className} href={link}>
      {text}
    </Inner>
  );
};

export default Button;
