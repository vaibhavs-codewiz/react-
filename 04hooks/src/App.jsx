import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
 // let counter = 15
 let [counter , setCounter] = useState(0);
  let addCounter = () => {
    if(counter < 20){
      counter++;//counter increment but not propagate to ui.
    setCounter(counter);}
    //console.log(counter);
  }
  let removeCounter = () => {
    if(counter > 0){
      counter--;
    setCounter(counter);}
    //console.log(counter);
  }

  return (
    <>
     <h1>hello react {counter}</h1>
     <button onClick={addCounter}>add counter {counter}</button>
     <button onClick={removeCounter}>remove counter {counter}</button>
    </>
  )
}

export default App
