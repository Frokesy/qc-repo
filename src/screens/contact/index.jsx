import React from "react";
import map from "../../assets/map.png";
import "./index.css";
const Index = () => {
  return (
    <div>
      <div className="contact-wrap app-padding">
        <div className="contactwrapcol1">
          <img src={map} alt="" />
        </div>

        <div className="contactwrapcol2">
          <div className="contactwrapcol2-col1">
            <h2>Avant Garde</h2>
          </div>

          <div className="contactwrapcol2-col2">
            <p>
              {" "}
              14 Ademola Close
              <br />
              Lekki Phase 1<br />
              Lagos Nigeria.
            </p>
          </div>

          <div className="contactwrapcol2-col2">
            <p>
              Hours of operation – restaurant dining:
              <br />
            </p>

            <p>
              Sunday – Wednesday – 12pm – 11:30pm
              <br />
              Thursday – Saturday – 12pm – 12:30am
            </p>
          </div>

          <div className="contactwrapcol2-col2">
            <p>
              Hours of operation – delivery or collection:
              <br />
            </p>

            <p>
              Sunday – Wednesday – 12pm – 10pm
              <br />
              Thursday – Saturday – 12pm – 11pm
            </p>
          </div>

          <div className="contactwrapcol2-col4">
            <p>Avant Chart</p>
          </div>

          <div className="contactwrapcol2-col4">
            <p>Dress code:</p>
          </div>

          <div className="contactwrapcol2-col2">
            <p>
              Dress code is smart: no hoods worn up, <br />
              casual sportswear of any style or brand, <br />
              tracksuits, running shorts, running <br />
              trainers, hats or flip flops.
            </p>
          </div>

          <div className="contactwrapcol2-col2">
            <p>
              General enquiries
              <br />
              +234 (0) 70 6742 1332
              <br />
              reservation@avantgarde.com
            </p>
          </div>

          <div className="contactwrapcol2-col2">
            <p>
              PR and Marketing enquiries
              <br />
              ngpress@avantgarde.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
