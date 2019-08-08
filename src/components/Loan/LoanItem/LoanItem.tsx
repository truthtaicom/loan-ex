import React, { useCallback } from 'react';
import { List, Avatar, Skeleton, Button} from 'antd'

export interface LoanItemProps {
  amount: number;
  id: string;
  name: string;
  loanTerm: number;
  payWeekly: number;
  createdAt: string;
  owner: string;
  paid: boolean;
}

export function PayButton(props) {
  const { id, payNow } = props;
  const onPayNow = useCallback(() => {
    payNow(id)
  }, [id, payNow])

  if(props.paid) {
    return <Button type="danger" onClick={onPayNow}>Re-pay</Button>
  }

  return <Button type="primary" onClick={onPayNow}>Pay now</Button>
}

export interface LoanItemExtraProps {
  loading: boolean,
  payNow: (id: string) => void
}

export default function LoanItem(props: LoanItemProps & LoanItemExtraProps) {
  return (
    <List.Item actions={[<PayButton {...props} />]}>
      <Skeleton avatar title={true} loading={props.loading} active>
        <List.Item.Meta
          avatar={<Avatar style={{ backgroundColor: '#87d068' }}>{props.name[0]}</Avatar>}
          title={props.name}
          description={`Loan term: ${props.loanTerm} month`}
        />
      </Skeleton>
    </List.Item>
  )
}

