import React from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating';

function App() {
  return (
    <StarRating
      style={{background: "lightblue"}}
      onDoubleClick={e => alert("double click")}
    />
  );
}

export default App;
