import React, { useState } from 'react';
import "./App.css"

const App = () => {

  const [counter,setCounter] =useState(0);
const handelIncrement =()=>{

setCounter(counter+1)

}


const handleDecrement = ()=>{
  setCounter(counter-1)
}


 const handleReset = ()=>{
  setCounter(0)
 }
  return (
    <div className='container'>
      <div className='conter'>

     <div className='head'>
      <h1>{counter===0?"No More Counts":""}</h1>
      <h1>{counter}</h1>
     </div>
        

     <div className='btns'>
      <button onClick={handelIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
     </div>
        

      </div>
    </div>
  )
}

export default App