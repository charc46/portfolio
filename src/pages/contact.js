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
        <form action="https://formsubmit.co/75ed5f5db89f263d8d669d44e761e8b5" method="POST" >
          <input type="name" name="name" placeholder='Your Name' className={contactStyles.name} />
          <input type="subject" name="subject" placeholder='Subject' className={contactStyles.name} />
          <input type="email" name="email" placeholder='Your Email' className={contactStyles.email} />
          <textarea name='message' rows='5' cols='20' placeholder='Talk to me..' className={contactStyles.message} />
          <button className={contactStyles.button}>Send</button>
          <input type="text" name="_honey" style={{display:'none'}} />
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_next" value="https://www.charlescrane.co.uk/thanks"></input>
        </form>
      </div>
    </Layout>
  )
}

export default contact
