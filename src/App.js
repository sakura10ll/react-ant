import React from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Button type='primary'>react</Button>
    </div>
  );
}

export default App;
