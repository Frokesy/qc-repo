import React from "react";
import "./index.scss";
import mainhalf from "../../assets/mainhalf.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import { useHistory } from "react-router-dom";

export default function BookDeliveryFifth() {
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
        Shipment Description
        </h2>
        <div className="package-weight-select-flex">
          <div className="package-weight-selected">
            <h3>Below 20kg</h3>
            <p>standard rates</p>
          </div>
          <div className="package-weight-non-selected">
            <h3>Above 20kg</h3>
            <p>cargo rates</p>
          </div>
        </div>

        <div className="where-right-form-header">
          <form>
            <div className="where-package-weight">
              <label>WEIGHT (KG)</label> <br />
              <input
                className="where-address-input"
                type="text"
                placeholder="2.0"
              />
            </div>
            <div className="where-package-input-flex">
              <div>
                <label>LENGTH (CM)</label> <br />
                <input
                  className="where-package-input-option"
                  type="text"
                  placeholder="2.0"
                />
              </div>

              <div>
                <input className="where-package-input-option2" type="text" />
              </div>
              <div>
                <input className="where-package-input-option2" type="text" />
              </div>
            </div>
            <div className="where-agreement">
              <p>
                By continuing, I represent that the declaration above is a
                proper
                <br /> and accurate description of the contents of my package.
              </p>
            </div>
            <div>
              <button className="where-address-button">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
