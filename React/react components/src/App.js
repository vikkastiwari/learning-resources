import { useEffect, useState } from 'react';
import './App.css';
import CheckboxComponent from './components/CheckboxComponent/CheckboxComponent';
import IconComponent from './components/IconComponent/IconComponent';
import TabComponent from './components/TabCompnent/TabComponent';
import RadioComponent from './components/RadioComponent/RadioComponent';
import AccordionComponent from './components/AccordionComponent/AccordionComponent';
import AlertBox from './components/AlertBox/AlertBox';
import DropDown from './components/DropDown/DropDown';
import Modal from './components/Modal/Modal';
import Pagination from './components/Pagination/Pagination';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Carousel from './components/Carousel/Carousel';

function App() {
  const tabs = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  const accordionData = [
    { id: '1', label: 'Tab 1', content: 'Content for Tab 1' },
    { id: '2', label: 'Tab 2', content: 'Content for Tab 2' },
    { id: '3', label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  const slides = [
    {
      image: 'https://via.placeholder.com/600x300',
      title: 'Slide 1',
      description: 'Description for slide 1'
    },
    {
      image: 'https://via.placeholder.com/600x300',
      title: 'Slide 2',
      description: 'Description for slide 2'
    },
    {
      image: 'https://via.placeholder.com/600x300',
      title: 'Slide 3',
      description: 'Description for slide 3'
    }
  ];

  const [checked, setIsChecked] = useState(false);
  const [radioChecked, setIsRadioChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const totalItems = 100;
  const itemsPerPage = 10;

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollY = window.scrollY;
      const progress = (scrollY/scrollHeight) * 100;
  
      setProgress(progress);
    }

    window.addEventListener('scroll',handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleToastAlert = () => {
    setShowAlert(true);
  }

  const handleCloseAlert = () => {
    setShowAlert(false);
  }

  const onChangeHandler = (event) => {
    setIsChecked(event.target.checked);
    console.log(event.target.checked);
  }

  const onRadioChangeHandler = (event) => {
    setIsRadioChecked(event.target.value);
    console.log(event.target.value);
  }

  const handleSelect = (option) => {
    console.log('Selected option:', option);
    // Do something with the selected option
  };

  const onPagerChangeHandler = (page) => {
    console.log(page)
  }

  const handleProgress = () => {
    setProgress(prev => Math.min(prev+10, 100));
  }

  return (
    <div>
      <h1>Tab Component Example <IconComponent size={20} name={'heart'} color={'red'}></IconComponent></h1>
      <TabComponent tabs={tabs} />
      <hr />

      <CheckboxComponent isChecked={checked} label={'Test'} onChange={onChangeHandler}></CheckboxComponent>
      <hr />
      
      <div className='radio-component'>
        <RadioComponent value="label1" isChecked={radioChecked === 'label1'} label={'Test 1'} onChange={onRadioChangeHandler}></RadioComponent>
        <RadioComponent value="label2" isChecked={radioChecked === 'label2'} label={'Test 2'} onChange={onRadioChangeHandler}></RadioComponent>
      </div>
      <hr />

      <AccordionComponent item={accordionData}></AccordionComponent>
      <hr />

      <button onClick={handleToastAlert}>Trigger Alert</button>
      {showAlert && <AlertBox type={'success'} message={'This is success'} autoCloseDelay={3000} onClose={handleCloseAlert}></AlertBox>}
      <hr />
      
      <DropDown options={options} onSelect={handleSelect} ></DropDown>
      <hr />

      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <button className='modal-btn-close' onClick={closeModal}>Close Modal</button>
      </Modal>
      <hr />

      <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} onChange={(page) => onPagerChangeHandler(page)}></Pagination>
      <hr />

      <ProgressBar progress={progress}></ProgressBar>
      <button onClick={handleProgress}>Make Progress</button>
      <hr />

      <Carousel slides={slides}></Carousel>
    </div>
  );
}

export default App;
