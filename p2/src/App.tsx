import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {DisplayPoem} from "./components/DisplayPoem";
import {DisplayImage} from "./components/DisplayImage";
import {DisplayAudio} from "./components/DisplayAudio";
import ThemeContext, {themes} from"./contexts/ThemeContext";

function App() {

  //Using useState to set the state of the current theme. Default theme is darkMode
    const [theme, setTheme] = useState(themes.darkMode);

  //function which changes the theme from darkmode to lightmode and vice versa in all components with the implementation of context api
    const toggleTheme = () =>
        theme ===themes.darkMode ?
            (setTheme(themes.lightMode), document.body.style.backgroundColor = '#DFE0E2')
            :(setTheme(themes.darkMode), document.body.style.backgroundColor = 'black');


  return (
    <div className="wrapper" >
    <ThemeContext.Provider value={theme}>
      <div className="item_header"><Header/></div>
      <div className="item_themeButton"><button onClick={toggleTheme}>dark/light</button></div>
      <DisplayAudio/>
      <DisplayImage/>
      <div className="item_poem"><DisplayPoem/></div>
    </ThemeContext.Provider>
    </div>
  );
}

export default App;
