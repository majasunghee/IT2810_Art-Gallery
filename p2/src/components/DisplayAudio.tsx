import React from "react";
import './components.css'
import {useLocalStorage} from "../hooks/useLocalStorage"
import audio1 from "../audio/Algorithms.mp3";
import audio2 from "../audio/Aspire.mp3"
import audio3 from "../audio/Slow_Vibing.mp3"
import audio4 from "../audio/The_Space_Inside.mp3"

function DisplayAudio(){
    const [audio, setAudio] = useLocalStorage("audio", null);
    console.log(audio)

    const handleChange = (e: any) => {
       setAudio(e.target.value)
   }

return (

    <div>
        <select className="drop_down" onChange={handleChange}>
            <option >sounds</option>
            <option value={audio1}> 1 </option>
            <option value={audio2}> 2 </option>
            <option value={audio3}> 3 </option>
            <option value={audio4}> 4 </option>
        </select>
        <audio src={audio} controls autoPlay loop/>
    </div>
        )
}
export {DisplayAudio};
