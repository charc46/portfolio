import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'

import { FaArrowLeft } from 'react-icons/fa'

import * as projectTemplateStyles from './projectTemplate.module.scss'

// Pass dynamic graphql query response to our components props
export const query = graphql`
  query ($slug: String!) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        url
      }
      html
    }
  }
`
const Project = (props) => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <p><Link to='/projects' className={projectTemplateStyles.link}><FaArrowLeft /> Back to all projects</Link></p>
      <div className={projectTemplateStyles.container}>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
      </div>
    </Layout>
  )
}

export default Project
