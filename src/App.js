import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import GlobalStyles from './GlobalStyles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
