import React, { useState, useEffect } from 'react';

const Watchlist = ({stocks}) => {
  const [watchlist, setWatchlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredWatchlist, setFilteredWatchlist] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filteredList = watchlist.filter(stock =>
        stock.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log('called');
      setFilteredWatchlist(filteredList);
    }, 500);

    // Cleanup function to clear the timeout if searchQuery changes before the timeout is reached
    return () => clearTimeout(timeoutId);
  }, [searchQuery, watchlist]);

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

  return (
    <div>
      <h2>Stock Watchlist</h2>
      <input
        type="text"
        placeholder="Search stocks..."
        value={searchQuery}
        onChange={handleSearch}
      />

      {stocks.map((stock) => (
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
