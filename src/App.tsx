import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router/AppRotes'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
