import React, { useState } from "react";

const Counter = ({ state, dispatch }) => {
  const [inputValue, setInputValue] = useState(0);
  const [colorValue, setColorValue] = useState(state.color);
  const [bgValue, setBgValue] = useState(state.background);

  const handleIncrement = () => {
    const value = inputValue === 0 ? 1 : parseInt(inputValue);
    dispatch({ type: "increment", payload: value });
  };

  const handleDecrement = () => {
    const value = inputValue === 0 ? 1 : parseInt(inputValue);
    dispatch({ type: "decrement", payload: value });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleChangeColor = () => {
    dispatch({ type: "changeColor", payload: colorValue });
  };

  const handleChangeBackground = () => {
    dispatch({ type: "changeBackground", payload: bgValue });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold mb-8">{state.count}</h1>
      <div className="flex gap-4 mb-4">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border-2 border-black py-1 px-2 rounded"
          placeholder="Enter number"
        />
        <input
          type="text"
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
          onBlur={handleChangeColor}
          className="border-2 border-black py-1 px-2 rounded"
          placeholder="Enter text color"
        />
        <input
          type="text"
          value={bgValue}
          onChange={(e) => setBgValue(e.target.value)}
          onBlur={handleChangeBackground}
          className="border-2 border-black py-1 px-2 rounded"
          placeholder="Enter background color"
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleIncrement}
          className="border-2 border-black py-2 px-4 rounded hover:bg-black hover:text-white transition"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="border-2 border-black py-2 px-4 rounded hover:bg-black hover:text-white transition"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="border-2 border-black py-2 px-4 rounded hover:bg-black hover:text-white transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
