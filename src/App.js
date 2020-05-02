import React, { useState, useEffect } from 'react';
import { Header, Deck } from './components'
import './App.css';
import { API_BASE_URL } from './config.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  useEffect(() => {

    // fetch(API_BASE_URL).then(response => response.json())
    //   .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <Router >
        <Header />
        <Deck />
        <div className="outlet">

          <Switch>
            <Route path="structure">

            </Route>
            <Route path="/">

            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
