import React from "react";
import "./index.scss";
import mainhalf from "../../assets/mainhalf.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import { useHistory } from "react-router-dom";

export default function BookDeliveryThird() {
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
          <img src={mainhalf} />
        </div>
      </div>
      <div className="where-right-main">
        <img className="where-right-main-img" src={cancelvec} onClick={() => {
              history.goBack();
            }}/>
        <h2>
          What are you <br />
          shipping?
        </h2>
        <p className="where-right-sub">What are you trying to send ?</p>
        <div className="where-right-address where-pick-address">
          <div className="address-pick">
            <h3> We are coming to pick</h3>
            <p>tap or click to add item</p>
          </div>
          <div className="edit-address-button">Edit</div>
        </div>
        <div className="add-item-button">Add Item</div>
        <div className="where-right-form-header">
          <h3>Summary</h3>

          <div className="where-right-table">
            <p>Total Quantity</p> <p>1</p>
          </div>
          <div className="where-right-table">
            <p>Total Value</p> <p>5.0</p>
          </div>
          <div className="where-right-table">
            <p>Insurance Fee</p> <p>0.00</p>
          </div>
          <div className="where-right-table">
            <p>Cover </p> <p>10,000.00</p>
          </div>

          <div className="where-agreement">
            <p>
              By continuing, I represent that the declaration above is a proper
              <br /> and accurate description of the contents of my package.
            </p>
          </div>
          <div>
            <button className="where-address-button">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
