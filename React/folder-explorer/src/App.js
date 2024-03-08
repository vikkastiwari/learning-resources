import './App.css';
import Folder from './components/Explorer/Explorer';
import { Explorer } from './data/structure';

function App() {
  return (
    <div className="App">
      <Folder explorer={Explorer} ></Folder>
    </div>
  );
}

export default App;
