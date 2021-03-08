import React from 'react'
import { Link } from 'gatsby'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import * as headerStyles from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h2 className={headerStyles.title}><Link to='/'>Charles<br/>Crane<br/>Dev</Link></h2>
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navList}>
          <li><Link to='/' className={headerStyles.navLink} activeClassName={headerStyles.active}>Home</Link></li>
          <li><Link to='/projects' className={headerStyles.navLink} activeClassName={headerStyles.active}>Projects</Link></li>
          <li><Link to='/contact' className={headerStyles.navLink} activeClassName={headerStyles.active}>Contact</Link></li>
          <li><Link to='/blog' className={headerStyles.navLink} activeClassName={headerStyles.active}>Blog</Link></li>
        </ul>
        <ul className={headerStyles.socials}>
          <li className={headerStyles.socialLink}><a href="https://github.com/charc46" target="_blank" rel="noreferrer"><FaGithub /></a></li>
          <li className={headerStyles.socialLink}><a href="https://linkedin.com/in/charc46" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
