import React from "react";
import styled from "styled-components";
import TopHeader from "3dComponents/TopHeader/TopHeader";
import Button from "components/Button/Button";
import RunLine from "3dComponents/RunLine/RunLine";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "components/Container/Container";

// import bgImage from "../../imgs/bgHero_1.jpg";

import Spline from "@splinetool/react-spline";

const Inner = styled.div`
  position: relative;
  // height: 110vh;
  z-index: 33;
  padding-top: 24vh;

  // @media screen and (max-width: 1800px) {
  //   height: 860px;
  //   padding-top: 200px;
  // }
`;

const ContainerStyled = styled(Container)`
  position: relative;
  padding-bottom: 20vh;

  @media screen and (max-width: 1800px) {
    padding-bottom: 20.5vh;
  }
`;

const Title = styled.h1`
  font-size: 155px;
  font-size: 8.25vw;
  position: relative;
  z-index: 8;
  letter-spacing: -0.06em;

  @media screen and (max-width: 1800px) {
    // font-size: 123px;
    line-height: 1.1em;
  }

  span {
    color: #2d61fd;
  }
`;

const LineOne = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-size: 8.25vw;
`;

const LineTwo = styled.div`
  display: flex;
  justify-content: center;
  // padding-left: 4vw;

  p {
    color: #000;
    font-size: 5.3vw;
    text-transform: lowercase;
    font-family: "Ogg-MediumItalic", cursive;
    letter-spacing: -0.04em;
    padding-top: 0.6vw;
  }

  span {
    text-transform: uppercase;
    font-family: "Montreal-Medium";
    margin-left: 5.4vw;
    letter-spacing: -0.06em;
    font-size: 8.25vw;
  }
`;

const Description = styled.div`
  font-size: 1.2vw;
  font-family: "Inter Tight", sans-serif;
  line-height: 1.6em;
  // position: absolute;
  letter-spacing: 0;
  text-transform: uppercase;
  width: 20vw;
  right: 50px;
  top: 25px;
  line-height: 1.4em;
  margin-left: 3.5vw;

  span {
    width: 86px;
    display: inline-block;
  }

  @media screen and (max-width: 1800px) {
    right: 68px;
    top: 5px;
  }
`;

const LineThree = styled.div`
  text-transform: uppercase;
  text-align: right;
  padding-right: 6.5vw;

  // @media screen and (max-width: 1800px) {
  //   padding-right: 50px;
  // }
`;

const ButtonStyled = styled(Button)`
  margin-left: 42.3vw;
  margin-top: 60px;
`;

const ThreeD = styled.div`
  width: 1084px;
  height: 1084px;
  overflow: hidden;
  position: absolute;
  left: -3vw;
  top: 6vh;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1800px) {
    transform: scale(0.9);
    top: 1vh;
    left: -8vw;
  }
`;

const BgColored = styled.div`
  z-index: 2;
  background: linear-gradient(
    180deg,
    #d6e9f7 0%,
    rgba(214, 233, 247, 0.85) 35.66%,
    rgba(214, 233, 247, 0) 100%
  );
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

// const BgImg = styled.img`
//   width: 100%;
//   height: 100%;
//   display: block;
//   position: absolute;
//   top: 0;
//   z-index: 1;
//   object-fit: cover;
// `;

const BgAnimated = styled.div`
  width: 100%;
  height: 110vh;
  display: block;
  position: absolute;
  top: 10vh;
  padding-top: -10px;
  z-index: 1;
  overflow: hidden;

  div {
    position: absolute;
    top: -10px;
  }

  // @media screen and (max-width: 1800px) {
  //   height: 860px;
  // }
`;

const RunLineStyled = styled(RunLine)`
  position: relative;
  z-index: 2;
  // opacity: 0.7;
`;

const Hero3D = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // gsap.to(".bohStar", {
    //   scrollTrigger: {
    //     trigger: ".heroSection",
    //     start: "top top",
    //     end: "bottom 100vh",
    //     scrub: true,
    //     // markers: true,
    //   },
    //   y: -200,
    // });
  });

  return (
    <Inner className="heroSection">
      <TopHeader />
      <ContainerStyled>
        <Title>
          <LineOne>
            I’m <span>UX/UI Designer</span>
          </LineOne>
          <LineTwo>
            <p>and</p>
            <span>Front End</span>
            <Description>
              <span></span>
              Idea, Design, Implementation: Turning Your Vision into Dynamic Web
              Solutions
            </Description>
          </LineTwo>
          <LineThree>
            Developer <span>.</span>
          </LineThree>
        </Title>
        <ButtonStyled text="Let’s Work together" />
        <ThreeD className="bohStar">
          {/* <Spline scene="https://prod.spline.design/YoMZCjq7uAQV3Hx5/scene.splinecode" /> */}
          <Spline scene="https://prod.spline.design/YoMZCjq7uAQV3Hx5/scene.splinecode" />
        </ThreeD>
      </ContainerStyled>

      <BgColored />
      <BgAnimated>
        <Spline scene="https://prod.spline.design/nbQ1NA5ibbHgLW6o/scene.splinecode" />
      </BgAnimated>
      {/* <BgImg src={bgImage} alt="bg" /> */}
      <RunLineStyled />
    </Inner>
  );
};

export default Hero3D;
