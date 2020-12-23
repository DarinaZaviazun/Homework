import React, {useState, useEffect, useReducer} from 'react';
import "./App.css"

const reducer = (state, action) => {
   switch(action.type){
     case 'SET_TODO_ITEM': {
         return action.payload
   }
     case 'TOGGLE_TODO_COMPLETED': {
       return {
         ...state,
         completed: !state.completed,
       }
     }
     case 'CHANGE_TODO_TITLE':{
       console.log(state)
       return {
         ...state,

         title: action.payload,
       }
     }
   default: {
     console.error("not valid action", action.type)
     return state;
   }
  }
}

const initialState = null;



export default () => {
  const [counter, setCounter] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, inputChange] = useState()
  const fetchData = async () => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${counter}`)
    const json = await response.json();
    dispatch({type: 'SET_TODO_ITEM', payload: json});
  }

  const handleInc = () => {
    setCounter((prevate) => prevate + 1)
  }

  useEffect(() => {
    if (counter % 2)
        fetchData();
  }, [counter])

  const handleReset = () => {
    setCounter(1)
  }

 const handleTitleChange = () => {
  dispatch({type: 'CHANGE_TODO_TITLE', payload: inputValue})
 }

  const handleToDoCompleted = () => {
    dispatch({type: 'TOGGLE_TODO_COMPLETED'})
  }

  return (
      <div className={"App"}>
        <h1>Counter: {counter}</h1>
        <button onClick={handleInc}>increment</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleToDoCompleted}>toggle</button>
        <input value={inputValue} onChange={({target: {value}}) => inputChange(value)}/>
        <button onClick={handleTitleChange}>title change</button>

            { !!state &&
            <h2>
              {state.id} -- {state.title} -- {state.completed.toString()}
            </h2>
        }
      </div>
  )
}