import React from "react";
import { Row, Col, Button, Card } from 'antd';

const DataDisplayComponents = ({ match }) => (
  <React.Fragment>
    <h4 className="mb-3">
      Read&nbsp;
      <a 
        href="https://medium.com/@SmartCoin/join-our-cult-and-get-a-slice-of-30m-in-airdrops-29037bdc9db6" 
        target="_blank"
      >
        our Medium post
      </a>
      &nbsp;for further 3,3,3 airdrop details.
    </h4>
    <h4 className="mb-3">
      To learn why you did or did not qualify,&nbsp;
      <a href="https://www.youtube.com/watch?v=V2_UczcEdtw" target="_blank">
        watch Jon Ray's Youtube video
      </a>
      .
    </h4>
    <Col xs={32} sm={32} md={32} lg={24}>
      <Row gutter={40}>
        <Col xs={16} lg={8} className="mx-auto mx-lg-0">
          <Card>
            <Row gutter={40} className="mb-4">
              <Col xs={24} sm={24} md={12}>
                <h2 className="text-center text-md-left">3,3,3 Airdrop</h2>
                <h1 className="text-center text-md-left">$0</h1>
              </Col>
            </Row>
            <Col xs={24} className="text-center mb-2">
              <Button className="w-100" size="large" type="default">Claim</Button>
            </Col>
          </Card>
        </Col>
      </Row>
    </Col>
  </React.Fragment>
);

export default DataDisplayComponents;