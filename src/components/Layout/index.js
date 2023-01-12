import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './layout.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
        
        <Outlet /> 
      </div>
  )
}

export default Layout