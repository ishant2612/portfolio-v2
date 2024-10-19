import React, { useRef, useEffect } from "react";
import "../Styles/About.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const pathLength = path.getTotalLength(); // Get the total length of the SVG path

    // Set initial stroke properties
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength, // Hide the stroke initially
      stroke: "#64FFDA", // Set a stroke color that complements the fill
      strokeWidth: 10, // Adjust stroke width as needed
      fill: "none", // Set fill to none so stroke is visible
    });

    // Scroll-triggered animation
    gsap.to(path, {
      strokeDashoffset: 0, // Draw the path
      ease: "none", // No easing for a steady drawing effect
      scrollTrigger: {
        trigger: ".about-wrapper", // Trigger element (scrolling starts when the .about-wrapper enters viewport)
        start: "top 80%", // Animation starts when 80% of the viewport height is reached
        end: "bottom 20%", // Animation ends when the path leaves 20% of the viewport from the bottom
        scrub: 1, // Sync animation with scroll for smooth effect
      },
    });
  }, []);

  return (
    <div className="about-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="line1"
        viewBox="0 0 1089 648"
        fill="none"
      >
        <g filter="url(#filter0_d_6_49)">
          <path
            ref={pathRef}
            d="M1060.43 -102.361L1073.53 -79.6714L451.1 279.689L-171.331 639.05L-184.431 616.361L438 257L1060.43 -102.361Z"
            fill="url(#paint0_linear_6_49)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_6_49"
            x="-184.431"
            y="-102.361"
            width="1272.96"
            height="749.411"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="11" dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_6_49"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_6_49"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_6_49"
            x1="0.000241884"
            y1="722.5"
            x2="463"
            y2="227"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#64FFDA" />
            <stop offset="0.979898" stop-color="#3C9983" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 908"
        fill="none"
        className="line"
      >
        <path
          ref={pathRef}
          d="M1498.05 0L1511.15 22.6892L744.624 465.242L-21.9003 907.795L-34.9999 885.106L731.524 442.553L1498.05 0Z"
          fill="url(#paint0_linear_6_52)"
          fillOpacity="0.73"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6_52"
            x1="731.524"
            y1="442.553"
            x2="744.624"
            y2="465.242"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#64FFDA" />
            <stop offset="1" stopColor="#3C9983" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default About;
