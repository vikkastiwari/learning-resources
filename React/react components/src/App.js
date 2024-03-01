import { useState } from 'react';
import './App.css';
import CheckboxComponent from './components/CheckboxComponent/CheckboxComponent';
import IconComponent from './components/IconComponent/IconComponent';
import TabComponent from './components/TabCompnent/TabComponent';
import RadioComponent from './components/RadioComponent/RadioComponent';

function App() {
  const [checked, setIsChecked] = useState(false);
  const [radioChecked, setIsRadioChecked] = useState(false);

  const onChangeHandler = (event) => {
    setIsChecked(event.target.checked);
    console.log(event.target.checked);
  }

  const onRadioChangeHandler = (event) => {
    setIsRadioChecked(event.target.value);
    console.log(event.target.value);
  }

  const tabs = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  return (
    <div>
      <h1>Tab Component Example <IconComponent size={20} name={'heart'} color={'red'}></IconComponent></h1>
      <TabComponent tabs={tabs} />
      <CheckboxComponent isChecked={checked} label={'Test'} onChange={onChangeHandler}></CheckboxComponent>
      
      <div className='radio-component'>
        <RadioComponent value="label1" isChecked={radioChecked === 'label1'} label={'Test 1'} onChange={onRadioChangeHandler}></RadioComponent>
        <RadioComponent value="label2" isChecked={radioChecked === 'label2'} label={'Test 2'} onChange={onRadioChangeHandler}></RadioComponent>
      </div>
    </div>
  );
}

export default App;
