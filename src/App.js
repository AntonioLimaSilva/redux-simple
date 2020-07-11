import React from 'react';
import './App.css';

import Interval from './components/Interval'
import Sum from './components/Sum'
import Avarage from './components/Average'
import Random from './components/Random'

function App() {

  return (
    <div className="App">
      <h1>Exercícios React-Redux (Simples)</h1>
      <div className='line'>
        <Interval />
      </div>

      <div className='line'>
        <Sum />
        <Avarage />
        <Random />
      </div>
    </div>
  );
}

export default App;
