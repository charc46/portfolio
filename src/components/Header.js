import React from 'react'
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import * as headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Navbar expand="lg" className={headerStyles.nav} variant="dark">
        <h2 className={headerStyles.navTitleMobile}><Link to='/'>Charles<br/>Crane<br/>Dev</Link></h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id={headerStyles.toggler} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${headerStyles.navList}`}>
            <Link to='/' id={headerStyles.link} className={`${headerStyles.navLinks} nav-link`} activeClassName={headerStyles.active}>Home</Link>
            <Link to='/projects' id={headerStyles.link} className={`${headerStyles.navLinks} nav-link`} activeClassName={headerStyles.active}>Projects</Link>
            <h2 className={headerStyles.navTitle}><Link to='/'>Charles<br/>Crane<br/>Dev</Link></h2>
            <Link to='/contact' id={headerStyles.link} className={`${headerStyles.navLinks} nav-link`} activeClassName={headerStyles.active}>Contact</Link>
            <Link to='/blog' id={headerStyles.link} className={`${headerStyles.navLinks} nav-link`} activeClassName={headerStyles.active}>Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
