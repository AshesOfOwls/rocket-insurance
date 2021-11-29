import React from 'react';
import logo from './logo.svg';
import StyleProvider from './StyleProvider';

import s from './App.module.css';

function App() {
  return (
    <StyleProvider>
      <div className={s.App}>
        <header className={s.appHeader}>
          <img src={logo} className={s.appLogo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={s.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </StyleProvider>
  );
}

export default App;
