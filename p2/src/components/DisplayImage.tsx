import React, {useState, useContext} from 'react';
import balloon from '../images/hotAirBalloonSVG.svg'
import seaplane from '../images/seaplaneSVG.svg'
import rocket from '../images/RocketSVG.svg'
import {ThemeContext} from "../contexts/ThemeContext";


function DisplayImage(){
   //const [image, getImage] = useState(seaplane);
   const [image, getImage] = useContext(ThemeContext);


   const handleChange = (e: any) => {
      getImage(e.target.value)
  }


  return(
     <div>
         <ThemeContext.Consumer>
             {state => setState(state: state)
             }
         </ThemeContext.Consumer>

         <select onChange = {handleChange}  >
           <option> </option>
           <option value={balloon}>  balloon </option>
           <option value={seaplane}> seaplane </option>
           <option value={rocket}> rocket </option>
         </select>

        <img src={image}/>
     </div>
  )

}

export {DisplayImage};
