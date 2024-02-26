import React, { useState } from "react";
import "./App.css";
import Watchlist from "./components/WatchList";
import stocks from "./data/stocksData";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(3);

    setCount(count + 2);

    setCount((prev) => prev + 2);

    setCount(count - 4);

    setCount((prev) => prev + 6);
  };

  return (
    <div className="App">
      <Watchlist stocks={stocks} />
      <div onClick={handleClick}>Interview Question -- {count}</div>
    </div>
  );
}

export default App;
