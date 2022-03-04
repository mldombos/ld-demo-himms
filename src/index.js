import React from 'react';
import ReactDOM from 'react-dom';
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: '6222756f17eece14ae457ff9',
  });

ReactDOM.render(
  <LDProvider>
    <App />
  </LDProvider>,

  document.getElementById('root')
);
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
