import React, { useEffect } from "react";
import "../Styles/About.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import eclipser from "../Resources/Ellipse-right.svg";
import eclipsel from "../Resources/Ellipse-left.svg";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    let rafId; // Holds the requestAnimationFrame ID

    const animate = () => {
      const aboutTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-wrapper",
          start: "top top",
          end: "+=100", // Keeps it pinned for 100px scroll distance
          scrub: 2,
          pinSpacing: false,
        },
      });

      // Animation for expanding skills section
      aboutTimeline
        .to(
          ".skills",
          {
            clipPath: "circle(100% at 50% 50%)", // Expands clip-path to cover screen
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

      // Animation to reverse on scroll-up
      gsap.to(".skills", {
        clipPath: "circle(10% at 50% 100%)", // Reverts back
        scrollTrigger: {
          trigger: ".about-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          toggleActions: "play none reverse none",
        },
      });
    };

    const startAnimation = () => {
      rafId = requestAnimationFrame(animate);
    };

    // Start the animation on initial mount
    startAnimation();

    // Cleanup function to cancel requestAnimationFrame
    return () => {
      cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="about-wrapper">
      <img loading="lazy" src={eclipsel} alt="" className="eclipsela" />
      <img loading="lazy" src={eclipser} alt="" className="eclipsera" />
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
