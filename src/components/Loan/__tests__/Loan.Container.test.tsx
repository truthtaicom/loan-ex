import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import LoanContainer from '../Loan.container';
import { loanReducer } from '../Loan.reducer';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

function renderWithRedux(
  ui: any,
  {
    initialState = { loanReducer: {} },
    store = createStore(loanReducer, initialState)
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <Router>{ui}</Router>
      </Provider>
    ),
    store
  };
}

test('can render with redux with data with empty', async () => {
  const { getByText } = renderWithRedux(<LoanContainer />, {
    initialState: {
      loanReducer: {
        data: []
      }
    }
  });

  const emptyTextNode = getByText('No Data');

  expect(emptyTextNode).toBeTruthy();
});

test('can render with redux with data with error', async () => {
  const { getByText } = renderWithRedux(<LoanContainer />, {
    initialState: {
      loanReducer: {
        data: [],
        request: false,
        error: {
          message: 'ERROR !'
        }
      }
    }
  });

  const errorTextNode = getByText('ERROR !');

  expect(errorTextNode).toBeTruthy();
});
