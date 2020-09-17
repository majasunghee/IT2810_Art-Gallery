import React from 'react';
//import img from './images/hotAirBalloonSVG.svg'

function DisplayImage(){
  return<img src={process.env.PUBLIC_URL + '/images/hotAirBalloonSVG.svg'}  alt="svg" />

}

export {DisplayImage};
