import React from 'react';
import { Layout, Row, Col  } from 'antd'

const { Content } = Layout;

export default function _Layout(props) {
  return (
    <Layout>
      <Content>
        <Row>
          <Col span={12} offset={6}>
          {props.children}
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}