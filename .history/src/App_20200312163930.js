import React from 'react';

import './App.css';

function getButtonText() {
  return 'Click On Me';
}

const App = () => {
const buttonText="Click Me";

  return (
  <div>
    <label className="label" for="name">
      Enter Name:   
    </label>
    <input id="name" type="text" />
    <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
  </div>
  )
}

export default App;
