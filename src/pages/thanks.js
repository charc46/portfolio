import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

import * as thanksStyles from './styles/thanks.module.scss'

const contact = () => {
  return (
    <Layout>
      <Head title='Contact'/>
      <div className={thanksStyles.container}>
        <h2 className={thanksStyles.title}>Thanks for the message, i'll get back to you soon!</h2>
        <Link to='/' className={thanksStyles.link}>Back home</Link>
      </div>
    </Layout>
  )
}

export default contact
