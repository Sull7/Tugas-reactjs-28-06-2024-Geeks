import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../actions";
import "../assets/css/number.css";

const NumberDisplay = () => {
  const count = useSelector((state) => state.text.count);
  const dispatch = useDispatch();

  return (
    <div className="TextDisplay">
      <h3>{count}</h3>
      <button onClick={() => dispatch(decrement())} style={{ margin: "10px" }}>
        -
      </button>
      <button onClick={() => dispatch(increment())} style={{ margin: "10px" }}>
        +
      </button>
      <br />
      <button onClick={() => dispatch(reset())} style={{ margin: "10px" }}>
        Reset
      </button>
    </div>
  );
};

export default NumberDisplay;
