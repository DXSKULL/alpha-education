import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset, addLetterS, insert } from "../redux/slices/secondSlice";

const SecondCounter = () => {
  console.log("Second counter!");
  const second = useSelector((state) => state.second.text);
  const dispatch = useDispatch();

  const [word, setWord] = useState("")
  const [test, setTest] =useState("test")

  function handleSubmit(e) {
    e.preventDefault();
    setTest(word)
  }

  return (
    <div className="counter">
      <buttton className="counter__btn" onClick={() => dispatch(reset())}>
        reset
      </buttton>
      <h3 className="counter__num">{second}</h3>
      <buttton className="counter__btn" onClick={() => dispatch(addLetterS())}>
        addS
      </buttton>
    </div>
  );
};

export default SecondCounter;
