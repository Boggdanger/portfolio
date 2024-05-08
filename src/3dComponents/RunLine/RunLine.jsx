import React, { useRef } from "react";
import styled from "styled-components";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Inner = styled.div`
  padding: 4vh 0;
  background: #2d61fd;
  width: 100%;
  overflow: hidden;
`;

const RelativeInner = styled.div`
  display: flex;
  font-size: 1.6vw;
  color: #fff;
  white-space: nowrap;
  margin-left: -300px;
`;

const Txt = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 50px;
  }

  span {
    width: 17px;
    height: 17px;
    background: #45c578;
    display: block;
    border-radius: 50%;
    margin-right: 20px;
  }
`;

const RunLine = (props) => {
  gsap.registerPlugin(ScrollTrigger);

  const innerWrap = useRef(null);

  useGSAP(() => {
    gsap.to(".line", {
      scrollTrigger: {
        trigger: innerWrap.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 5.5,
        // markers: true,
      },
      x: -400,
    });
  });

  const { className } = props;
  return (
    <Inner className={className} ref={innerWrap}>
      <RelativeInner className="line">
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>{" "}
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
        <Txt>
          <span></span> Available for freelance
        </Txt>
      </RelativeInner>
    </Inner>
  );
};

export default RunLine;
