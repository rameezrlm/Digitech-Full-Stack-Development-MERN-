import React, { useState } from 'react'
import '../Styles/Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import theme from '../contextAPI/Theme'
export const Navbar = () => {
  const [theme,setTheme] = useState(false);
  return (
    <>
    <div className='nav-bar'>
        <img src={logo} alt="" />
        
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/students'}>Students</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/cgpa'}>Cgpa</Link></li>
            <li onClick={()=>setTheme(!theme)}>{theme ? '⚫' : '☀️'}</li>
        </ul>
    </div>
    </>
  )
}
