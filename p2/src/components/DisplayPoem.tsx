import React, {useState, useEffect} from 'react';
import './components.css'
import {useLocalStorage} from "../hooks/useLocalStorage"

function DisplayPoem() {
  const [listState, setListState] = useState()
  const [poemIndex, selectPoemIndex] = useState(0)
  const [poem, getPoem] = useState()

  useEffect( () => {
   fetch('https://poetrydb.org/linecount/10')
     .then(res => res.json())
     .then((data) =>
         (setListState(data),
         getPoem(data[poemIndex])
        )
     )
   }, []
 )
  console.log(poem);

   const handleClick = () => {
       const randomNumb = Math.floor(Math.random()*listState.length)
       selectPoemIndex(randomNumb);
        getPoem(listState[poemIndex]);
     }

  return (
    <div>
      <button onClick = {handleClick} > new poem </button>
    { !listState ?
      ( <div> loading... </div> ) :
      (
        <div className="content">

        <p className="poem_title">  </p>
          {listState[poemIndex].lines.map((item : any, index:any) => {
           return <p key={index}> {item } </p> })}
        <p className="poem_author"> {listState[poemIndex].author} </p>

        </div>
      )}
    </div>
)

}
export {DisplayPoem} ;

/*
useEffect(() => {
  getPoem(listState[poemIndex]);
})
*/
