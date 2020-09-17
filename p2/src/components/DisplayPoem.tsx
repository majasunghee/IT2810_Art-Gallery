import React, {useState, useEffect} from 'react';

function DisplayPoem() {
  const [listState, setListState] = useState()
  const [poemIndex, selectPoemIndex] = useState(0)

    useEffect( () => {
    fetch('https://poetrydb.org/linecount/10')
      .then(res => res.json())
      .then((data) =>
          (setListState(data),
          console.log(data))
      )
    }, []
  )


   const handleClick = () => {
       const randomNumb = Math.floor(Math.random()*listState.length)
       selectPoemIndex(randomNumb);
       console.log(randomNumb)
  }



  return (
    <div>
    { !listState ?
      ( <div> loading... </div> ) :
      (
        <div className="content">


          <button onClick = {handleClick} > Get random Poem </button>



        <p className="poem_header">  Author: {listState[poemIndex].author} </p>
        <p className="poem_header">  Title: {listState[poemIndex].title} </p>
          {listState[poemIndex].lines.map((item:any) => {
           return <p> {item } </p> })}
        </div>
      )}
    </div>
)

}
export {DisplayPoem} ;