import React, {useState} from 'react';
import balloon from '../images/hotAirBalloonSVG.svg'
import seaplane from '../images/seaplaneSVG.svg'
import rocket from '../images/RocketSVG.svg'


function DisplayImage(){

   const [imageArray] = useState([balloon, seaplane, rocket])
   const [image, getImage] = useState(imageArray[0])

   const handleChange = (e: any) => {
      getImage(imageArray[e.target.value])
   console.log(e.target.value)
  }

  return(
     <div>
        <select name="test" onChange = {handleChange}  >
         <img src={"../images/hotAirBalloon_logo.svg"} width="20" height="15"/>
           <option> </option>
           <option value={0}>  balloon </option>
           <option value={1}> seaplane </option>
           <option value={2}> rocket </option>
         </select>

         <img src={image}/>

     </div>
  )

}

export {DisplayImage};

//<button onClick = {handleClick} > Get random Image </button>
//let randomNumb = Math.floor(Math.random()*3)
//getImage(imageArray[randomNumb])
