import React, { useState } from "react";
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { Row, Col, Button, Card, Table, Modal, Tabs } from 'antd';

const { TabPane } = Tabs;

const Icon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" color="#FCFCFC" aria-hidden="true">
    <path d="M15.9998 0.0673828L19.9474 4.09797L10.0071 14.0085L6.05957 10.0727L15.9998 0.0673828Z" fill="#F0B90B" stroke="#F0B90B"></path>
    <path d="M21.9925 6.04224L25.9401 10.0728L10.0071 25.9581L6.05957 22.0223L21.9925 6.04224Z" fill="#F0B90B" stroke="#F0B90B"></path>
    <path d="M4.01446 12.0168L7.96202 16.0474L4.01446 19.9832L0.0668945 16.0474L4.01446 12.0168Z" fill="#F0B90B" stroke="#F0B90B"></path>
    <path d="M27.9852 12.0168L31.9328 16.0474L15.9998 31.9327L12.0522 27.9969L27.9852 12.0168Z" fill="#F0B90B" stroke="#F0B90B"></path>
  </svg>
);

const DataDisplayComponents = ({ match }) => {
  const history = useHistory();
  const columns = [
    {
      title: '',
      dataIndex: 'icon',
      key: 'icon',
      render: () => <Icon />,
    },
    {
      title: 'Bond',
      dataIndex: 'bond',
      key: 'bond',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'ROI',
      dataIndex: 'roi',
      key: 'roi',
    },
    {
      title: 'Purchased',
      dataIndex: 'purchased',
      key: 'purchased',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
        <Button
          key={record.key}
          onClick={() => history.push(`${match.url}/bond${record.key}`)}
        >
          Bond
        </Button>
      ),
    },
  ];
  
  const data = [
    {
      key: 1,
      bond: 'DEFI',
      price: '$34.84',
      roi: '4.83%',
      purchased: '$33,627,628',
    },
    {
      key: 2,
      bond: 'sDEFI',
      price: '$36.44',
      roi: '0.22%',
      purchased: '$13,648,876',
    },
  ];

  return (
    <React.Fragment>
      <Col xs={32} sm={32} md={32} lg={24}>
        <Row gutter={40}>
          <Col xs={24} xl={16} className="mx-auto">
            <Card>
              <h2 className="text-center text-md-left">Bond (1,1)</h2>
              <Row gutter={40} className="mb-4">
                <Col xs={24} sm={24} md={12} className="text-center">
                  <h3>Treasury Balance</h3>
                  <h2>$72,056,638</h2>
                </Col>
                <Col xs={24} sm={24} md={12} className="text-center">
                  <h3>D3 Price</h3>
                  <h2>$36.53</h2>
                </Col>
                <Col xs={24}>
                  <Table
                    className="no-border-last"
                    columns={columns}
                    dataSource={data}
                    rowKey={data.key}
                    pagination={false}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>

      <Switch>
        <Route path={`${match.url}/bond1`} render={({ history}) => (
          <BondModal
            visible={true}
            onCancel={() => {history.push(`${match.url}`)}}
            bondDetailsData={data[0]}
          />
        )} />
        <Route path={`${match.url}/bond2`} render={({ history}) => (
          <BondModal
            visible={true}
            onCancel={() => {history.push(`${match.url}`)}}
            bondDetailsData={data[1]}
          />
        )} />
      </Switch>

    </React.Fragment>
  )
};

const BondModal = ({visible, onCancel, bondDetailsData}) => (
  <Modal
    title=""
    centered
    visible={visible}
    onCancel={onCancel}
    footer={null}
    width={800}
  >
    <Row justify="center">
      <Icon />
      <h2 className="ml-3">{bondDetailsData.bond}</h2>
    </Row>
    <Row gutter={40} className="text-center">
      <Col xs={12}>
        <h3>Bond Price</h3>
        <h2>$34.47</h2>
      </Col>
      <Col xs={12}>
        <h3>Market Price</h3>
        <h2>$36.53</h2>
      </Col>
    </Row>
    <Tabs
      className="p-3"
      defaultActiveKey="1" 
      animated={true}
      centered
    >
      <TabPane tab="Bond" key="1">
        <Col xs={24} sm={24} md={24} lg={12} className="mx-auto mb-4">
          <Button size="large" className="w-100">Bond</Button>
        </Col>
        <Col xs={24}>
          <Row justify="space-between">
            <h4>Your Balance</h4>
            <h4>0 BUSD</h4>
          </Row>
          <Row justify="space-between">
            <h4>You Will Get</h4>
            <h4>0 D3</h4>
          </Row>
          <Row justify="space-between">
            <h4>Max You Can Buy</h4>
            <h4>142685.0653 D3</h4>
          </Row>
          <Row justify="space-between">
            <h4>ROI</h4>
            <h4>6.14%</h4>
          </Row>
          <Row justify="space-between">
            <h4>Debt Ratio</h4>
            <h4>5.56%</h4>
          </Row>
          <Row justify="space-between">
            <h4>Vesting Term</h4>
            <h4>5 days</h4>
          </Row>
        </Col>
      </TabPane>
      <TabPane tab="Redeem" key="2">
        <Col xs={24} sm={24} md={24} lg={12} className="mx-auto mb-4">
          <Button size="large" className="w-100">Claim</Button>
        </Col>
        <Col xs={24}>
          <Row justify="space-between">
            <h4>Pending Rewards</h4>
            <h4>0 D3</h4>
          </Row>
          <Row justify="space-between">
            <h4>Claimable Rewards</h4>
            <h4>0 D3</h4>
          </Row>
          <Row justify="space-between">
            <h4>Time until fully vested</h4>
            <h4>{}</h4>
          </Row>
          <Row justify="space-between">
            <h4>ROI</h4>
            <h4>6.21%</h4>
          </Row>
          <Row justify="space-between">
            <h4>Debt Ratio</h4>
            <h4>5.56%</h4>
          </Row>
          <Row justify="space-between">
            <h4>Vesting Term</h4>
            <h4>5 days</h4>
          </Row>
        </Col>
      </TabPane>
    </Tabs>
  </Modal>
)

export default DataDisplayComponents;