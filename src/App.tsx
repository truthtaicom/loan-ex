import React from 'react';
import './App.css'
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './App.store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
