import React, {useContext} from 'react';
import './components.css'
import {useLocalStorage} from "../hooks/useLocalStorage"
import balloon from '../images/hotAirBalloonSVG.svg'
import seaplane from '../images/seaplaneSVG.svg'
import rocket from '../images/RocketSVG.svg'
import black from '../images/black.svg'
import ThemeContext from"../contexts/ThemeContext";

function DisplayImage(){

   const [image, setImage] = useLocalStorage('image', seaplane);

   const theme = useContext(ThemeContext);

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
         </select>
         </div>
         <div className="item_img"><img id="image_container" src={image} alt="animated landscape"/></div>
     </>
  )

}

export {DisplayImage};

//<button onClick = {handleClick} > Get random Image </button>
//let randomNumb = Math.floor(Math.random()*3)
//getImage(imageArray[randomNumb])
