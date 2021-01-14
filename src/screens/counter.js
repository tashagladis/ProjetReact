import React, {useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementeCounter , decrementeCounter, fakeFunction} from '../actions/counter'
import { Link } from 'react-router-dom'

const Counter = () => {

 const counterState = useSelector( state => state.counter.counterValue)
 const dispatch = useDispatch()
  return (
    <div>
      <p>{counterState}</p>
      <div>
        <button onClick={() => dispatch(incrementeCounter())}> + </button>
      </div>
      <br></br>
      <div>
      <button onClick={() => dispatch(decrementeCounter(2))}> - </button>
      </div>
      <br></br>
      <div>
      <button onClick={() => dispatch(fakeFunction())}> function  </button>
      </div>
      <Link to='/home'> Home  </Link>
    </div>
  );
};

export default Counter;