import React, { useEffect, useState } from "react";
import balance from "../images/balance.svg";
import tutorial from "../images/Tutorial.svg";
import actionBtn from "../images/ACTION BUTTON.svg";
import "./styles/midsection.css";
import FreeCard from "./FreeCard";
import HeaderTable from "./HeaderTable";
import axios from "axios";

const MidSection = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(async () => {
    setLoading(true)
    const response = await axios.get(
      "https://raw.githubusercontent.com/akshita151199/APIs/main/data"
    );
    console.log(response.data.data);
    setData(response.data.data);
    setLoading(false);
  }, []);

  return (
    <div className="main-mid-section">
      <div className="mid-section-header">
        <p>Section</p>
        <img src={balance} />
      </div>
      <div className="tutorial-section">
        <img src={tutorial} alt="" />
      </div>
      <div className="reward-section">
        <div className="reward-details-section">
          <p className="rewards-details-para">Your Rewards</p>
          <p className="rewards-details-para2">$ 0.26231428</p>
          <div className="rewards-btns">
            <p>$40 AVAX</p>
            <p>$10 BNB</p>
            <p>$210 BTC</p>
          </div>
        </div>
        <img src={actionBtn} alt="" className="action-btn" />
      </div>
      <div className="free-card-section">
        <FreeCard />
        <FreeCard />
      </div>
      <div className="tabs">
        <p className="first-tab">First Tab</p>
        <p className="second-tab">Second Tab</p>
      </div>
      <div className="mid-section-table">
        <HeaderTable data={data} loading={loading}/>
      </div>
    </div>
  );
};

export default MidSection;
