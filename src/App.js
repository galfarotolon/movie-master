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
      <Row title="Top Rated" url={requests.fetchTopRated}></Row>
      <Row title="Action Movies" url={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" url={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" url={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" url={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" url={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
