import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';
import { Provider } from 'react-redux';
import { store } from '../../App.store';
import { BrowserRouter as Router, Route } from 'react-router-dom';


describe('<Home /> spec', () => {
  it('renders Home component', () => {
    const component = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
