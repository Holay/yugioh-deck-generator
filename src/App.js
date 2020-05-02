import React, { useState, useEffect } from 'react';
import { Header, Deck, Collection } from './components'
import './App.css';
import { API_BASE_URL } from './config.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DeckListContextProvider from './contexts/DeckListContext'

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(API_BASE_URL).then(response => response.json())
      .then(data => setCards(data.data))
  }, [])
  
  return (
    <div className="App">
      <Router >
        <Header />
        <DeckListContextProvider>
        <Deck />
        <div className="outlet">
          <Switch>
            <Route path="/structure">
            </Route>
            <Route path="/">
              <Collection cards={cards}/>
            </Route>
          </Switch>
        </div>
        </DeckListContextProvider>
      </Router>
    </div>
  );
}

export default App;
