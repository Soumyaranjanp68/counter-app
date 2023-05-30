import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrementTen = () => {
    setCount(count + 10);
  };

  const handleDecrementTen = () => {
    setCount(count - 10);
  };

  return (
    <div className="container">
      <div className="sub-cont">
      <div className="buttons">
        
        <button className="decrement" onClick={handleDecrement}>
          -
        </button>
        <div className="count">
        <button className="decrement-ten" onClick={handleDecrementTen}>
          -10
        </button>
        Count: {count}
        <button className="increment-ten" onClick={handleIncrementTen}>
          +10
        </button>
        </div>
        <button className="increment" onClick={handleIncrement}>
          +
        </button>
        
      </div>
      </div>
    </div>
  );
};

export default App;
