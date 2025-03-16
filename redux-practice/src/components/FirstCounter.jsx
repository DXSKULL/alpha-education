import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { increment, decrement, incrementByAmount, decrementByAmount } from "../redux/slices/counterSlice";

const FirstCounter = () => {
  console.log("First Counter!");

  const counter = useSelector((state) => state.counter.num)
  const dispatch = useDispatch()

  return (
    <div className="counter">
      <buttton className="counter__btn" onClick={() => dispatch(decrement())}>-</buttton>
      <h3 className="counter__num">{counter}</h3>
      <buttton className="counter__btn" onClick={() => dispatch(increment())}>+</buttton>
    </div>
  );
};

export default FirstCounter;
