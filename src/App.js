import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  //const [counter, setCounter]  = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1 )
  };
  const onClickMinus = () => {
    setCount(count - 1)
  }
  return (
    <div className="counter">
        <h3 className='coun-name'>Counter</h3>
        <h1 className='coun'>{count}</h1>
        <button className='up' onClick={onClickPlus}>Up</button>
        <button className='down' onClick={onClickMinus}>Down</button>
    </div>
  );
}

export default App;
