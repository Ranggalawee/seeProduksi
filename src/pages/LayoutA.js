import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/navbar'

const LayoutA = () => {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    )
}

export default LayoutA