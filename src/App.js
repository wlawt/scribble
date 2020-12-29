import './App.css';
import { Component } from 'react'

import DrawArea from './scribble/DrawArea'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DrawArea />
      </div>
    );
  }
}

export default App;
