import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'

import * as projectStyles from './styles/project.module.scss'

const ProjectPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              thumbnail {
                publicURL
              }
              title
              github
              url
              tagline
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const renderedList = () => {
    return data.allMarkdownRemark.edges.map(edge => {
      return (
        <li>
          <div className={projectStyles.projectCard}>
            <div className={projectStyles.cardImage}>
              <Link to={`/projects/${edge.node.fields.slug}`} className={projectStyles.cardLink}>
                <img src={edge.node.frontmatter.thumbnail.publicURL} alt={edge.node.frontmatter.title} className={projectStyles.thumbnail}></img>
              </Link>
            </div>
            <div className={projectStyles.info}>
              <h2>
                <Link to={`/projects/${edge.node.fields.slug}`} className={projectStyles.cardTitle}>
                  {edge.node.frontmatter.title}
                </Link>
              </h2>
              <p>{edge.node.frontmatter.tagline.substring(0, 50)}...</p>
              <div className={projectStyles.projectLinks}>
                <a href={edge.node.frontmatter.url} target='_blank' rel='noreferrer' className={projectStyles.link}>Visit Site</a>
                <a href={edge.node.frontmatter.github} target='_blank' rel='noreferrer' className={projectStyles.link}>Visit Github Repo</a>
              </div>
            </div>
          </div>
        </li>
      )
    })
  }

  return (
    <Layout>
      <Head title='Projects'/>
      <div className={projectStyles.container}>
        <h2 className={projectStyles.title}>My Projects</h2>
        <div>
          <ol className={projectStyles.list}>
            {renderedList()}
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
