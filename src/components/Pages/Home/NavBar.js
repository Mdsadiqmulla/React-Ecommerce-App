import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {
  return (
   <Fragment>
    <div className='nav-main-div'>
        <div className='nav-sub-div'>
        <NavLink className='nav-sub-com' to='/'>Home</NavLink>
        <NavLink className='nav-sub-com' to='/store'>Store</NavLink>
        <NavLink className='nav-sub-com' to='/about'>About</NavLink>
        <NavLink className='nav-sub-com' to='/contact'>Contact</NavLink>
        <NavLink className='nav-sub-com' to='/login'>
            <button type="button" className="btn btn-primary login-btn">Login</button>
        </NavLink>
        <NavLink to='/cart'>
            <button type="button" className="btn btn-primary cart-btn">Cart</button>
        </NavLink>
        <p className='cart-item-no'>12</p>
        </div>
    </div>
   </Fragment>
  )
}

export default NavBar