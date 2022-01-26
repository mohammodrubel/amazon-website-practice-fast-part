import React from 'react';
import { FormControl, Nav, NavLink } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='container-fluid'>
            <div style={{textAlign:'center'}}><img src={logo} className='logo' alt="" /></div>
             <Nav className="me-auto" style={{background:'black'}}>
                <NavLink style={{color:'white'}} to="/shop">Shop</NavLink>
                <NavLink style={{color:'white'}} to="/home">Order Review</NavLink>
                <NavLink style={{color:'white'}} to="/home">Manage Inventory</NavLink>
            </Nav>
            <div class='fromControlsbackground'>
            <form action="" className='col-md-8 col-sm-6 col-12 mx-auto p-3 d-flex'>
            <input type="text" className='form-control' /><span><i style={{color:'white',marginTop:'10px'}} class="fas fa-shopping-cart"></i></span>
            </form>
            
            </div>
        </div>
    );
};

export default Header;