import React, {useState, useEffect} from 'react';

function DisplayPoem() {
  const [state, setState] = useState()
  const [select, selectState] = useState(0)

    useEffect( () => {
    fetch('https://poetrydb.org/linecount/10')
      .then(res => res.json())
      .then((data) =>
          (setState(data),
          console.log(data))
      )
    }, []
  )


   const handleClick = () => {
       const randomNumb = Math.floor(Math.random()*state.length)
       selectState(randomNumb);
       console.log(randomNumb)
  }



  return (
    <div>
    { !state ?
      ( <div> loading... </div> ) :
      (
        <div className="content">


          <button onClick = {handleClick} > Get random Poem </button>



        <p className="poem_header">  Author: {state[select].author} </p>
        <p className="poem_header">  Title: {state[select].title} </p>
          {state[select].lines.map((item:any) => {
           return <p> {item } </p> })}
        </div>
      )}
    </div>
)
}
export {DisplayPoem} ;