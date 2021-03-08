import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

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
      <Link to='/projects'>Back to all projects</Link>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
    </Layout>
  )
}

export default Project
