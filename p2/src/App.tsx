import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {DisplayPoem} from "./components/DisplayPoem";
import {DisplayImage} from "./components/DisplayImage";
import {DisplayAudio} from "./components/DisplayAudio";
import {SaveFavorite} from "./components/SaveFavorite";
import ThemeContext, {themes} from"./contexts/ThemeContext";

function App() {

    const [theme, setTheme] = useState(themes.darkMode);


    const toggleTheme = () =>
        theme ===themes.darkMode ?
            (setTheme(themes.lightMode), document.body.style.backgroundColor = 'white')
            :(setTheme(themes.darkMode), document.body.style.backgroundColor = 'black');

  return (
    <div id="utstilling" >
    <ThemeContext.Provider value={theme}>
      <Header/>
      <button onClick={toggleTheme}>Darkmode/Lightmode</button>
      <DisplayAudio/>
      <DisplayImage/>
      <DisplayPoem/>
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
