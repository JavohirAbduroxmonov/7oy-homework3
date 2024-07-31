import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";

const initialState = { count: 0, color: "black", background: "white" };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return { ...state, count: 0 };
    case "changeColor":
      return { ...state, color: action.payload };
    case "changeBackground":
      return { ...state, background: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ color: state.color, background: state.background }}>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/counter">Counter</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/counter"
            element={<Counter state={state} dispatch={dispatch} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
