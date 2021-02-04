import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import HomePage from './pages';
import CalculatorPage from './pages/calculator/calculator';
import CalculatorMobilePage from './pages/calculatorMobile/calculatorMobile';
import TestPage from './pages/test/test';

// Hook -1
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <HomePage />} />
        <Route exact path="/calculator" component={() => <CalculatorPage />} />
        <Route path="/calculator/mobile" component={() => <CalculatorMobilePage /> } />
        <Route path="/test" component={() => <TestPage />} />

        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
