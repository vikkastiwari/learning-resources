import React, { useState } from 'react';
// import throttle from 'lodash/function/throttle'; 

const Watchlist = ({stocks}) => {
  const [watchlist, setWatchlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [stocksData, setStocksData] = useState(stocks);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleToggleWatchlist = (stock) => {
    if (watchlist.includes(stock)) {
      setWatchlist(watchlist.filter((item) => item !== stock));
    } else {
      setWatchlist([...watchlist, stock]);
    }
  };

  const filteredWatchlist = watchlist.filter((stock) =>
    stock.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Stock Watchlist</h2>
      <input
        type="text"
        placeholder="Search stocks..."
        value={searchQuery}
        onChange={handleSearch}
      />

      {stocksData.map((stock) => (
        <button key={stock.id} onClick={() => handleToggleWatchlist(stock.name)}>
            {watchlist.includes(stock.name) ? 'Remove '+stock.name : 'Add '+stock.name}
        </button>
      ))}

      {filteredWatchlist.map((stock) => (
        <div key={stock} style={{marginBottom:'20px'}}>
          <span>{stock}</span>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
