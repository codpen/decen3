import React from "react";
import { Row, Col, Button, Card } from "antd";
import { stake, unstake } from "../../../../utils/methods";
import { useWeb3React } from "@web3-react/core";

const DataDisplayComponents = ({ match }) => {
  const { account } = useWeb3React();

  return (
    <React.Fragment>
      <Col xs={32} sm={32} md={32} lg={24}>
        <Row gutter={40}>
          <Col xs={24} xl={16} className="mx-auto">
            <Card>
              <Row gutter={40} className="mb-4">
                <Col xs={24} sm={24} md={12}>
                  <h2 className="text-center text-md-left">
                    Single Stake (3, 3)
                  </h2>
                  <h5 className="text-center text-md-left">
                    6 hrs, 26 mins to next rebase
                  </h5>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <h2 className="text-center text-md-right">
                    Your Earnings / Day
                  </h2>
                  <h1 className="text-center text-md-right">$0</h1>
                </Col>
              </Row>
              <Row gutter={40} className="mb-4">
                <Col xs={24} sm={24} md={8} className="text-center">
                  <h2>APY</h2>
                  <h2>66,473%</h2>
                </Col>
                <Col xs={24} sm={24} md={8} className="text-center">
                  <h2>TVL</h2>
                  <h2>$25,554,262</h2>
                </Col>
                <Col xs={24} sm={24} md={8} className="text-center">
                  <h2>D3 Price</h2>
                  <h2>$38.74</h2>
                </Col>
              </Row>
              <Col xs={24} className="text-center mb-2">
                {/* <Button size="large" type="default" onClick={getD3BondDepositoryData}>Connect Wallet</Button> */}
              </Col>
              <h3 className="text-center">Connect your wallet to stake D3</h3>
              <button onClick={() => stake()}>Stake</button>
              <button onClick={() => unstake()}>Unstake</button>
            </Card>
          </Col>
        </Row>
      </Col>
    </React.Fragment>
  );
};

export default DataDisplayComponents;
