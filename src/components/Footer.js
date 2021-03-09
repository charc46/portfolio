import React from 'react'

import * as footerStyles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.copyright}>© Charles Crane 2021</p>
    </footer>
  )
}

export default Footer
