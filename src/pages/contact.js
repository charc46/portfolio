import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'

import * as contactStyles from './styles/contact.module.scss'

const contact = () => {
  return (
    <Layout>
      <Head title='Contact'/>
      <div className={contactStyles.container}>
        <h2 className={contactStyles.title}>Contact Me</h2>
        <form method="post" action="https://formspree.io/f/xrgongwz">
          <input type="name" name="name" placeholder='Your Name' className={contactStyles.name} />
          <input type="subject" name="subject" placeholder='Subject' className={contactStyles.name} />
          <input type="email" name="_replyto" placeholder='Your Email' className={contactStyles.email} />
          <textarea name='message' rows='5' cols='20' placeholder='Hit me up!' className={contactStyles.message} />
          <button className={contactStyles.button}>Send</button>
          <input type="text" name="_gotcha" style={{display:'none'}} />
        </form>
      </div>
    </Layout>
  )
}

export default contact
