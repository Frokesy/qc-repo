import React from "react";

import "./index.scss";

const TrackingPageSlot = ({ image, state, country }) => {
  return (
    <>
      <div className="where-right-address package-location-cont">
        <div className="package-location">
          <h2>{state}</h2>
          <p>{country}</p>
        </div>
        <div className="where-right-address-checked">
          <img src={image} />
        </div>
      </div>
    </>
  );
};

export default TrackingPageSlot;
