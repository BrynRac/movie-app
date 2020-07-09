import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

//components
import Nav from './components/layout/Nav';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/layout/Footer';
import MovieInfo from './components/MovieInfo';

function App() {
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <main className="App">
        <Nav />
        <div className="content-container">
          <Switch>
            <Route exact path="/movie-app" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={MovieInfo} />
          </Switch>
        </div>
        <Footer />
      </main>
    </Provider>
  );
}

export default App;
