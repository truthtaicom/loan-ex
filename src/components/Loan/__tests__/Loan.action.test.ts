import * as actions from '../Loan.action';
import * as types from '../Loan.actionTypes';

describe('actions', () => {
  it('should create an action to get loan list with request status', () => {
    const expectedAction = {
      type: types.GET_LOAN_LIST_REQUEST,
    };
    expect(actions.getLoanListRequest()).toEqual(expectedAction);
  });

  it('should create an action to get loan list with request success', () => {
    const data = [{ a: 'b' }];
    const expectedAction = {
      type: types.GET_LOAN_LIST_SUCCESS,
      data: [...data]
    };
    expect(actions.getLoanListSuccess([...data])).toEqual(expectedAction);
  });

  it('should create an action to get loan list with request failure', () => {
    const text = 'error';
    const expectedAction = {
      type: types.GET_LOAN_LIST_FAILURE,
      error: text
    };
    expect(actions.getLoanListFailure(text)).toEqual(expectedAction);
  });

  it('should create an action to pay now', () => {
    const expectedAction = {
      type: types.PAY_NOW_WITH_ID,
      id: "1"
    };
    expect(actions.payNowWithAction("1")).toEqual(expectedAction);
  });
});
