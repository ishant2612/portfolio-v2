import React from "react";
import "../Styles/Menu.css";
import CloseIcon from "@mui/icons-material/Close";

const Menu = ({ close }) => {
  // Define the click handler
  const handleClick = (targetId) => {
    // Trigger the close animation
    close();

    // Scroll to the target element after the animation completes
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 1620); // Adjust the delay to match your close animation duration
  };

  return (
    <div className="menu-wrapper">
      <div className="strips">
        <CloseIcon onClick={close} className="close" />
      </div>
      <div className="strips" onClick={() => handleClick("home")}>
        <p>Home</p>
      </div>
      <div className="strips" onClick={() => handleClick("about")}>
        <p>About</p>
      </div>
      <div className="strips" onClick={() => handleClick("skills")}>
        <p>Skills</p>
      </div>
      <div className="strips" onClick={() => handleClick("projects")}>
        <p>Projects</p>
      </div>
      <div className="strips"></div>
      <div className="strips"></div>
    </div>
  );
};

export default Menu;
