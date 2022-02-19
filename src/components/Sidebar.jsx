import React from "react";
import img1 from "../images/img1.svg";

import img3 from "../images/img3.svg";
import img4 from "../images/img4.svg";
import img5 from "../images/img5.svg";

import img7 from "../images/img7.svg";
import img8 from "../images/img8.svg";
import img9 from "../images/img9.svg";
import img16 from "../images/img16.svg";
import img15 from "../images/img15.svg";
import nbt from "../images/nbtn.svg";
import buy from "../images/buy.svg";
import internet from "../images/internet.svg";
import toggle from "../images/toggle.svg";

import "./styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="main-side-bar">
      <div className="sidebar-heading">
        <p>N</p><span className="sidebar-heading-name">Name</span>
        <img src={img1} alt=""  />
      </div>
      <div className="sidebar-links-section">
          <img src={img8} alt=""  />
          <img src={img3} alt=""  />
          <img src={img4} alt=""  />
          <img src={img5} alt=""  />
          <img src={img9} alt=""  />
          <img src={img7} alt=""  />
          <img src={img15} alt=""  />
          <img src={img16} alt=""  />
        
      </div>
      <div className="sidebar-end-btn">
      <img src={nbt} alt="" className="nbt-btn" />
      <img src={buy} alt=""  />
      </div>
      <div className="sidebar-utility">
      <img src={internet} alt=""  />
      <img src={toggle} alt="" className="utlity-img"  />
      </div>
    </div>
  );
};

export default Sidebar;
