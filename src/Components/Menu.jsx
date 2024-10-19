import React from "react";

// import logo from "../Resources/logo.svg";
import "../Styles/Menu.css";
import CloseIcon from "@mui/icons-material/Close";
const Menu = ({ close }) => {
  return (
    <div className="menu-wrapper">
      <div className="strips">
        <CloseIcon onClick={close} className="close" />
      </div>
      <div className="strips">
        <p>Home</p>
      </div>

      <div className="strips">
        <p>About</p>
      </div>
      <div className="strips">
        <p>Skills</p>
      </div>
      <div className="strips">
        <p>Projects</p>
      </div>
      <div className="strips"></div>
      <div className="strips"></div>
    </div>
  );
};

export default Menu;
