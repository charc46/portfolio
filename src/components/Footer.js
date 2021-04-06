import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


import * as footerStyles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <ul className={footerStyles.socials}>
        <li className={footerStyles.socialLink}><a href="https://github.com/charc46" target="_blank" rel="noreferrer"><FaGithub /></a></li>
        <li className={footerStyles.socialLink}><a href="https://linkedin.com/in/charc46" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
      </ul>
      <p className={footerStyles.copyright}>© Charles Crane 2021</p>
    </footer>
  )
}

export default Footer
