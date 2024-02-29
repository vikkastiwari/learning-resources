import './App.css';
import TabComponent from './components/TabCompnent/TabComponent';

function App() {
  const tabs = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  return (
    <div>
      <h1>Tab Component Example</h1>
      <TabComponent tabs={tabs} />
    </div>
  );
}

export default App;
