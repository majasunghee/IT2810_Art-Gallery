import React, {useContext} from "react";
import './components.css'
import {useSessionStorage} from "../hooks/useSessionStorage"
import audio1 from "../audio/Algorithms.mp3";
import audio2 from "../audio/Aspire.mp3"
import audio3 from "../audio/Slow_Vibing.mp3"
import audio4 from "../audio/The_Space_Inside.mp3"
import audio5 from "../audio/Videogame_Theme.mp3"
import audio6 from "../audio/Waterfall_And_Bird.mp3"
import ThemeContext from"../contexts/ThemeContext";

function DisplayAudio(){

    //sets theme = the context passed down from App.tsx
    const theme = useContext(ThemeContext);

    //manage states with useState that useSessionStorage uses
    const [audio, setAudio] = useSessionStorage("audio", null);

    //changes the state to the selected option
    const handleChange = (e: any) => {
       setAudio(e.target.value)
   }

return (
    <>
        <div className="item_audioSelect" style={theme}>
            <select className="drop_down" onChange={handleChange}>
            <option >sounds</option>
            <option value={audio1}> space </option>
            <option value={audio2}> reminisce </option>
            <option value={audio3}> lofi </option>
            <option value={audio4}> lightsaber </option>
            <option value={audio5}> videogame </option>
            <option value={audio6}> waterfall </option>
        </select>
        </div>
        <div className="item_audio"><audio src={audio} controls autoPlay loop/></div>
    </>
        )
}
export {DisplayAudio};
