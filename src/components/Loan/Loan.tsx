import React, { useEffect, useCallback } from 'react';
import { LoanList } from './LoanList';
import { ILoanReducerState } from './Loan.reducer';
import { LoanActionTypes } from './Loan.action';


export default function Loan(props: ILoanReducerState & LoanActionTypes) {
  const { payNowWithAction, getLoanListRequest } = props
  useEffect(() => {
    getLoanListRequest()
  }, [getLoanListRequest])

  const payNow  = useCallback((id: string) => {
    payNowWithAction(id)
  }, [payNowWithAction])

  if(props.error) {
    return <p>{props.error.message}</p>
  }

  return (
    <LoanList data={props.data} loading={props.loading} payNow={payNow} />
  )
}