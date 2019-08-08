import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Loan from '../Loan';

afterEach(cleanup);

describe('<Loan> specs', () => {
  test('initial Loan page', () => {
    const getLoanListRequest = jest.fn();
    const getLoanListSuccess = jest.fn();
    const getLoanListFailure = jest.fn();
    const payNowWithAction = jest.fn();

    const { container } = render(
      <Loan 
        loading={true}
        data={[]}
        error={null}
        getLoanListRequest={getLoanListRequest}
        getLoanListSuccess={getLoanListSuccess}
        getLoanListFailure={getLoanListFailure}
        payNowWithAction={payNowWithAction}
      />
    );

    expect(container.getElementsByClassName("ant-spin-nested-loading")).not.toBeUndefined()
    expect(getLoanListRequest).toHaveBeenCalled();
  });


  test('pay now Loan page', () => {
    const data = [{
      "id" : "1",
      "name" : "Buy iPhone",
      "owner": "Jsohn Kahd",
      "amount": 2000,
      "loanTerm": 6,
      "payWeekly": 83.3,
      "createdAt": "2019-07-12T05:20:23Z",
      "paid": false,
    }]
    const getLoanListRequest = jest.fn();
    const getLoanListSuccess = jest.fn();
    const getLoanListFailure = jest.fn();
    const payNowWithAction = jest.fn();

    const { container } = render(
      <Loan 
        loading={false}
        data={data}
        error={null}
        getLoanListRequest={getLoanListRequest}
        getLoanListSuccess={getLoanListSuccess}
        getLoanListFailure={getLoanListFailure}
        payNowWithAction={payNowWithAction}
      />
    );

    const payNowBtnNode = container.getElementsByClassName("ant-btn-primary")[0]
    expect(payNowBtnNode).not.toBeUndefined()

    fireEvent.click(payNowBtnNode);
    expect(payNowWithAction).toHaveBeenCalled();
  });
});
