import React, { useState } from 'react';
import './App.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import FoodList from "./components/foodselection"

// const proptest = 2;



function App() {

  const [amountOfFood, setAmountOfFood] = useState(0);



  return (

    <div className="App">
      <header className="App-header">
      </header>

      <h3>Challenge Time</h3>
      <p>
      </p>
      <h2>How big are we gonna make this?</h2>

      <RangeSlider
        value={amountOfFood}
        onChange={changeEvent => setAmountOfFood(changeEvent.target.value)}
        min={1}
        max={5}
        size={"sm"}
      />


      <FoodList sizeOfList={amountOfFood} />

    </div>
  );
}

export default App;
