import React from 'react';
import './components.css'
import {useLocalStorage} from "../hooks/useLocalStorage"
import balloon from '../images/hotAirBalloonSVG.svg'
import seaplane from '../images/seaplaneSVG.svg'
import rocket from '../images/RocketSVG.svg'
import black from '../images/black.svg'

function DisplayImage(){

   const [image, setImage] = useLocalStorage('image', seaplane);

   const handleChange = (e: any) => {
      setImage(e.target.value)
  }

  return(
     <>
        <select className="drop_down" onChange = {handleChange}>
           <option id="void_image" value={black} > images </option>
           <option value={balloon}>  balloon </option>
           <option value={seaplane}> seaplane </option>
           <option value={rocket}> rocket </option>
         </select>

         <img id="image_container" src={image} alt="animated landscape"/>
     </>
  )

}

export {DisplayImage};

//<button onClick = {handleClick} > Get random Image </button>
//let randomNumb = Math.floor(Math.random()*3)
//getImage(imageArray[randomNumb])
