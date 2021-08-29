import React, { useRef } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Search from './components/Search';
import GlobalStyles from './GlobalStyles';
import theme from './theme';

function App() {
  const refWorks = useRef(null);
  const refAbout = useRef(null);

  const scrollToWorks = () => {
    refWorks.current.scrollIntoView();
  };

  const scrollToAbout = () => {
    refAbout.current.scrollIntoView();
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header scrollToWorks={scrollToWorks} scrollToAbout={scrollToAbout} />
        <Switch>
          <Route path="/search/:subreddit">
            <Search />
          </Route>
          <Route path="/">
            <Home refWorks={refWorks} refAbout={refAbout} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
