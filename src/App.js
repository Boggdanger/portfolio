import React from "react";

import gsap from "gsap";
import MouseFollower from "mouse-follower";

import './default-styles.scss';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "pages/Home/Home";





function App() {
  // mouse effect
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower({
    speed: 0.3,
    stateDetection: {
      '-pointer': 'a,button',
  }
  });
  

  // Smooth scroll
  // const lenis = new Lenis()

  // function raf(time) {
  //   lenis.raf(time)
  //   requestAnimationFrame(raf)
  // }

  // requestAnimationFrame(raf)
  // gsap.registerPlugin(ScrollTrigger);

  // const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

// gsap.ticker.lagSmoothing(3)


  return (
    <div id="hero">
      <Home />
    </div>

  );
}

export default App;
