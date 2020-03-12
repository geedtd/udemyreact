import React from 'react';

import './App.css';

const App = () => {
  return (
  <div>
    <label className="label" for="name">
      Enter Name:   
    </label>
    <input id="name" type="text" />
    <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
  </div>
  )
}

export default App;
