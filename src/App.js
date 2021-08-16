import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Search from './components/Search';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
