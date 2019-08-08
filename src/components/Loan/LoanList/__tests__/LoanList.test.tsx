import React from 'react';
import { render } from '@testing-library/react';
import LoanList from '../LoanList';
import loanMock from '../../../../services/loan.json'

describe('<LoanList /> spec', () => {
  const payNow = () => jest.fn()
  it('renders LoanList component', () => {
    const component = render(<LoanList {...loanMock[0]} loading payNow={payNow} />);
    expect(component).toMatchSnapshot();
  });
});
