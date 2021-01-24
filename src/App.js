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

// Hook -1
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <HomePage />} />
        <Route path="/calculator" component={() => <CalculatorPage />} />

        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
