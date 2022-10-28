import React from 'react';
import ReactDOM from 'react-dom';
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { deviceType, osName } from 'react-device-detect';
import getUserId from "./util/getUserId";

let id = getUserId();

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: '63598d947dbd630bc5d32a6a',
    user: {
      key: id,
      //dynamically set these custom attributes using the device type and osName selectors from the npm packages
      custom: {
        device: deviceType,
        operatingSystem: osName,
      }
    }
    });
  

ReactDOM.render(
  <LDProvider>
    <App />
  </LDProvider>,

  document.getElementById('root')
);
}) ();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
