import { loanReducer } from '../Loan.reducer';
import * as types from '../Loan.actionTypes';

describe('reducer', () => {
  it('should create an reducer to get loan list with request status', () => {
    const expected = {
      loading: true,
      data: [],
      error: null
    };

    const result = loanReducer(undefined, {
      type: types.GET_LOAN_LIST_REQUEST
    });
    expect(result).toEqual(expected);
  });

  it('should create an reducer to get loan list with success status', () => {
    const expected = {
      loading: false,
      data: [{ a: 1 }],
      error: null
    };

    const result = loanReducer(undefined, {
      type: types.GET_LOAN_LIST_SUCCESS,
      data: [{ a: 1 }]
    });
    expect(result).toEqual(expected);
  });

  it('should create an reducer to get loan list with failure status', () => {
    const expected = {
      loading: false,
      data: [],
      error: new Error()
    };

    const result = loanReducer(undefined, {
      type: types.GET_LOAN_LIST_FAILURE,
      error: new Error()
    });
    expect(result).toEqual(expected);
  });

  it('should create an reducer to pay now', () => {
    const expected = {
      loading: false,
      data: [{
        "id" : "1",
        "name" : "Buy iPhone",
        "owner": "Jsohn Kahd",
        "amount": 2000,
        "loanTerm": 6,
        "payWeekly": 83.3,
        "createdAt": "2019-07-12T05:20:23Z",
        "paid": true
      }],
      error: null
    };

    const initState = {
      loading: false,
      data: [{
        "id" : "1",
        "name" : "Buy iPhone",
        "owner": "Jsohn Kahd",
        "amount": 2000,
        "loanTerm": 6,
        "payWeekly": 83.3,
        "createdAt": "2019-07-12T05:20:23Z",
        "paid": false
      }],
      error: null
    }

    const result = loanReducer(initState, {
      type: types.PAY_NOW_WITH_ID,
      id: "1"
    });
    expect(result).toEqual(expected);
  });
});
