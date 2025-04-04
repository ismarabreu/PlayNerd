import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from './contexts/UserContext.jsx'
import './index.css'
import Body from './Body.jsx'
import Header from './pages/header/Header.jsx'
import Footer from './pages/footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <Header />
      <Body />
      <Footer />
    </UserProvider>
  </StrictMode>,
)
