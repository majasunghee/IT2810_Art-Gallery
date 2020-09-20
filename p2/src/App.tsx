import React from 'react';
import './App.css';
import {DisplayPoem} from "./components/DisplayPoem";
import {DisplayImage} from "./components/DisplayImage";
import {DisplayAudio} from "./components/DisplayAudio";

function App() {
  return (
    <div >
      <DisplayPoem/>
      <DisplayImage/>
      <DisplayAudio/>
    </div>
  );
}

export default App;
