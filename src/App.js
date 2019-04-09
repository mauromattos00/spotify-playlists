import React, { Component } from 'react';
import './App.css';
import PlaylistTiles from "./components/PlaylistTiles/PlaylistTiles";



class App extends Component {
  render() {
    return (
      <div className="App">
        <PlaylistTiles />
      </div>
    );
  }
}

export default App;
