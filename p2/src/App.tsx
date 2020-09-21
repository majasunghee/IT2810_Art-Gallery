import React from 'react';
import './App.css';
import {DisplayPoem} from "./components/DisplayPoem";
import {DisplayImage} from "./components/DisplayImage";
import {DisplayAudio} from "./components/DisplayAudio";
import {SaveFavorite} from "./components/SaveFavorite";

function App() {
  return (
    <div id="utstilling" >
      <h1> Interaktiv Utstilling - gruppe 40</h1>
      <DisplayAudio/>
      <DisplayImage/>
      <DisplayPoem/>
    </div>
  );
}

export default App;
