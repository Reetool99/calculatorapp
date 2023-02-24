import './App.css';
import React, { useRef, useState } from 'react';
import Cal from './cal2';

function App() {
  const Cal2 = useRef(null);
  const call = useRef(null);
  const maincall = useRef(null);
  const [cal, setCal] = useState("");

  function change(e) {
    setCal(cal + e.target.name)
  }
  function clear(e) {
    setCal(e.target.name)
  }
  function add() {
    setCal(eval(cal))
  }
  function submit() {
    // Reference.current.focus();
    let value = true;
    if (value) {
      Cal2.current.style.display = "block";
      call.current.style.display = "none";
      maincall.current.style.height = "130px"

    }
  }
  return (
    <div className="App">
      <h1>
        Calculator
      </h1>
      <div className="Calculator" ref={maincall} >
        <input type="text" value={cal} className="cal_Input" placeholder='0' />
        <div ref={call}>
          <div>
            <button onClick={change} name="0" >0</button>
            <button onClick={change} name="%">%</button>
            <button onClick={change} name="/">/</button>
            <button onClick={change} name="*">*</button>
          </div>
          <div>
            <button onClick={change} name="7">7</button>
            <button onClick={change} name="8">8</button>
            <button onClick={change} name="9">9</button>
            <button onClick={change} name="-">-</button>
          </div>
          <div>
            <button onClick={change} name="4">4</button>
            <button onClick={change} name="5">5</button>
            <button onClick={change} name="6">6</button>
            <button onClick={change} name="+">+</button>
          </div>
          <div>
            <button onClick={change} name="1">1</button>
            <button onClick={change} name="2">2</button>
            <button onClick={change} name="3">3</button>
            <button onClick={add}>=</button>
          </div>
        </div>
        <div>
          <button onClick={clear} name="" className='clearbtn'>Clear</button>
          <button onClick={submit} className="advacebtn">Advance Calculator</button>
        </div>

      </div>
      <Cal ref={Cal2} />
    </div>
  );
}

export default App;
