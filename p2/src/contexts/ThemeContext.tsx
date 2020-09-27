import React, {createContext, useState} from 'react';


var bodyColor = document.body.style.backgroundColor;

//Made two different themes which uses a different color scheme
export const themes = {

    darkMode: {
        color: "white",
        backgroundColor: "black",
        borderColor: "white"

    },
    lightMode: {
        color: "black",
        backgroundColor: "#DFE0E2",
        borderColor: "black"

    }
};

//Creates context and sets darkMode as default theme
const ThemeContext = React.createContext(themes.darkMode);


export default ThemeContext;

