import React, { useRef } from "react";
import Container from "components/Container/Container";
import styled from "styled-components";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import abouArr from "imgs/arrAbout.svg";

const Inner = styled.div`
  background: #efefef;
  position: relative;
  z-index: 4;
`;

const ContainerStyled = styled(Container)``;

const BlackInner = styled.div`
  background: #1b1b1b;
  padding: 145px 0;
  margin: 0 auto;
  position: relative;
  z-index: 3;
`;

const Text = styled.div`
  font-size: 48px;
  position: relative;
`;

const TextItem = styled.div`
  color: #fff;
  line-height: 1.5em;
`;

const MyName = styled.div`
  background: #dde936;
  display: inline-block;
  float: left;
  margin-right: 40px;
  padding: 5px 35px;
  border-radius: 50px;
`;

const MyNaneInner = styled.div`
  display: flex;
`;

const Hello = styled.p`
  margin-right: 20px;
`;

const ImgHello = styled.img`
  width: 60px;
  heigth: 22px;
`;

const BlurOne = styled.div`
  width: 1078px;
  height: 766px;
  position: absolute;
  top: -50%;
  background: #a8d5ff;
  opacity: 0.5;
  z-index: 2;
  -webkit-filter: blur(75px);
  filter: blur(65px);
  border-radius: 50%;
  left: 0;
  right: -100px;
  margin: 0 auto;
  display: none;
`;

const BlurTwo = styled.div`
  width: 931px;
  height: 663px;
  position: absolute;
  top: -35%;
  background: #cc3bff;
  opacity: 0.2;
  z-index: 2;
  -webkit-filter: blur(75px);
  filter: blur(65px);
  border-radius: 50%;
  left: -170px;
  right: 0;
  margin: 0 auto;
  display: none;
`;

const About = () => {
  const textMe = useRef();
  const mainBox = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const text = new SplitType(textMe.current, { types: "words" });

    gsap.from(text.words, {
      scrollTrigger: {
        trigger: textMe.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        // markers: true,
      },
      opacity: 0.2,
      stagger: 0.1,
    });

    // gsap.from(mainBox.current, {
    //   scrollTrigger: {
    //     trigger: mainBox.current,
    //     start: "top 90%",
    //     end: "top 60%",
    //     scrub: true,
    //     // markers: true,
    //   },
    //   width: "95%",
    //   borderRadius: "70px",
    //   y: 100,
    // });
  });

  return (
    <Inner>
      <BlackInner ref={mainBox}>
        <ContainerStyled>
          <Text>
            <MyName>
              <MyNaneInner>
                <Hello>Hello, I'm Bohdan</Hello>
                <ImgHello src={abouArr} />
              </MyNaneInner>
            </MyName>
            <TextItem ref={textMe}>
              I've been designing and developing user interfaces for [number of
              years] years. My goal is not only to create beautiful design but
              also to ensure an excellent user experience. My skills include
              [list of key skills], and my approach to work involves a
              meticulous dive into the details of each project.
            </TextItem>
            {/* <TextItemTwo>
              I've been designing and developing user interfaces for [number of
              years] years. My goal is not only to create beautiful design but
              also to ensure an excellent user experience. My skills include
              [list of key skills], and my approach to work involves a
              meticulous dive into the details of each project
            </TextItemTwo> */}
          </Text>
        </ContainerStyled>
      </BlackInner>
      <BlurOne />
      <BlurTwo />
    </Inner>
  );
};

export default About;
