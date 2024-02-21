import './App.css';
import Watchlist from './components/WatchList';
import stocks from './data/stocksData';

function App() {
  return (
    <div className="App">
      <Watchlist stocks={stocks} />
    </div>
  );
}

export default App;
