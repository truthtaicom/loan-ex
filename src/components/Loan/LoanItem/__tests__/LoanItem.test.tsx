import React from 'react';
import { render } from '@testing-library/react';
import LoanItem, { PayButton } from '../LoanItem';
import loanMock from '../../../../services/loan.json'

describe('<LoanItem /> spec', () => {
  const payNow = () => jest.fn()
  it('renders LoanItem component', () => {
    const component = render(<LoanItem {...loanMock[0]} loading payNow={payNow} />);
    expect(component).toMatchSnapshot();
  });

  it('renders PayButton component with re-pay', () => {
    const component = render(<PayButton isPaid payNow={payNow} />);
    expect(component).toMatchSnapshot();
  });

  it('renders PayButton component with pay now', () => {
    const component = render(<PayButton payNow={payNow} />);
    expect(component).toMatchSnapshot();
  });
});
