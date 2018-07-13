import React, { Component } from 'react';
import './App.css';
import { Controller } from "./Controller";


class App extends Component {
  render() {
      return (
         <div className="App">
            <header className="App-header">
            <h1 className="App-title">Welcome to <span style={{color:"rgb(150, 0, 0)", fontSize: "2em"}}>You</span>Decide</h1>
                <p>Search for videos and add them to your library!</p>
                <a className="headerLink" href="#/search">Search For New Videos</a>     |      <a className="headerLink" href="#/vids">Check your library</a>
            </header>
            <Controller/>
         </div>
      );
    }
}

export default App;
