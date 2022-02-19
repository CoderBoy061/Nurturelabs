import React from "react";
import "./styles/freecard.css";
import freeimg from "../images/freeimg.svg";
import designur from "../images/designurl.svg";
const FreeCard = () => {
  return (
    <div className="freecard-main-section">
      <div className="freecard-heading">
        <img src={freeimg} alt="" />
        <p>12.5% of fee</p>
      </div>
      <p className="freecard-referell">
      Your Referral Link for xyz
      </p>
      <div className="freecard-links-section">
          <p>https://unityexchange.design </p>
          <img src={designur} alt=""/>
      </div>
    </div>
  );
};

export default FreeCard;
