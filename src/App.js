import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

//components
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <main className="App">
        <Nav />

        <div className="content-container">
          <h1>Hello World</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Nav />
          </Switch>
        </div>
        <Footer />
      </main>
    );
  }
}

export default App;
