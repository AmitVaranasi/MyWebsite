import React from 'react';
import ReactDOM from 'react-dom/client'; //Import this to have the createRoot function
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// OLD: ReactDOM.render(<App />, document.getElementById('root'));

// NEW (React 18+):
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/*optional but recommended*/}
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
