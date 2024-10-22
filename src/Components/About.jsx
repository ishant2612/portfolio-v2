import React, { useRef, useLayoutEffect } from "react";
import "../Styles/About.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Skills from "./Skills";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Create refs for the sections and the "I" div
  // const aboutRef = useRef(null);
  // const iRef = useRef(null);

  // useLayoutEffect(() => {
  //   // Create the timeline and animations inside the useLayoutEffect hook
  //   const ctx = gsap.context(() => {
  //     // GSAP animation for the "I" div
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: aboutRef.current, // Trigger on the about section
  //           start: "top top", // Start at the top of the section
  //           end: "+=5000", // Adjust duration of the pinned animation
  //           scrub: true, // Smooth animation based on scroll
  //           pin: aboutRef.current, // Pin the about section
  //           pinSpacing: false,
  //           // markers: true, // Remove markers in production
  //         },
  //       })
  //       .to(iRef.current, {
  //         scale: 1000, // Scale up the "I" div
  //         duration: 2,
  //         ease: "power2.out", // Smooth easing
  //         backgroundColor:
  //           "radial-gradient(38.98% 50% at 50% 50%, #64FFDA 0%, #FFF 85.07%);", // You can also animate background or color here
  //       })
  //       .to(iRef.current, {
  //         scale: 1, // Scale it back down
  //         duration: 3,
  //         ease: "power2.out",
  //       });
  //   });

  //   return () => ctx.revert(); // Cleanup when the component unmounts
  // }, []);

  return (
    <div className="about-wrapper">
      <div className="title">
        <p>About</p>
      </div>
      <div className="boxes">
        <div className="sum-box">
          <p>
            <span>Hi</span>, I'm Ishant Verma, a passionate individual with a
            keen interest in web development and technology. When I'm not
            coding, you can find me at the gym, pushing my limits and staying
            fit. I'm also an avid anime fan, always on the lookout for new and
            exciting series to watch. My journey in the tech world is driven by
            my love for continuous learning and personal growth.
          </p>
        </div>
        <div className="other-boxes">
          <div className="box">
            <p>
              <span>5+</span>
              <br /> Hackathons
            </p>
          </div>
          <div className="box">
            <p>
              <span>2</span>
              <br /> Research Papers
            </p>
          </div>
        </div>
      </div>
      <div className="skills">
        <p>
          SK<div className="i"></div>LLS
        </p>
      </div>
    </div>
  );
};

export default About;
