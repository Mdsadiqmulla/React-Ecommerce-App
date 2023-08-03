import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../../Cart/Cart'
import cartContext from '../../contrext-store/contextAPI'
import './NavBar.css'


const NavBar = () => {

    const ctx=useContext(cartContext);

    // const loginHandler

    const logoutHandler=()=>{
        console.log(ctx);
        ctx.logout();
        console.log(ctx);
    }
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
            </NavLink>}
        {ctx.isLoggedIn && <NavLink className='nav-sub-com' to='/login'>
            <button type="button" className="btn btn-primary login-btn" onClick={logoutHandler}>Logout</button>
        </NavLink>}
        {/* <NavLink to='/cart'> */}
        <Cart />
            {/* <button type="button" className="btn btn-primary cart-btn">Cart</button> */}
        {/* </NavLink> */}
        <p className='cart-item-no'>
            {ctx.items.length}
        </p>
        </div>
    </div>
   </Fragment>
  )
}

export default NavBar