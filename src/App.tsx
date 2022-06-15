import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { OrdersRoutes } from './components/_templates/Orders/OrdersRoutes'
import AppRoutes from './router/AppRotes'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
