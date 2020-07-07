import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

//components
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <main className="App">
      <Nav />

      <h1>Hello World</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Nav />
      </Switch>
    </main>
  );
}

export default App;
