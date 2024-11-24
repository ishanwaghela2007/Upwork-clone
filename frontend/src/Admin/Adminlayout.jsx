import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const Adminlayout = () => {
  return (
  <>
     <Outlet/>
     <Footer/>
  </>  
  )
}

export default Adminlayout