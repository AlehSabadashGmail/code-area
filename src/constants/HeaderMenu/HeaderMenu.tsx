import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { Header } from 'antd/lib/layout/layout'
import { routes } from 'src/router/Config/config.routes'
import { HomeOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons'

export const HeaderMenu = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key={routes.default}>
          <Link to={routes.default}>
            <HomeOutlined />
          </Link>
        </Menu.Item>
        <Menu.Item key={routes.usersList}>
          <Link to={routes.usersList}>Users List</Link>
        </Menu.Item>
        <Menu.Item key={routes.ordersList}>
          <Link to={routes.ordersList}>Orders List</Link>
        </Menu.Item>
        <Menu.Item key={routes.tasks}>
          <Link to={routes.tasks}>Tasks</Link>
        </Menu.Item>
        <Menu.Item key={routes.profile}>
          <Link to={routes.profile}>
            <UserOutlined />
          </Link>
        </Menu.Item>
        <Menu.Item key={routes.login}>
          <Link to={routes.login}>
            <LogoutOutlined />
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}
