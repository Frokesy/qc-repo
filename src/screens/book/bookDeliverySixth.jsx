import React from "react";
import "./index.scss";
import mainhalf from "../../assets/mainhalf.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import { useHistory } from "react-router-dom";

export default function BookDeliverySixth() {
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
          How will we receive
          <br />
          your package ?
        </h2>
        <div className="package-weight-select-flex">
          <div className="package-weight-non-selected">
            <h3>Pickup</h3>
            <p>select pickup date</p>
          </div>
          <div className="package-weight-selected">
            <h3>Drop Off</h3>
            <p>send to a hub</p>
          </div>
        </div>

        <div>
          <form>
            <div className="where-agreement-package1">
              <p>
                A pickup request will not be assigned for this delivery. To hand
                over <br /> this package, drop it off at the nearest hub after
                the booking is <br />
                completed.
              </p>
            </div>
            <div className="where-agreement-package2">
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
