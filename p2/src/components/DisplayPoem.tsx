import React, {useState, useEffect} from 'react';
import './components.css'
import {useLocalStorage} from "../hooks/useLocalStorage"

function DisplayPoem() {
  const [listState, setListState] = useLocalStorage("poem2", null)
  const [poemIndex, selectPoemIndex] = useState(0)
  const [poem, getPoem] = useLocalStorage("poem", null)

  useEffect( () => {
   fetch('https://poetrydb.org/linecount/10')
     .then(res => res.json())
     .then((data) =>{
         setListState(JSON.stringify(data));
         getPoem(JSON.stringify(data[poemIndex]));
         console.log(data[poemIndex]);

     })
   }, []
 )


   const handleClick = () => {
      const parsli = JSON.parse(listState)
       const randomNumb = Math.floor(Math.random()*20)
       selectPoemIndex(randomNumb);
        getPoem(listState[poemIndex]);
     }


     const parsPoem = JSON.parse(poem);

  return (
    <div>
      <button onClick = {handleClick} > new poem </button>
    { !poem ?
      ( <div> loading... </div> ) :
      (
        <div className="content">

        <p className="poem_title">  </p>
          {parsPoem.lines.map((item : any, index:any) => {
           return <p key={index}> {item } </p> })}
        <p className="poem_author"> {parsPoem.author} </p>

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
