import { Content } from 'antd/lib/layout/layout'
import { BrowserRouter } from 'react-router-dom'
import { HeaderMenu } from './constants'
import AppRoutes from './router/AppRotes'

function App() {
  return (
    <BrowserRouter>
      <HeaderMenu />
      <Content>
        <AppRoutes />
      </Content>
    </BrowserRouter>
  )
}

export default App
