import React, {Component} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {addValue, deleteValue} from './reducer'
import "./index.css"

const App = () => {
  const dispatch = useDispatch();
  let valueInput = "";
  let deletevalue = 0;

  const phrases = useSelector(state => state.list);

  return (
      <div>
        <div className="first">
          <input placeholder={"Введите текст"} onChange={(e) => {
            valueInput = e.target.value;

          }}/>
          <button onClick={() => {
            dispatch(addValue(valueInput));

          }}>add</button>
        </div>
        <div className="second">
          <select onChange={event => {deletevalue = +event.target.value}}>
            {phrases.list.map((value1, id) => {
              return <option value={id} key={id}>{value1}</option>
            })}
          </select>
          <button onClick={() => {
            dispatch(deleteValue(deletevalue));
          }}>delete</button>
        </div>
      </div>
  );

}

export default App;