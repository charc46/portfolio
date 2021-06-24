import React, { useState } from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'

import * as contactStyles from './styles/contact.module.scss'

const router = require('@reach/router')

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const formData = {
    name,
    email,
    subject,
    message
  }

  const formSubmit = (e) => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded"},
      body: encode({ "form-name": "contact", ...formData})
    })
    .then(() => alert('success'))
    .catch(error => alert(error));
  }

  return (
    <Layout>
      <Head title='Contact'/>
      <div className={contactStyles.container}>
        <h2 className={contactStyles.title}>Contact Me</h2>
        <form name="contact" method="post" data-netlify={true} netlify-honeypot="bot-field" action='/thanks' onSubmit={() => formSubmit()} >
          <input required type="name" name="name" placeholder='Your Name' className={contactStyles.name} onChange={e => setName(e.target.value)} />
          <input required type="email" name="email" placeholder='Your Email' className={contactStyles.email} onChange={e => setEmail(e.target.value)} />
          <input required type="subject" name="subject" placeholder='Subject' className={contactStyles.name} onChange={e => setSubject(e.target.value)} />
          <textarea required name='message' rows='5' cols='20' placeholder='Talk to me..' className={contactStyles.message} onChange={e => setMessage(e.target.value)} />
          <button className={contactStyles.button}>Send</button>
          <input type="hidden" name="form-name" value="contact" />
          <input type='hidden' name="bot-field" placeholder="Don’t fill this out if you’re human:" />
        </form>
      </div>
    </Layout>
  )
}

export default Contact
