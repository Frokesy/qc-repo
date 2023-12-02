import React from "react";
import "./index.scss";
import mapframe from "../../assets/mapframe.jpg";

export default function TrackingPage2() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${mapframe})  no-repeat center/cover`,
        }}
      ></div>
    </>
  );
}
