import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header style={{color: 'white'}} className="App-header">
          <h2>Fib App</h2>
          <Link to="/">Fibonacci calculator</Link>
          <Link to="/otherpage">Other Page</Link>
          <div >
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
