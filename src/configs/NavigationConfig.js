import {
  DashboardOutlined,
  WalletOutlined,
  MonitorOutlined,
  DotChartOutlined,
  ControlOutlined,
  LikeOutlined,
  GiftOutlined,
  ShoppingCartOutlined,
  TwitterOutlined,
  TeamOutlined,
  EyeOutlined,
  LinkOutlined,
  MediumOutlined,
  FundViewOutlined,
  GithubOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'dashboard',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: true,
  submenu: [
    {
      key: 'dashboard-analytic',
      path: `${APP_PREFIX_PATH}/dashboards/analytic`,
      title: 'sidenav.dashboard.analytic',
      icon: DotChartOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-airdrops',
      path: `${APP_PREFIX_PATH}/dashboards/airdrops`,
      title: 'sidenav.dashboard.airdrops',
      icon: GiftOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-stake',
      path: `${APP_PREFIX_PATH}/dashboards/stake`,
      title: 'sidenav.dashboard.stake',
      icon: ControlOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboard-bond',
      path: `${APP_PREFIX_PATH}/dashboards/bond`,
      title: 'sidenav.dashboard.bond',
      icon: LikeOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'defi',
          path: `${APP_PREFIX_PATH}/dashboards/bond/bond1`,
          title: 'sidenav.dashboard.bond.defi',
        },
        {
          key: 'sdefi',
          path: `${APP_PREFIX_PATH}/dashboards/bond/bond2`,
          title: 'sidenav.dashboard.bond.sdefi',
        }
      ]
    },
    {
      key: 'dashboard-docs',
      path: `${APP_PREFIX_PATH}/dashboards/docs`,
      title: 'sidenav.dashboard.docs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const linksNavTree = [{
  key: 'links',
  path: `${APP_PREFIX_PATH}/links`,
  title: 'sidenav.links',
  icon: LinkOutlined,
  breadcrumb: true,
  submenu: [
    {
      key: 'links-pancakeswap',
      path: `${APP_PREFIX_PATH}/links/pancakeswap`,
      title: 'sidenav.links.pancakeswap',
      icon: '',
      iconURL: "https://assets.coingecko.com/coins/images/12632/thumb/pancakeswap-cake-logo_%281%29.png?1629359065",
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'links-twitter',
      path: `${APP_PREFIX_PATH}/links/twitter`,
      title: 'sidenav.links.twitter',
      icon: TwitterOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'links-telegram',
      path: `${APP_PREFIX_PATH}/links/telegram`,
      title: 'sidenav.links.telegram',
      icon: '',
      iconURL: "/img/icon/telegram.png",
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'links-medium',
      path: `${APP_PREFIX_PATH}/links/medium`,
      title: 'sidenav.links.medium',
      icon: MediumOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'links-github',
      path: `${APP_PREFIX_PATH}/links/github`,
      title: 'sidenav.links.github',
      icon: GithubOutlined,
      breadcrumb: true,
      submenu: []
    }
  ]
}]
const navigationConfig = [
  ...dashBoardNavTree,
  ...linksNavTree
]

export default navigationConfig;
