import React from "react";
import "./index.scss";
import mainhalf from "../../assets/mainhalf.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import arrowdown from "../../assets/arrowdown.png";
import arrowup from "../../assets/arrowup.png";
import { useHistory } from "react-router-dom";

export default function BookDeliverySeventh() {
  const history = useHistory();

  return (
    <div className="where-cont">
      <div className="where-left-flex">
        <div className="where-left-arrow">
          <img src={arrowvec}   onClick={() => {
              history.goBack();
            }}/>
        </div>
        <div className="where-left-main">
          <img src={mainhalf} />
        </div>
      </div>
      <div className="where-right-main">
        <div className="where-right-main-img">
          <img src={cancelvec}   onClick={() => {
              history.goBack();
            }}/>
        </div>
        <h2>
          Package and <br />
          Delivery Review
        </h2>

        <div className=" summary-pick">
          <h3 className=" summary-pick-text"> Summary</h3>
        </div>

        <div className="where-right-form-header ">
          <div className="where-right-table">
            <p>ITEM</p> <p>HP 15inches, CORE i7 - 5th GEN</p>
          </div>
          <div className="where-right-table">
            <p>TOTAL QUANTITY</p> <p>1</p>
          </div>
          <div className="where-right-table">
            <p>TOTAL VALUE</p> <p>5.0</p>
          </div>
          <div className="where-right-table">
            <p>INSURANCE FEE</p> <p>0.00</p>
          </div>
          <div className="where-right-table">
            <p>COVER </p> <p>10,000.00</p>
          </div>
          <div className=" package-address-first">
            <div className="package-address-first-img">
              <img src={arrowdown} />
            </div>
            <div className="package-address-first-address">
              <p>
                Plot 122, No 1, Banana Island, Victoria Island, <br />
                Lagos, Nigeria. 100292
              </p>
            </div>
            <div className="package-address-first-checked">
              <input type="checkbox" checked="checked" />
              <span class="checkmark"></span>
            </div>
          </div>

          <div className=" package-address-first ">
            <div className="package-address-first-img">
              <img src={arrowup} />
            </div>
            <div className="package-address-first-address">
              <p>
                Plot 122, No 1, Banana Island, Victoria Island, <br />
                Lagos, Nigeria. 100292
              </p>
            </div>
            <div className="package-address-first-checked">
              <input type="checkbox" checked="checked" />
              <span class="checkmark"></span>
            </div>
          </div>

          <div className="where-agreement pick-agreement">
            <p>
              By continuing, I represent that the declaration above is a proper
              <br /> and accurate description of the contents of my package.
            </p>
          </div>
          <div>
            <button className="where-address-button pick-submit-button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
