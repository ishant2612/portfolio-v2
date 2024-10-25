import React, { useRef, useLayoutEffect } from "react";
import "../Styles/About.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Skills from "./Skills";
import eclipser from "../Resources/Ellipse-right.svg";
import eclipsel from "../Resources/Ellipse-left.svg";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // gsap.from(".sum-box", {
    //   opacity: 0,

    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: ".sum-box",
    //     start: "top 25%",
    //     end: "bottom bottom",
    //     // markers: true,
    //     toggleActions: "play none none reverse",
    //   },
    // });
    // gsap.from(".box", {
    //   opacity: 0,

    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: ".box",
    //     start: "top 55%",
    //     end: "bottom bottom",
    //     // markers: true,
    //     toggleActions: "play none none reverse",
    //   },
    // });
    const scrollSetting = {
      trigger: ".about-wrapper",
      start: "top top", // Starts animation once about section is fully in view
      end: "bottom+=300 center", // Expands slightly faster after appearing
      scrub: 1, // Smooth transition with scroll
      pin: ".about-wrapper",
      pinSpacing: false,
      // markers: true, // No extra space after pinning
    };
    gsap.to(".skills", {
      clipPath: "circle(150% at 50% 50%)", // Expands to cover the entire screen
      scrollTrigger: scrollSetting,
    });
    gsap.to(".skill-box", {
      marginTop: "0vh",
      scrollTrigger: scrollSetting,
    });
  });

  return (
    <div className="about">
      <div className="about-wrapper">
        <img src={eclipsel} alt="" className="eclipsela" />
        <img src={eclipser} alt="" className="eclipsera" />
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
              exciting series to watch. My journey in the tech world is driven
              by my love for continuous learning and personal growth.
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
          <div className="skill-box">
            <p>SKILLS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
