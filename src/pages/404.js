import React from 'react'
import { Link } from 'gatsby'
import { FaArrowLeft } from 'react-icons/fa'

import Layout from '../components/Layout'
import * as notFoundStyles from './styles/notFound.module.scss'

const NotFound = () => {
  return (
    <Layout>
      <div className={notFoundStyles.container}>
        <h2 className={notFoundStyles.title}>Oops.. that page doesnt exist!</h2>
        <Link to ='/' className={notFoundStyles.link}><FaArrowLeft /> Go back to a page that does</Link>
      </div>
    </Layout>
  )
}

export default NotFound
