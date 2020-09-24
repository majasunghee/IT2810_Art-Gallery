import React, {useContext} from "react";
import './components.css'
import {useSessionStorage} from "../hooks/useSessionStorage"
import audio1 from "../audio/Algorithms.mp3";
import audio2 from "../audio/Aspire.mp3"
import audio3 from "../audio/Slow_Vibing.mp3"
import audio4 from "../audio/The_Space_Inside.mp3"
import ThemeContext from"../contexts/ThemeContext";

function DisplayAudio(){
    const theme = useContext(ThemeContext);

    const [audio, setAudio] = useLocalStorage("audio", null);
    console.log(audio)

    const handleChange = (e: any) => {
       setAudio(e.target.value)
   }

return (

    <>
        <div className="item_audioSelect" style={theme}>
            <select className="drop_down" onChange={handleChange}>
            <option >sounds</option>
            <option value={audio1}> 1 </option>
            <option value={audio2}> 2 </option>
            <option value={audio3}> 3 </option>
            <option value={audio4}> 4 </option>
        </select>
        </div>
        <div className="item_audio"><audio src={audio} controls autoPlay loop/></div>
    </>
        )
}
export {DisplayAudio};
