import React, {createContext, useState} from 'react';


var bodyColor = document.body.style.backgroundColor;


export const themes = {

    darkMode: {
        color: "white",
        backgroundColor: "black",
        borderColor: "white"

    },
    lightMode: {
        color: "black",
        backgroundColor: "white",
        borderColor: "black"

    }
};
const ThemeContext = React.createContext(themes.darkMode);


export default ThemeContext;

