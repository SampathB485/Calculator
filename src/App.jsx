import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [expression, setexpression] = useState('')
  
  function ExpressionChange(){
    setexpression(expression);
  }

  function CalculateFunction(number){
    setexpression(expression+number);
  }

  function ClearFunction(){
    setexpression('');
  }
  function Evaluate(){
    let answer = eval(expression);
    setexpression(answer)
  }

  return (
    <>
      <input type="text" value={expression} onChange={ExpressionChange}/>
      <div id='keys'>
        <button id='numbers' onClick={()=>{CalculateFunction("7")}}>7</button>
        <button id='numbers' onClick={()=>{CalculateFunction("8")}}>8</button>
        <button id='numbers' onClick={()=>{CalculateFunction("9")}}>9</button>
        <button id='numbers' onClick={()=>{CalculateFunction("*")}}>*</button>
      </div>
      <div id='keys'>
        <button id='numbers' onClick={()=>{CalculateFunction("4")}}>4</button>
        <button id='numbers' onClick={()=>{CalculateFunction("5")}}>5</button>
        <button id='numbers' onClick={()=>{CalculateFunction("6")}}>6</button>
        <button id='numbers' onClick={()=>{CalculateFunction("/")}}>/</button>
      </div>
      <div id='keys'>
        <button id='numbers' onClick={()=>{CalculateFunction("1")}}>1</button>
        <button id='numbers' onClick={()=>{CalculateFunction("2")}}>2</button>
        <button id='numbers' onClick={()=>{CalculateFunction("3")}}>3</button>
        <button id='numbers' onClick={()=>{CalculateFunction("-")}}>-</button>
      </div>
      <div id='keys'>
        <button id='numbers' onClick={()=>{ClearFunction()}}>C</button>
        <button id='numbers' onClick={()=>{CalculateFunction("0")}}>0</button>
        <button id='numbers' onClick={()=>{CalculateFunction(".")}}>.</button>
        <button id='numbers' onClick={()=>{CalculateFunction("+")}}>+</button>
      </div>
      <button  onClick={()=>{Evaluate()}} >=</button>
    </>
  )
}

export default App
