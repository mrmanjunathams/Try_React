import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcome from './components/Welcome'
// import {Greet} from './components/Greet'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
     <Greet name="Manjunatha M S"/>
     <Greet name="Silence"/>
     <Greet name="Hello!"/>

     {/* <Welcome />
     <Hello /> */}
    </div>
  );
}

export default App;
