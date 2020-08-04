import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import DayToDay from '../DayToDay/DayToDay';
import Footer from '../'

export default function App() {
  return 
    <Router>
      <Header />
      <Intro />
      <Projects />
      <DayToDay />
      <Footer />
};
  
