import React, {useContext} from 'react';
import './components.css'
import ThemeContext from "../contexts/ThemeContext";

function Header() {
    const theme = useContext(ThemeContext);

    return (
        <div>
            <h1 style={theme}> Interaktiv Utstilling</h1>
        </div>
    )

}


export {Header}