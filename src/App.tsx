import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Container} from '@material-ui/core';

import Navbar from './components/Navbar';
import Report from './components/Report';

import './App.scss';

const App: React.SFC = () => {
  const {t} = useTranslation();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container className="container">
          <Switch>
            <Route path="/" exact>
              <Report />
            </Route>
            <Route path="/about"></Route>
            <Route path="/contribute"></Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
