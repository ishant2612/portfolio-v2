import React, { useRef, useLayoutEffect } from "react";
import "../Styles/About.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Skills from "./Skills";
import eclipser from "../Resources/Ellipse-right.svg";
import eclipsel from "../Resources/Ellipse-left.svg";
import { useGSAP } from "@gsap/react";
import Projects from "./Projects";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // Pin the About section and set up a timeline
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-wrapper",
        start: "top top",
        end: "+=100", // Keeps it pinned for 400px scroll distance
        scrub: 2,
        // pin: true,
        pinSpacing: false,
      },
    });

    // Animation for the skills section, triggered within the pinned timeline
    aboutTimeline
      .to(
        ".skills",
        {
          clipPath: "circle(100% at 50% 50%)", // Expands the clip-path
          duration: 1,
        },
        "same"
      )
      .to(
        ".skill-box p",
        {
          marginTop: "0vh",
        },
        "same"
      );

    // Reversing the animation on scroll-up
    gsap.to(".skills", {
      clipPath: "circle(10% at 50% 100%)", // Reverses to original
      scrollTrigger: {
        trigger: ".about-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        toggleActions: "play none reverse none", // Allows smooth reverse on scroll-up
      },
    });
  });

  return (
    <div className="about-wrapper">
      <img src={eclipsel} alt="" className="eclipsela" />
      <img src={eclipser} alt="" className="eclipsera" />
      <div className="title">
        <p>About</p>
      </div>
      <div className="boxes">
        <div className="sum-box">
          <p>
            <span>Hi,</span> I'm Ishant Verma, a passionate individual with a
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
        <div className="skill-box">
          <p>SKILLS</p>
          <div className="bubbles"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
