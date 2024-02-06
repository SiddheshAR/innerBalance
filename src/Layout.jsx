import React from 'react'
import Navbar from "./components/HomePage-Components/Navbar/Navbar.jsx";
import Footer from './components/HomePage-Components/Footer/footer.jsx';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout