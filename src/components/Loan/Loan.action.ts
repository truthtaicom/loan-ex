import {
  GET_LOAN_LIST_REQUEST,
  GET_LOAN_LIST_SUCCESS,
  GET_LOAN_LIST_FAILURE,
  PAY_NOW_WITH_ID,
  IGetLoanListRequestAction,
  IGetLoanListSuccessAction,
  IGetLoanListFailureAction,
  IPayNowWithIdAction
} from './Loan.actionTypes';

export function getLoanListRequest(): IGetLoanListRequestAction {
  return {
    type: GET_LOAN_LIST_REQUEST
  };
}

export function getLoanListSuccess(data: any): IGetLoanListSuccessAction {
  return {
    type: GET_LOAN_LIST_SUCCESS,
    data
  };
}

export function getLoanListFailure(error: any): IGetLoanListFailureAction {
  return {
    type: GET_LOAN_LIST_FAILURE,
    error
  };
}

export function payNowWithAction(id: string): IPayNowWithIdAction {
  return {
    type: PAY_NOW_WITH_ID,
    id
  };
}

export interface LoanActionTypes {
  getLoanListRequest: () => IGetLoanListRequestAction;
  getLoanListSuccess: () => IGetLoanListSuccessAction;
  getLoanListFailure: () => IGetLoanListFailureAction;
  payNowWithAction: (id: string) => IPayNowWithIdAction
}
