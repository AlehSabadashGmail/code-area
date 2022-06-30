import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { routes } from 'src/router/Config/config.routes'
import { HomeOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { ILayoutType } from './LayoutPage.d'
import './LayoutPage.scss'

export const LayoutPage = ({ children }: ILayoutType) => {
  const { Header, Content } = Layout
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link to={routes.default}>
              <HomeOutlined />
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={routes.usersList}>Users List</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={routes.ordersList}>Orders List</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={routes.tasks}>Tasks</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={routes.profile}>
              <UserOutlined />
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={routes.login}>
              <LogoutOutlined />
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="content">{children}</Content>
    </Layout>
  )
}
