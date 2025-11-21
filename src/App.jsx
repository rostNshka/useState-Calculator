import { useState } from "react"
import './App.scss'

const App = () => {
  const [input, setInput] = useState('0')

  function result(item) {
    if(item === 'C'){
      setInput('0')
      return
    } else if(item === '='){
      const currentInput = eval(input.replaceAll(',','.'))
      setInput(currentInput)
      return
    } else {
      const lastInput = input.toString().slice(-1)

      if(
        (lastInput === '-' || lastInput === '*' || lastInput === '/' || lastInput === '+' || lastInput === ',')
        && (item === '-' || item ===  '*' || item ===  '/' || item ===  '+' || item ===  ',')
      )
      {
        setInput(input)
        return
      } else {
        setInput((prev) => prev !== '0' ? prev + item : item)
      }
    }
  }

  return (
    <>
      <div className="calculator">
        <h1 className="calculator__title">useState Calculator</h1>
        <div className="calculator__body">
          <div className="calculator__input">{input}</div>
          <button className="calculator__item" onClick={()=>{result('1')}}>1</button>
          <button className="calculator__item" onClick={()=>{result('2')}}>2</button>
          <button className="calculator__item" onClick={()=>{result('3')}}>3</button>
          <button className="calculator__item" onClick={()=>{result('+')}}>+</button>
          <button className="calculator__item" onClick={()=>{result('4')}}>4</button>
          <button className="calculator__item" onClick={()=>{result('5')}}>5</button>
          <button className="calculator__item" onClick={()=>{result('6')}}>6</button>
          <button className="calculator__item" onClick={()=>{result('-')}}>-</button>
          <button className="calculator__item" onClick={()=>{result('7')}}>7</button>
          <button className="calculator__item" onClick={()=>{result('8')}}>8</button>
          <button className="calculator__item" onClick={()=>{result('9')}}>9</button>
          <button className="calculator__item" onClick={()=>{result('*')}}>*</button>
          <button className="calculator__item" onClick={()=>{result('0')}}>0</button>
          <button className="calculator__item" onClick={()=>{result(',')}}>,</button>
          <button className="calculator__item" onClick={()=>{result('=')}}>=</button>
          <button className="calculator__item" onClick={()=>{result('/')}}>/</button>
          <button className="calculator__item" onClick={()=>{result('C')}}>C</button>
        </div>
      </div>
    </>
  )
}

export default App
