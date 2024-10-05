import React from 'react'
  import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx'

export default function AdminLayout() {
  return (
    < > 
    <Navbar/>
    <Sidebar/>
    <Outlet/>
    
    </ >
  )
}
