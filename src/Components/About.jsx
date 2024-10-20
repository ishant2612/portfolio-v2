import React, { useRef, useEffect } from "react";
import "../Styles/About.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  //

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
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
