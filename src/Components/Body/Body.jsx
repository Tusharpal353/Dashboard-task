import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import { useSelector } from 'react-redux';


const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    
    <div className='flex'>
      <Sidebar className={`${isMenuOpen ? 'flex-grow' : 'flex-grow-0'}`} />
      <Dashboard className={isMenuOpen ? 'flex-grow' : 'w-full'} />
    </div>
  )
}

export default Body