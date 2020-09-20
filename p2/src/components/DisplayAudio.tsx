import React, {useState} from "react";
import audio1 from "../audio/Algorithms.mp3";
import audio2 from "../audio/Aspire.mp3"
import audio3 from "../audio/Slow_Vibing.mp3"
import audio4 from "../audio/The_Space_Inside.mp3"

function DisplayAudio(){
    const [audio, setAudio] = useState()

    const handleChange = (e: any) => {
       setAudio(e.target.value)
   }

return (

    <div>
        <select onChange={handleChange}>
            <option>Sounds</option>
            <option value={audio1}> 1 </option>
            <option value={audio2}> 2 </option>
            <option value={audio3}> 3 </option>
            <option value={audio4}> 4 </option>
        </select>
        <audio src={audio} autoPlay loop/>
    </div>
        )
}
export {DisplayAudio};

/*
import audio1 from "../audio/Algorithms.mp3"
import audio2 from "../audio/Aspire.mp3"
import audio3 from "../audio/Slow_Vibing.mp3"
import audio4 from "../audio/The_Space_Inside.mp3"
*/
