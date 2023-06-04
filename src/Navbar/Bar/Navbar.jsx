import React from 'react'
import Header from '../Header/Header'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <Header/>
        <nav>
      <ul className='navbar'>
      <li><NavLink to='/' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>HOME</NavLink></li>
      <li><NavLink to='/bollywood' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>BOLLYWOOD</NavLink></li>
      <li><NavLink to='/hollywood' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>HOLLYWOOD</NavLink></li>
      <li><NavLink to='/technology' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>TECHNOLOGY</NavLink></li>
      <li><NavLink to='/fitness' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>FITNESS</NavLink></li>
      <li><NavLink to='/food' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>FOOD</NavLink></li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar