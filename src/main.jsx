import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; // Import Provider
import store from './store.js'; // Import store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wrap App with Provider and pass store */}
      <App />
    </Provider>
  </React.StrictMode>,
);
