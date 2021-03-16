import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

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
        <div className={projectStyles.projectCard}>
          <div className={projectStyles.cardImage}>
            <Link to={`/projects/${edge.node.fields.slug}`}>
              <img src={edge.node.frontmatter.thumbnail.publicURL} alt={edge.node.frontmatter.title}></img>
            </Link>
          </div>
          <div className={projectStyles.info}>
            <h3>
              <Link to={`/projects/${edge.node.fields.slug}`} className={projectStyles.cardTitle}>
                {edge.node.frontmatter.title}
              </Link>
            </h3>
            <Link to={`/projects/${edge.node.fields.slug}`} className={projectStyles.button}>Find out more</Link>
            <div className={projectStyles.projectLinks}>
              <a href={edge.node.frontmatter.url} target='_blank' rel='noreferrer' className={projectStyles.link}><FaExternalLinkAlt /></a>
              <a href={edge.node.frontmatter.github} target='_blank' rel='noreferrer' className={projectStyles.link}><FaGithub /></a>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <Layout>
      <Head title='Projects'/>
      <div className={projectStyles.container}>
        <h2 className={projectStyles.title}>My Projects</h2>
        <div className={projectStyles.grid}>
          {renderedList()}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectPage
