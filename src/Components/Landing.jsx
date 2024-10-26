import React from "react";
import "../Styles/Landing.css";
import eclipser from "../Resources/Ellipse-right.svg";
import eclipsel from "../Resources/Ellipse-left.svg";
import gsap from "gsap";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import logo from "../Resources/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
const Landing = ({ operation }) => {
  var opening = gsap.timeline();
  useGSAP(() => {
    opening.from(
      ".head",
      {
        opacity: 0,
        duration: 2,
        ease: "expo.inOut",
      },
      "bg"
    );

    opening.from(
      ".eclipsel",
      {
        x: "-100%",
        duration: 2,
        ease: "expo.inOut",
      },
      "bg"
    );
    opening.from(
      ".eclipser",
      {
        x: "200%",
        duration: 2,
        ease: "expo.inOut",
      },
      "bg"
    );

    opening.from(
      ".menu",
      {
        opacity: 0,

        x: "200%",
        ease: "expo.inOut",
      },
      "bg"
    );

    opening.from(".hero", {
      opacity: 0,
      duration: 1,
      ease: "expo.inOut",
      stagger: 0.5,
    });
  });

  return (
    <div className="landing">
      <img src={eclipsel} alt="" className="eclipsel" />
      <img src={eclipser} alt="" className="eclipser" />
      <div className="head">
        <img src={logo} alt="" />
      </div>
      <MenuIcon className="menu" onClick={operation} />
      <div className="hero">
        <div className="textcon">
          <p className="sub">Front-End Developer & ML Enthusiast</p>
          <p className="name">ISHANT VERMA</p>
        </div>
        <div className="scroller">
          <svg
            width="26"
            height="50"
            viewBox="0 0 30 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5863 0C6.51841 0 0 6.51841 0 14.5863V38.8433C0 46.9112 6.51841 53.4296 14.5863 53.4296C22.6541 53.4296 29.1725 46.9112 29.1725 38.8433V14.5863C29.1725 6.51841 22.6541 0 14.5863 0ZM27.1957 38.8433C27.1957 45.7891 21.5321 51.4527 14.5863 51.4527C7.64043 51.4527 1.97689 45.7891 1.97689 38.8433V14.5863C1.97689 7.587 7.64043 1.92346 14.5863 1.92346C21.5321 1.92346 27.1957 7.587 27.1957 14.5863V38.8433ZM18.3798 43.8122C18.3798 45.896 16.67 47.6057 14.5863 47.6057C12.5025 47.6057 10.7928 45.896 10.7928 43.8122C10.7928 41.7285 12.5025 40.0187 14.5863 40.0187C16.67 40.0187 18.3798 41.7285 18.3798 43.8122ZM17.3646 36.5458C17.3646 38.0419 16.0823 39.2707 14.5863 39.2707C13.0902 39.2707 11.8614 38.0419 11.8614 36.5458C11.8614 35.0498 13.0902 33.7675 14.5863 33.7675C16.1357 33.7675 17.3646 34.9964 17.3646 36.5458ZM16.5632 31.096C16.5632 32.1646 15.7083 33.0729 14.5863 33.0729C13.4643 33.0729 12.6094 32.1646 12.6094 31.096C12.6094 29.974 13.5177 29.1191 14.5863 29.1191C15.7083 29.1191 16.5632 30.0274 16.5632 31.096Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Landing;
