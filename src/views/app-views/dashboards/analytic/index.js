import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Avatar, Dropdown, Table, Menu, Tag } from 'antd';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import ChartWidget from 'components/shared-components/ChartWidget';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import GoalWidget from 'components/shared-components/GoalWidget';
import {
  VisitorChartData,
  AnnualStatisticData,
  ActiveMembersData,
  NewMembersData,
  RecentTransactionData
} from './DefaultDashboardData';
import {
  UserAddOutlined,
  FileExcelOutlined,
  PrinterOutlined,
  PlusOutlined,
  EllipsisOutlined,
  StopOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import utils from 'utils';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import D3ContractABI from 'abi/D3Contract.json';
const Web3 = require('web3');
const tokenAddress = "0x4D996cA1B4A9697E30c50099C9F5f1d30bEeE953";
const deadAddress = "0x000000000000000000000000000000000000dead";

const newJoinMemberOption = (
  <Menu>
    <Menu.Item key="0">
      <span>
        <div className="d-flex align-items-center">
          <PlusOutlined />
          <span className="ml-2">Add all</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>
        <div className="d-flex align-items-center">
          <StopOutlined />
          <span className="ml-2">Disable all</span>
        </div>
      </span>
    </Menu.Item>
  </Menu>
)

const latestTransactionOption = (
  <Menu>
    <Menu.Item key="0">
      <span>
        <div className="d-flex align-items-center">
          <ReloadOutlined />
          <span className="ml-2">Refresh</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>
        <div className="d-flex align-items-center">
          <PrinterOutlined />
          <span className="ml-2">Print</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="12">
      <span>
        <div className="d-flex align-items-center">
          <FileExcelOutlined />
          <span className="ml-2">Export</span>
        </div>
      </span>
    </Menu.Item>
  </Menu>
);

const cardDropdown = (menu) => (
  <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
    <a href="/#" className="text-gray font-size-lg" onClick={e => e.preventDefault()}>
      <EllipsisOutlined />
    </a>
  </Dropdown>
)

const tableColumns = [
  {
    title: 'METRIC',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <div className="d-flex align-items-center">
        <Avatar size={30} className="font-size-sm" style={{ backgroundColor: record.avatarColor }}>
          {utils.getNameInitial(text)}
        </Avatar>
        <span className="ml-2">{text}</span>
      </div>
    ),
  },
  {
    title: 'VALUE',
    dataIndex: 'date',
    key: 'date',
  },

];

