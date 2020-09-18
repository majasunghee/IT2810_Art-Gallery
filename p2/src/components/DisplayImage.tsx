import React from 'react';
import balloon from '../images/hotAirBalloonSVG.svg'
import seaplane from '../images/seaplaneSVG.svg'
import rocket from '../images/RocketSVG.svg'
function DisplayImage(){



  return(
     <div>
         <img src={balloon}/>
         <img src={seaplane}/>
         <img src={rocket}/>
     </div>
  )

}

export {DisplayImage};
