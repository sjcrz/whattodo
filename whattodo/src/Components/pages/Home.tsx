// @ts-ignore
import TaskPane from '../modules/TaskPane.tsx';
// @ts-ignore
import NavBar from '../modules/NavBar.tsx';
import React from 'react';
import Dash from './Dash.tsx';

import './Home.css'

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

const Home = () => {
    return (
    <div className="Home-wrapper">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element = {<TaskPane path="/" task="make this app"/>}/>
          <Route path="/dashboard" element = {<Dash/>}/>
        </Routes>
      </Router>
    </div>)
}

export default Home;