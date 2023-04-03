import React from 'react';
import './index.scss';
import { NavLink,Outlet } from 'react-router-dom';

export default function index() {
  return (
    <div className='digital-workshop'>
      {/* <h1>数字车间</h1> */}
      <div className='container'>
        {/* <h1>智慧园区</h1> */}
        <div className='nav-list'>
          <div>
            <NavLink to='/digitalworkshop/arjbz'>ARJ部装</NavLink>
          </div>
          <div>
            <NavLink to='/digitalworkshop/arjzz'>ARJ总装</NavLink>
          </div>
          <div>
            <NavLink to='/digitalworkshop/c919bz'>C919部装</NavLink>
          </div>
          <div>
            <NavLink to='/digitalworkshop/c919zz'>C919总装</NavLink>
          </div>
          <div>
            <NavLink to='/digitalworkshop/cnc'>数控机加</NavLink>
          </div>
          <div>
            <NavLink to='/digitalworkshop/compositematerial'>复材</NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
