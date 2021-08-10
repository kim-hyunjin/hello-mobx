import React from 'react';
import { observer } from 'mobx-react';
import store from '../store';

const Counter = () => {
    const {counterClass, counterObject} = store
    return (
      <>
      <div>
        <h1>Counter Class</h1>
        <div>number: {counterClass.number}</div>
        <button onClick={() => counterClass.increase()}>plus</button>
        <button onClick={() => counterClass.decrease()}>minus</button>
      </div>
      <div>
        <h1>Counter Object</h1>
        <div>number: {counterObject.num}</div>
        <button onClick={() => counterObject.increase()}>plus</button>
        <button onClick={() => counterObject.decrease()}>minus</button>
      </div>
      <div>
        <h1>Computed</h1>
        <div>double number: {counterObject.doubled}</div>
        <button onClick={() => counterObject.increase()}>plus</button>
        <button onClick={() => counterObject.decrease()}>minus</button>
      </div>
      </>
    );
  }
  
  export default observer(Counter);