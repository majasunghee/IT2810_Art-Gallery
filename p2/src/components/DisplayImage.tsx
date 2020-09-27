import React, {useContext} from 'react';
import './components.css'
import {useSessionStorage} from "../hooks/useSessionStorage"
import balloon from '../images/hotAirBalloonSVG.svg'
import seaplane from '../images/seaplaneSVG.svg'
import rocket from '../images/RocketSVG.svg'
import black from '../images/black.svg'
import cascade from '../images/cascadeSVG.svg'
import desert from '../images/desertSVG.svg'
import ThemeContext from"../contexts/ThemeContext";

function DisplayImage(){

   //setting the state of a chosen image
   const [image, setImage] = useSessionStorage('image', cascade);

   //sets theme = the context which is passed down from App.tsx
   const theme = useContext(ThemeContext);

   //function which sets the state with the selected option
   const handleChange = (e: any) => {
      setImage(e.target.value)
  }

  return(
     <>
         <div className="item_imgSelect" style={theme}>
           <select className="drop_down" onChange = {handleChange}>
           <option id="void_image" value={black} > images </option>
           <option value={balloon}>  balloon </option>
           <option value={seaplane}> seaplane </option>
           <option value={rocket}> rocket </option>
           <option value={cascade}> cascade </option>
           <option value={desert}> desert </option>
         </select>
         </div>
         <div className="item_img"><img id="image_container" src={image} alt="animated landscape"/></div>
     </>
  )

}

export {DisplayImage};
