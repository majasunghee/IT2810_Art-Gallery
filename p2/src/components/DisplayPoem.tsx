import React, {useState, useEffect, useContext} from 'react';
import './components.css'
import {useSessionStorage} from "../hooks/useSessionStorage"
import {useLocalStorage} from "../hooks/useLocalStorage"
import ThemeContext from "../contexts/ThemeContext";

function DisplayPoem() {

  //sets theme = the context which is passed down from App.tsx
  const theme = useContext(ThemeContext);

  const [listState, setListState] = useState()
  const [poem, getPoem] = useSessionStorage("poem", null)
  const [favorite, setFavorite] = useLocalStorage("favorite", "false")
  const [favClicked, isClicked] = useLocalStorage("favPoem", false)

   //Function which fetches data from PoetryDB's api and stores the data in ListState
  useEffect( () => {
    fetch('https://poetrydb.org/linecount/10')
     .then(res => res.json())
     .then((data: any) =>{
        setListState(data);
        return data;
     })
   }, []
   )

   //gets the current state of poem from session storage to update the state
    // with setFavorite, which saves it to local storage
   const saveFavorite = () => {
       setFavorite(sessionStorage.getItem("poem"));
       isClicked(true);
     }

   //returns the items stored in local storage if local storage is not empty
  function getLocalPoem() {
    if(localStorage.getItem("favorite")!==null){
    let obj = localStorage.getItem("favorite");
     const parsedObj = JSON.parse(obj!);
    return parsedObj;
    }
   }

   // parses the object returned from getLocalPoem() and updates the state of poem
    const showFavorite = () => {
      let obj = JSON.parse(getLocalPoem());
      isClicked(false);
      getPoem(obj);
     }

     //when the button is clicked it updates the poem state with a random poem
   const handleClick = () => {
       try {const randomNumb = Math.floor(Math.random()*listState.length)
       getPoem(listState[randomNumb]);
     }catch(err) {
     console.error(err);
     }
     }

     //toggles between saving and showing a saved poem
     const favoriteBtn = () => {
      favClicked===false  ? saveFavorite()  : showFavorite();
     }

  return (
    <div style={theme}>
      <button className="favButton" onClick={favoriteBtn}> { favClicked===false ? "save poem"  : "show poem"} </button>
    { !poem ?
      ( <div> </div> ) :
      (
        <div className="content">
        <p className="poem_title"> {poem.title} </p>
          {poem.lines.map((item : any, index:any) => {
           return <p key={index}> {item } </p> })}
        <p className="poem_author"> {poem.author} </p>

        </div>
      )}
      <button onClick = {handleClick} > generate poem </button>
    </div>
)
}
export {DisplayPoem} ;
