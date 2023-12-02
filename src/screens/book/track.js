import React from "react";
import track from "../../assets/Track delivery.png"
import { useHistory } from "react-router-dom";
import mapframe from "../../assets/mapframe.png";
import group from "../../assets/group.png";
import copy from "../../assets/copy.png";
import sshot from "../../assets/sshot.png";
import arrowvec from "../../assets/arrowvec.png";

import './step.css'
export default function Track() {
    const history = useHistory();

  return (
    <div>
        <div className="where-left-arrow">
          <img src={arrowvec} onClick={() => {
              history.goBack();
            }}/>
        </div>
    <img src={mapframe} style={{width:"100%",position:"absolute"}}></img>
    <div style={{background:"#fff",position:"absolute",margin:"5% 0 0 5%",width:"40%",
  height:"100%"}}>
    <div style={{width:"80%",margin:"auto",marginTop:"10%"}}>
    <p style={{fontSize:"18px"}}>Tracking Number</p>
    <p><img src={group}/><b style={{fontSize:"18px"}}>#053456788</b><img src={copy}/></p>
    <p style={{fontSize:"18px"}}>Package Status</p>
    <div class="step step-active">
   <div>
      <div class="circle"><i class="fa fa-check"></i></div>
   </div>
   <div>
      <div class="title">Courier Requested</div>
      <div class="caption">April 15th 2022</div>
   </div>
</div>
<div class="step step">
   <div>
      <div class="circle">2</div>
   </div>
   <div>
      <div class="title">Package Picked-up</div>
      <div class="caption"></div>
   </div>
</div>
<div class="step">
   <div>
      <div class="circle">3</div>
   </div>
   <div>
      <div class="title">In Transit</div>
      <div class="caption"> </div>
   </div>
</div>
<div class="step">
   <div>
      <div class="circle">4</div>
   </div>
   <div>
      <div class="title">Finish</div>
   </div>
</div>
<button
                className="where-address-button" style={{top:"20%"}}
                style={{ backgroundColor:"#000"  }}
              >View Package Info</button>
    </div>
    </div>
  </div>)
}
