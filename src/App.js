import React from 'react';
import './App.css';

import Row from './components/Row.js';
import requests from './requests.js';


function App() {
  return (
    <div className="App">
      <h1>Welcome to Movie Master!</h1>
      <Row title="Netflix Originals" url={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending Now" url={requests.fetchTrending}></Row>
    </div>
  );
}

export default App;
