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
        <h1>Hello.</h1>
        <h3>I'm Charles, a Full Stack Web Developer from London.</h3>

        <p>After travelling the world working on Private Yachts I started to teach myself to code during 2019 and quickly discovered I had a real passion for it.<br /> 
        Being able to have an idea and watch it come together as I build it was a feeling I had never experienced before.</p>

        <p>I decided to attend a bootcamp in London at the end of 2020 to give my learning a big boost and meet other like-minded people!</p>

        <p>Thanks to my learning and projects completed during the bootcamp I have experience with Ruby on Rails. HTML, CSS/Sass, PostgreSQL, deploying to Heroku and using git and Github in a remote, team based workflow.</p>

        <p>I have recently been working more with Javascript and React and have been delving further into the Javascript ecosystem learning more about Full Stack Development with the Javascript stack.<br /> I am eager to carry on learning more about Javascript development as well as improving my Ruby on Rails skills.</p>

        <p>I love food. I love coffee. I love to travel. And of course I love all things techy.</p>
        
        <p>Take a look at some of my <Link className={indexStyles.link} to='/projects'><strong>projects</strong></Link> and feel free to <Link className={indexStyles.link} to='/contact'><strong>send me a message</strong></Link> if you have any questions!</p>
      </div>
    </Layout>
  )
}

export default Home