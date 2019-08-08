import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_LOAN_LIST_REQUEST } from './Loan.actionTypes';
import { getLoanListSuccess, getLoanListFailure } from './Loan.action';
import { getLoadApi } from '../../services/loan';

export const getLoanListAction = function*() {
  try {
    const data = yield call(getLoadApi);
    yield put(getLoanListSuccess(data));
  } catch (e) {
    yield put(getLoanListFailure(e));
  }
};

export const loanSaga = function*() {
  yield takeLatest(GET_LOAN_LIST_REQUEST, getLoanListAction);
};
