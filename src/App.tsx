import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useTranslation} from 'react-i18next';


import './App.scss';

const App: React.SFC = () => {
  const {t} = useTranslation();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/about"></Route>
          <Route path="/contribute"></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
