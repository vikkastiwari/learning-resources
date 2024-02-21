import './App.css';
import {Stepper} from './components/Stepper';

export default function App() {
  let list = [<Example1 />,<Example2 />,<Example3 />];
  return (
    <div className="App">
      <Stepper list={list} />
    </div>
  );
}

const Example1 = ({onPrev,onNext})=>{
  return (
    <>
      <h1>Hello 1</h1>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
}

const Example2 = ({onPrev,onNext})=>{
  return (
    <>
      <h1>Hello 2</h1>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
}

const Example3 = ({onPrev,onNext})=>{
  return (
    <>
      <h1>Hello 3</h1>
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
}