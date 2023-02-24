import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss';

export default function index() {
  return (
    <div className='header'>
      <div className='left-top'>
          <div className='logo'>
              
          </div>
          <div className='nav-list'>
            <div className='nav-btn'>
                <NavLink to='/smartpark'>智慧园区</NavLink>
            </div>
            <div className='nav-btn'>
                <NavLink to='/digitalaircraft'>数字飞机</NavLink>
            </div>
            <div className='nav-btn'>
                <NavLink to='/digitalworkshop'>数字车间</NavLink>
            </div>
          </div>
      </div>
      <div className='right-top'>
          <div className='time'>
              <span>14:47:05</span>
          </div>
          <div className='date'>
              <span>二月22日</span>
          </div>
          <div className='tq'>
              <span>多云</span>
          </div>
      </div>
    </div>
  )
}
