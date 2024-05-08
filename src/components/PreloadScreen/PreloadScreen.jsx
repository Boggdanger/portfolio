import React, { useRef } from "react";
import styled from "styled-components";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  background: #d5ee5f;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.3em;
`;

const OverInner = styled.div`
  display: flex;
  justify-content: center;
`;

const OverName = styled.div`
  position: relative;
  margin-right: 30px;
  overflow-x: hidden;
  width: 145%;
`;

const TextItem = styled.div`
  // position: absolute;
  // top: 0px;
  // left: 0px;
  font-size: 120px;
`;

const OverSurName = styled.div`
  position: relative;
  overflow-x: hidden;
  width: 105%;
`;

const PreloadScreen = () => {
  const container = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({ repeatDelay: 0.5 });

    tl.to(".overWidth", {
      width: "10%",
      delay: 1.2,
    });

    tl.to(".preloadScreen", {
      height: "0%",
      y: -200,
      // display: "none",
      delay: 0.3,
    });
  });

  return (
    <Overlay className="preloadScreen">
      <OverInner>
        <OverName className="overWidth">
          {/* <GreenBg className="firstOver" /> */}
          <TextItem>Bohdan</TextItem>
        </OverName>
        <OverSurName className="overWidth">
          {/* <GreenBgTwo className="secOver" /> */}
          <TextItem>Hoiko</TextItem>
        </OverSurName>
      </OverInner>
    </Overlay>
  );
};

export default PreloadScreen;
