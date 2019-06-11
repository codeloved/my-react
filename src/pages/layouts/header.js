import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

class Header extends Component {
  render() {
    return(
      <div>
        <NavLink className='link' to='/' exact activeClassName='selected'>Home</NavLink>
        <NavLink className='link' to='/about' activeClassName='selected'>About</NavLink>
        <NavLink className='link' to='/topics' activeClassName='selected'>Topics</NavLink>
      </div>
    )
  }
}

export default Header