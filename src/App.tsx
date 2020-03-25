import React from 'react';
import {useTranslation} from 'react-i18next';
import './App.scss';

const App: React.SFC = () => {
  const {t} = useTranslation();
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
};

export default App;
