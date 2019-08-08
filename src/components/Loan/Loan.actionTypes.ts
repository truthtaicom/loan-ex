export const GET_LOAN_LIST_REQUEST = 'GET_LOAN_LIST_REQUEST';
export const GET_LOAN_LIST_SUCCESS = 'GET_LOAN_LIST_SUCCESS';
export const GET_LOAN_LIST_FAILURE = 'GET_LOAN_LIST_FAILURE';
export const PAY_NOW_WITH_ID = 'PAY_NOW_WITH_ID'

export interface IGetLoanListRequestAction {
  type: typeof GET_LOAN_LIST_REQUEST;
}

export interface IGetLoanListSuccessAction {
  type: typeof GET_LOAN_LIST_SUCCESS;
  data: any;
}

export interface IGetLoanListFailureAction {
  type: typeof GET_LOAN_LIST_FAILURE;
  error?: typeof Error;
}

export interface IPayNowWithIdAction {
  type: typeof PAY_NOW_WITH_ID;
  id?: string;
}
