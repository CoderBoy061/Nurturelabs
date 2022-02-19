import React from "react";
import "./styles/rightsection.css";
import elipse from "../images/Ellipse 131.svg";
import downarrow from "../images/Vector (2).svg";
import wallet from "../images/Wallet.svg";
import path from "../images/Path.svg";
import actionBtn from "../images/ACTION BUTTON.svg";
import cancel from "../images/icon.svg";

const RightSection = () => {
  return (
    <div className="main-right-section-div">
      <div className="right-section-heading-btns">
        <div className="btn-one">
          <img src={elipse} alt="elipse" className="elipse-img" />
          <p> Avalanche</p>
          <img src={downarrow} alt="" />
        </div>
        <div className="btn-two">
          <img src={wallet} alt="elipse" className="wallet-img" />
          <p> 0xf6...1353</p>
          <img src={downarrow} alt="" />
        </div>
      </div>
      <div className="cutom-link-right-section">
        <img src={path} alt="" />
        <p>Custom Link</p>
      </div>
      <p className="right-section-link">https://testnet.xyz.xyz/trade?ref=</p>
      <input type="text" className="right-section-input" placeholder="ENTER" />
      <div className="reght-section-end-btns">
        <img src={actionBtn} alt="" className="right-section-action-btn" />
        <div className="right-section-cancel">
          <img src={cancel} alt="" />
          <p>Cancel</p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
