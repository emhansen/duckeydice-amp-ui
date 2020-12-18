import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import PubSub from '@aws-amplify/pubsub';
import { AWSIoTProvider } from '@aws-amplify/pubsub';



Amplify.configure(config);
// Apply plugin with configuration
Amplify.addPluggable(new AWSIoTProvider({
     aws_pubsub_region: 'us-east-2',
     aws_pubsub_endpoint: 'wss://a1gpigc1i2rxkh-ats.iot.us-east-2.amazonaws.com/mqtt',
   }));
PubSub.configure();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
