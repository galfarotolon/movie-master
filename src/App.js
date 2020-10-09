import React from 'react';
import './App.css';

import Row from './components/Row.js';
import requests from './requests.js';
import Banner from './components/Banner.js'
import Nav from './components/Nav.js'


function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to Movie Master!</h1> */}
      <Nav />
      <Banner />
      <Row title="Netflix Originals" url={requests.fetchNetflixOriginals} largeRow></Row>
      <Row title="Trending Now" url={requests.fetchTrending} largeRow></Row>
      <Row title="Top Rated" url={requests.fetchTopRated} largeRow></Row>
      <Row title="Action Movies" url={requests.fetchActionMovies} largeRow></Row>
      <Row title="Comedy Movies" url={requests.fetchComedyMovies} largeRow></Row>
      <Row title="Horror Movies" url={requests.fetchHorrorMovies} largeRow></Row>
      <Row title="Romance Movies" url={requests.fetchRomanceMovies} largeRow></Row>
      <Row title="Documentaries" url={requests.fetchDocumentaries} largeRow></Row>
    </div>
  );
}

export default App;
