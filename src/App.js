import './App.css';
import { Component } from 'react'

import Draw from './scribble/Draw'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Draw />
      </div>
    );
  }
}

export default App;
