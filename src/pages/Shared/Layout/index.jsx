import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { LayoutProvider } from './context/layoutContext'

function Layout () {
  return (
    <LayoutProvider>
      <div className='min-h-screen'>
        <Menu />

        <div className='justify-center items-center py-4 px-6 xl:px-0 xl:pr-6 xl:pl-4 xl:ml-80'>
          <div className='container mx-auto'>
            <Navbar />

            <Outlet />
          </div>
        </div>
      </div>
    </LayoutProvider>
  )
}

export default Layout
