jest.mock('../../../services/loan', () => ({
  getLoadApi: jest.fn()
}));

import { call, put, all, fork } from 'redux-saga/effects';
import { getLoadApi } from '../../../services/loan';

import * as actions from '../Loan.action';
import * as sagas from '../Loan.sagas';
import { mainSaga } from '../../../App.store';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('sagas', () => {
  const mockData = [
    {
      "id" : "3d4f306-8f4e-11e4-bb7a-ijwn5672bnsss0",
      "name" : "Rent office",
      "owner": "Jsohn Kahd",
      "amount": 5263,
      "loanTerm": 12,
      "payWeekly": 109.64,
      "createdAt": "2019-02-22T16:20:23Z",
      "paid": true
    },
  ]

  it('should watch Home Sagas', () => {
    const gen = mainSaga();
    expect(gen.next().value).toEqual(all([fork(sagas.loanSaga)]));
  });

  it('should dispatch action "GET_LOAN_LIST_SUCCESS" with result ', () => {
    const result = [...mockData];
    (<jest.Mock>getLoadApi).mockImplementationOnce(() => result);

    const gen = sagas.getLoanListAction();
    expect(gen.next().value).toEqual(call(getLoadApi));
    expect(gen.next(result).value).toEqual(
      put(actions.getLoanListSuccess(result))
    );
  });

  it('should dispatch action "GET_LOAN_LIST_FAILURE" with error', () => {
    const gen = sagas.getLoanListAction();
    expect(gen.next().value).toEqual(call(getLoadApi));
    expect(gen.throw && gen.throw(new Error()).value).toEqual(
      put(actions.getLoanListFailure(new Error()))
    );
  });
});
