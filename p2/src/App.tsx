import React from 'react';
import './App.css';
import {DisplayPoem} from "./components/DisplayPoem";
import {DisplayImage} from "./components/DisplayImage";

function App() {
  return (
    <div >
      <DisplayPoem/>
      <DisplayImage/>
    </div>
  );
}

export default App;
