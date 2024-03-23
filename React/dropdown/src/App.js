import { useState } from 'react';
import './App.css';
import DropDown from './components/DropDown/DropDown';
import { countries  } from './data';

function App() {

  const [selectedCountry, setSelectedCountry] = useState('');

  const onSelectOption = (value) => {
    setSelectedCountry(value);
  }

  return (
    <div className="App">
      <div>
        <DropDown label={'countries'} id={'cnt'} options={countries} callback={onSelectOption}></DropDown>
      </div>
      <div>
        {selectedCountry && countries.map((item, index) => {
          return item.name === selectedCountry ? <DropDown key={index} label={'citites'} id={'cities'} isCity={true} options={countries[index].cities}></DropDown> : ''
        })}
      </div>
    </div>
  );
}

export default App;
