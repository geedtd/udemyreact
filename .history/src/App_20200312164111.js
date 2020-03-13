import React from 'react';

import './App.css';



const App = () => {
const buttonText="[Hi , There]";

  return (
  <div>
    <label className="label" for="name">
      Enter Name:   
    </label>
    <input id="name" type="text" />
    <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
  </div>
  )
}

export default App;
