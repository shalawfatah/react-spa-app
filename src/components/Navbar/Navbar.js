
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="topnav" id="myTopnav">
            <Link className="active" to='/'>Home</Link>
            <Link to='/news'>News</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i className="fa fa-bars"></i>
            </a>
            </div>

            <div style={{paddingLeft:'16px'}}>
            </div>
        </div>
    )
}

export default Navbar
