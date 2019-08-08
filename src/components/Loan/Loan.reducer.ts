import {
  GET_LOAN_LIST_REQUEST,
  GET_LOAN_LIST_SUCCESS,
  GET_LOAN_LIST_FAILURE,
  PAY_NOW_WITH_ID
} from './Loan.actionTypes';
import { LoanListProps } from './LoanList/LoanList';

export interface ILoanReducerState extends LoanListProps {
  loading: boolean;
  error: any;
}

export const initialState: ILoanReducerState = {
  loading: false,
  data: [],
  error: null
};

export function loanReducer(state: ILoanReducerState = initialState, action: any) {
  switch (action.type) {
    case GET_LOAN_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        data: []
      };
    case GET_LOAN_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };

    case GET_LOAN_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case PAY_NOW_WITH_ID:
        return {
          ...state,
          data: state.data.map(elm => {
            if(elm.id === action.id) {
              return {
                ...elm,
                paid: true
              }
            };
            return elm
          })
        }

    default:
      return state;
  }
}
