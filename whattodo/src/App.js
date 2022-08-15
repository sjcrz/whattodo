import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Home from './Components/pages/Home.tsx';


const App = () => {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
