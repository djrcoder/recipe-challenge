import React from 'react';
import './App.css';

const csv = require("csvtojson");

function App() {

  const converter = csv()
    .fromFile("../data/one-thousand-ingredients.csv")
    .then(json => console.log(json))

  converter();

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <h3>HELLO</h3>





    </div>
  );
}

export default App;
