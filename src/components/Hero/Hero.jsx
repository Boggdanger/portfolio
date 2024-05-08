import React from "react";
import Header from "components/Header/Header";
import styled from "styled-components";

import Container from "components/Container/Container";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import starBoh from "imgs/bohStar.svg";
import starHoi from "imgs/hoiStar.svg";
import hoiArr from "imgs/hoiArrows.svg";

const MainWrapper = styled.div`
  background: #efefef;
`;

const Inner = styled.div`
  padding-bottom: 100px;
  position: relative;
  z-index: 7;
`;

const Offer = styled.h1`
  font-size: 220px;
  font-family: "NoiGrotesk-Semibold";
  text-align: center;
  line-height: 1.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 70px;
  margin-bottom: 86px;
`;

const Bohdan = styled.div`
  position: relative;
  margin-bottom: 80px;

  div {
    overflow: hidden;
    line-height: 0.8em;
  }

  img {
    position: absolute;
    top: -30px;
    left: 14px;
    right: 0;
    margin: 0 auto;
  }
`;

const Hoiko = styled.div`
  position: relative;

  div {
    overflow: hidden;
    line-height: 0.8em;
  }

  img {
    position: absolute;
  }

  img:nth-child(1) {
    left: -24%;
    top: 12%;
    width: 120px;
    height: 120px;
  }

  img:last-child {
    right: -27%;
    top: 15%;
    width: 124px;
    height: 124px;
  }
`;

const Green = styled.div`
  position: absolute;
  font-size: 82px;
  background: #d5ee5f;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  z-index: 9;
  top: 155px;
  transform: rotate(-2.5deg);
  font-family: "NoiGrotesk-Light";
  border-radius: 68px;
`;

const GreenText = styled.div`
  padding: 0 50px;
`;

const ContainerStyled = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const SubTitle = styled.h3`
  font-size: 32px;
  width: 30%;
  line-height: 1.2em;
`;

const SubDesc = styled.div`
  width: 60%;
  font-size: 19px;
  line-height: 1.6em;
  font-family: "NoiGrotesk-Light";
`;

const Hero = () => {
  // const container = useRef();

  useGSAP(() => {
    let tl = gsap.timeline({ delay: 2.5, repeatDelay: 0.5 });

    tl.from(".box", {
      y: 400,
      opacity: 0,
      // stagger: {
      //   each: 0.2,
      // },
    });

    tl.from(
      ".descRipt",
      {
        y: 85,
        opacity: 0,
      },
      "-=0.3"
    );

    tl.from(".uxUi", {
      transform: "rotate(0)",
      scale: 0.15,
      opacity: 0,
      ease: "circ.out",
      delay: 0.2,
      duration: 0.3,
    });

    tl.from(".main", {
      scale: 0.96,
      y: 12,
      ease: "ease",
      borderRadius: "40px",
      delay: 0.5,
      duration: 0.5,
    });

    tl.from(".bohStar", {
      // rotation: 85,
      scale: 0.65,
      opacity: 0,
      delay: 0.7,
      ease: "circ.out",
    });
  });

  return (
    <MainWrapper>
      <Inner className="main">
        <Header />
        <Offer data-cursor-img="https://img.freepik.com/free-photo/table-workplace-close-up-man-hands-home-working-typing-laptop_285396-9256.jpg?w=1800&t=st=1706715756~exp=1706716356~hmac=1c52369af0616e1e54327b1163b0dc6c9721be0a9eaf96f9d3ab962ce28624d7">
          <Green className="uxUi">
            <GreenText>UX/UI Design</GreenText>
          </Green>
          <Bohdan>
            <div>
              <p className="box">Bohdan</p>
            </div>
            <img className="bohStar" src={starBoh} alt="*" />
          </Bohdan>
          <Hoiko>
            <img className="bohStar" src={starHoi} alt="*" />
            <div>
              <p className="box">Hoiko</p>
            </div>
            <img src={hoiArr} className="bohStar" alt="*" />
          </Hoiko>
        </Offer>
        <ContainerStyled className="descRipt">
          <SubTitle>Tailored Digital Solutions for Your Success</SubTitle>
          <SubDesc>
            Empowering Your Brand Through Customized Digital Solutions. Elevate
            your online presence with expert UX/UI design, precise HTML/CSS/JS
            execution, and cutting-edge React development. Let's shape a
            remarkable digital journey for your business.
          </SubDesc>
        </ContainerStyled>
      </Inner>
    </MainWrapper>
  );
};

export default Hero;
