import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'

import * as indexStyles from './styles/index.module.scss'

const Home = () => {
  return (
    <Layout>
      <Head title='Home'/>
      <div className={indexStyles.indexContainer}>
        <h2>Hello, i'm Charles.<br/> A Full Stack Web Developer from London.</h2>
        <p>I have experience with Ruby and Ruby on Rails and I have recently been working more with Javascript and React.
          I am currently delving further into the Javascript ecosystem learning more about Full Stack Development with NodeJS.<br /> I am eager to carry on learning more about Javascript development as well as improving my Ruby on Rails skills.<br />
          I love food. I love coffee. I love to travel. And of course I love all things techy.</p>
          <p>Take a look at some of my <Link className={indexStyles.link} to='/projects'>projects</Link> and feel free to <Link className={indexStyles.link} to='/contact'>send me a message</Link> if you have any questions!</p>
      </div>
    </Layout>
  )
}

export default Home