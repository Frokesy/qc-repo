import React from "react";
import "./index.scss";
import trackingfleximg from "../../assets/trackingfleximg.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
// import greatervec from "../../assets/greatervec.png";
import { useHistory } from "react-router-dom";

export default function TrackingPage5() {
  const history = useHistory();

  return (
    <div className="where-cont">
      <div className="where-left-flex">
        <div className="where-left-arrow">
          <img src={arrowvec} onClick={() => {
              history.goBack();
            }}/>
        </div>
        <div className="where-left-main">
          <img src={trackingfleximg} />
        </div>
      </div>
      <div className="where-right-main">
        <img className="where-right-main-img" src={cancelvec} onClick={() => {
              history.goBack();
            }}/>
        <h2>The City Hub</h2>
        <div className="city-hours-head">
          <p>
            THIS HUB IS CURRENTLY CLOSED. BUSINESS HOURS <br />
            ARE 9AM - 6PM, MON - SATURDAY.
          </p>
        </div>
        <div className="city-street-cont">
          <p>STREET </p>
          <p className="city-street-bold">
            Block L, Shop 2, 2nd Floor, Opp. Tinubu Square WaterFront{" "}
          </p>
        </div>
        <div className="city-address-display">
          <div className="city-address-list">
            <p>CITY</p>
            <p className="city-street-bold">Lagos Island</p>
          </div>
          <div className="city-address-list">
            <p>STATE</p>
            <p className="city-street-bold">Lagos </p>
          </div>
          <div className="city-address-list">
            <p>POST CODE</p>
            <p className="city-street-bold">100892772</p>
          </div>
        </div>
        <div className="city-street-number">
          <p>CONTACT NUMBER </p>
          <p className="city-street-number-bold">+234 908 779 2932</p>
        </div>
      </div>
    </div>
  );
}
