import React from 'react';
import LoanItem, { LoanItemProps } from '../LoanItem/LoanItem';
import { List } from 'antd'

export interface LoanListProps {
  data: LoanItemProps[]
}

export default function LoanList(props: any) {
  return (
    <div>
      <List
        loading={props.loading}
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={(item: LoanItemProps) => <LoanItem {...item} {...props} />}
      />,
    </div>
  )
}