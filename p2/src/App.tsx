import React from 'react';
import './App.css';
import {DisplayPoem} from "./components/DisplayPoem";
import {DisplayImage} from "./components/DisplayImage";
import {DisplayAudio} from "./components/DisplayAudio";
import {ThemeContextProvider} from "./contexts/ThemeContext";

function App() {
  return (
    <div >
      <ThemeContextProvider>
          <DisplayPoem/>
          <DisplayImage/>
          <DisplayAudio/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