export const DefaultDashboard = () => {
  const [visitorChartData] = useState(VisitorChartData);
  const [annualStatisticData] = useState(AnnualStatisticData);
  let [manualburntToken, setburntToken] = useState();
  let [recentTransactionData, setrecentTransactionData] = useState();
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentAccountAddress, setCurrentAccountAddress] = useState('0');
  const { direction } = useSelector(state => state.theme)

  const params = {
    "ids": "cross-chain-farming",
    "vs_currency": "usd"
  };
  const [token, setToken] = useState({ max_supply: '', circulatingSupply: '', burntToken: '', pancakeswap_price: '', volumePerDay: '', liquidity: '', holders: '', marketcapFull: '', ath: '' })
  const MINUTE_MS = 600000;
  let circulatingSupply;
  let burntToken;
  let pancakeswap_price;
  let volumePerDay;
  let liquidity;
  let holders;
  let marketcapFull;
  let ath;
  let total_supply;
  let max_supply = 2000000000000;

  async function getData() {
    await axios.get("https://api.coingecko.com/api/v3/coins/markets", { params },
      { headers: { "Access-Control-Allow-Origin": 'http://localhost:3000' } })
      .then(res => {
        pancakeswap_price = res.data[0].current_price;
        volumePerDay = res.data[0].total_volume;
        liquidity = 152614;
        holders = 3712;
        total_supply = res.data[0].total_supply;
        marketcapFull = pancakeswap_price * total_supply;
        ath = res.data[0].ath;

        burntToken = max_supply - total_supply + manualburntToken / 10 ** 9;
        circulatingSupply = total_supply - burntToken

        setToken({ max_supply: max_supply, circulatingSupply: circulatingSupply, burntToken: burntToken, pancakeswap_price: pancakeswap_price, volumePerDay: volumePerDay, liquidity: liquidity, holders: holders, marketcapFull: marketcapFull, ath: ath });
        setrecentTransactionData([
          {
            id: '#5327',
            name: 'Total supply',
            date: Number(max_supply).toLocaleString(),
            avatarColor: '#fa8c16'
          },
          {
            id: '#5328',
            name: 'Circulating supply',
            date: Number(circulatingSupply).toLocaleString(),
            avatarColor: '#04d182'
          },
          {
            id: '#5329',
            name: 'Burnt token',
            date: Number(burntToken).toLocaleString(),
            avatarColor: '#ffc542'
          }, {
            id: '#5330',
            name: 'Burning rate',
            date: 2 + ' %',
            avatarColor: '#04d182'
          },
          {
            id: '#5331',
            name: 'Pancakeswap Price',
            date: '$ ' + pancakeswap_price,
            avatarColor: '#04d182'
          },
          {
            id: '#5332',
            name: '24H Volume',
            date: '$ ' + Number(volumePerDay).toLocaleString(),
            avatarColor: '#fa8c16'
          },
          {
            id: '#5333',
            name: 'Liquidity',
            date: '$ ' + Number(liquidity).toLocaleString(),
            avatarColor: '#1890ff'
          },
          {
            id: '#5334',
            name: 'Holders',
            date: Number(holders).toLocaleString(),
            avatarColor: '#ffc542'
          },
          {
            id: '#5335',
            name: 'Market Cap(Fully Dilluted)',
            date: '$ ' + Number(marketcapFull).toLocaleString(),
            avatarColor: '#ff6b72'
          },
          {
            id: '#5336',
            name: 'All-Time High',
            date: '$ ' + ath,
            avatarColor: '#ff6b72'
          }]);
      })
      .catch(err => {
        console.log(err + "first--------------------------");
      });
  };

  const getAccount = async () => {
    var accounts, account;
    accounts = await window.ethereum.request({ method: 'eth_accounts' });
    account = accounts[0];
    return account;
  }

  const getBalance = async () => {
    const provider = new Web3(window.web3.currentProvider);
    var D3Contract = new provider.eth.Contract(D3ContractABI, tokenAddress);
    D3Contract.methods.balanceOf(deadAddress).call().then(res => {
      setburntToken(res);
    }).catch(err => {

      console.log(err);
    });
  };

  const ethEnabled = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);
      return true;
    }
    return false;
  }

  const connectWallet = () => {
    if (typeof web3 === 'undefined') {
      setAlertVisible(true);
      return;
    }
    if (!ethEnabled()) {
      initWallet();
      return true;
    }
    return false;
  }

  const initWallet = async () => {

    await getAccount().then(res => {

      const _currentAccount = res;
      console.log("my account address = ", res);
      setCurrentAccountAddress(_currentAccount);
    }).catch(err => {
      console.log(err);
    });
  }
  
  const intervalFunc = () => {
    if (typeof web3 === 'undefined')
      return;
    if ((currentAccountAddress === undefined || currentAccountAddress === '0')) {
      if (currentAccountAddress === undefined)
        setCurrentAccountAddress('0');
      initWallet();
    }
  }

  useEffect(() => {
    connectWallet();
    intervalFunc();
    getBalance();
    getData();
    setInterval(() => {
      getBalance();
      getData();
    }, MINUTE_MS);

  }, [manualburntToken]);

  return (
    <>
      <Row gutter={16}>
        <Col xs={32} sm={32} md={32} lg={16} className="mx-auto">
          <Row gutter={40}>
            {
              annualStatisticData.map((elm, i) => (
                <Col xs={24} xl={12} key={i}>
                  <StatisticWidget
                    title={elm.title}
                    prefix={elm.prefix}
                    value={elm.value}
                    status={elm.status}
                    subtitle={elm.subtitle}
                  />
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
    </>
  )
}


export default withRouter(DefaultDashboard);
