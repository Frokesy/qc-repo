import { Widgets } from '@mui/icons-material';
import React,{useState} from 'react';
import team from "../../assets/t1.png";
import team1 from "../../assets/t2.png";
import team2 from "../../assets/t3.png";
import team3 from "../../assets/t4.png";
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);
   

const Slideshow =()=> (
  <AutoplaySlider animation="foldOutAnimation" cssModule={[CoreStyles, AnimationStyles]} bullets={false} organicArrows={false} play={true} interval={6000}
  >
    <div data-src={team1}/>
    <div data-src={team}/>
    <div data-src={team2}/>   
    <div data-src={team3}/>

  </AutoplaySlider>
);

export default Slideshow