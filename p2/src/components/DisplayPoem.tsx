import React, {useState, useEffect, useContext} from 'react';
import './components.css'
import {useSessionStorage} from "../hooks/useSessionStorage"
import {useLocalStorage} from "../hooks/useLocalStorage"
import ThemeContext from "../contexts/ThemeContext";

function DisplayPoem() {

  const theme = useContext(ThemeContext);

  const [listState, setListState] = useState()
  const [poem, getPoem] = useSessionStorage("poem", null)
  const [favorite, setFavorite] = useLocalStorage("favorite", "false");
  const [favClicked, isClicked] = useState(false)

  useEffect( () => {
    fetch('https://poetrydb.org/linecount/10')
     .then(res => res.json())
     .then((data: any) =>{
        setListState(data);
     })
   }, [listState]
   )

   const saveFavorite = () => {
       setFavorite(sessionStorage.getItem("poem"));
       isClicked(true);
       console.log("fave poem has been saved");
       console.log(favClicked);
     }

  function getLocalImage() {
    if(localStorage.getItem("favorite")!==null){
    let obj = localStorage.getItem("favorite");
     const parsedObj = JSON.parse(obj!);
    return parsedObj;
    }
   }

    const showFavorite = () => {
      let obj = JSON.parse(getLocalImage());
      isClicked(false);
      getPoem(obj);
      console.log(favClicked);
      console.log("is my favorite");
     }

   const handleClick = () => {
       try {const randomNumb = Math.floor(Math.random()*listState.length)
       getPoem(listState[randomNumb]);
     }catch(err) {
     console.error(err);
     }
     }

     const favoriteBtn = () => {
      favClicked==false  ? saveFavorite()  : showFavorite();
     }

  return (
    <div>
      <button onClick={favoriteBtn}> { favClicked==false ? "save favorite"  : "show favorite"} </button>
      <button onClick = {handleClick} > generate poem </button>
    { !poem ?
      ( <div> loading... </div> ) :
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
