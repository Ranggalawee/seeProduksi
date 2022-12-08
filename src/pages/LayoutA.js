import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/navbar'
import Footer from '../components/footer'

const LayoutA = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayoutA