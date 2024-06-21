
import './App.css'
import { Header } from './components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return(
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
export default Layout
