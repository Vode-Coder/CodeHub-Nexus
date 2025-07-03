// import logo from './logo.svg';
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  let [val, setVal] = useState(0);
  let ch=useRef()
  let handleIncrement = () => {
    setVal(val + 1);
    console.log("Increment button is clicked", val);
  };

  let handleDecrement = () => {
    setVal(val - 1);
    console.log("Decrement button is clicked", val);
  };
  
  // let [car, setCar] = useState(30);
  // useEffect(Callback function ,array of dependiences)
  // case 1 without arry of dependencies
  // it work when any state is changing
  // useEffect(()=>{
  //   console.log("useEffect without dependencies is called");
  // });
  // case2 with empty array of dependencies
  // it will run only one time at the time of rendering
  // useEffect(()=>{
  //   console.log("with empty array")
  // },[]);
  // case 3 with array dependencies
  // it will run only when the value of the variable in array is changed
  // it will not run at the time of rendering
  // it will run when the value of the variable in array is changed
  // it will not run when the value of other variable is changed
  useEffect(() => {
    if (val < 0) {
      let timer=setTimeout(() => {
        setVal(0);
        console.log("Clicked")
      }, 2000);
      ch.current.style.color = "red";
      // cleanup function
      return()=>{
        clearTimeout(timer);
      };
    }
    ch.current.style.color = "green";
    console.log(ch)
  }, [val]);

  return (
    <div className="App">
      {/* <p>{car}</p> */}
      <h1 ref={ch}>
        Going to developed new <u>APP</u>
      </h1>
      <Counter
        val={val}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></Counter>
    </div>
  );
}

export default App;
