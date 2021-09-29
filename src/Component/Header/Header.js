import React from "react";
import "./Header.scss";
import Img from "../../Images/logo.png";
import Img1 from "../../Images/img13.jpg";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">Movie Redux Toolkit</div>
        <div className="user-image">
          <img src={Img1} alt="user" />
        </div>
      </div>
    </>
  );
};

export default Header;
