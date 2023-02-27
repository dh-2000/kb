import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './index.scss'

export default function index() {
  return (
    <div className='smart-park'>
      <h1>智慧园区</h1>
      <div className='nav-list'>
        <div>
          <NavLink to='/smartpark/aqsc'>安全生产</NavLink>
        </div>
        <div>
          <NavLink to='/smartpark/jnhb'>节能环保</NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
