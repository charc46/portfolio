import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'
import * as blogStyles from './styles/blog.module.scss'

const blog = () => {
  return (
    <Layout>
      <Head title='Blog' />
      <div className={blogStyles.container}>
        <h2 className={blogStyles.title}>Blog coming soon!</h2>
      </div>
    </Layout>
  )
}

export default blog
