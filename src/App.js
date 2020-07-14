import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CovidResult from './components/CovidResult';

function App() {
  let [country, setCountry] = useState("");
  let res = <React.Fragment/>

  if (country.length > 0) {
    res = <CovidResult country={country} key={country}></CovidResult>
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar setCountry={setCountry}></SearchBar>
        { res }
      </header>
    </div>
  );
}

export default App;
