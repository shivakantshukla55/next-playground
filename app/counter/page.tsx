'use client';

import { useDispatch, UseDispatch, useSelector } from "react-redux";
import {increment, decrement, reset} from "../../lib/features/counter/counterSlice";
import { AppDispatch, RootState } from "@/lib/store";

const Counter: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const count = useSelector((state: RootState) => state.counter.value);


    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Redux Counter</h1>
          <p>Count: {count}</p>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      );
}

export default Counter;