import React from 'react';
import './App.css';

const customData = require('./data/ingredients.json');
const ingredientArray = [];

// Define limits for randomNum function
const minimum = 0;
const maximum = 1000;

// set limit for number of results
const recipeSize = 8;

function randomNum(minimum, maximum) {
  const rand = Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
  return rand;
}


function App() {

  for (let i = 0; i < recipeSize; i++) {
    ingredientArray.push(customData[randomNum(minimum, maximum)].ingredient)
  }

  console.log(ingredientArray)

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <h3>HELLO</h3>
      <p>
      </p>


      {ingredientArray.map(food => (
        <div className="Ingredients" key={food}>{food}</div>
      ))}

    </div>
  );
}

export default App;
