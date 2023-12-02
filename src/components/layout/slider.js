import React from "react";
import Marquee from "react-fast-marquee";

const Marquees = () => (
    <div className="alert alert-primary alert-dismissible " role="alert">

  <Marquee gradient={false} style={{width:"90%",margin:"auto"}}>
  <div>QC Express is now live. Please download our App on Google store or the IOS App store</div>

 
  </Marquee>
  <div> <button type="submit" class="btn btn-primary" data-dismiss="alert"  style={{background:"rgba(2, 5, 161, 0.91)",float:"right",margin:"-25px"}}>x</button></div>

  </div>

);

export default Marquees;