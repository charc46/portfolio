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
        <h1>Hello. <span className={indexStyles.wave} role="img">👋🏼</span></h1>
        <div className={indexStyles.me}> 
          <h3>I'm Charles, a Full Stack Web Developer from London.</h3>
        </div>
        <p>After travelling the world working on Private Yachts I started to teach myself to code during 2019 and quickly discovered I had a real passion for it.<br /> 
        Being able to have an idea and watch it come together as I build it was a feeling I had never experienced before.</p>

        <p>I decided to attend a bootcamp in London at the end of 2020 to give my learning a boost and meet other like-minded people!</p>

        <p>Thanks to my learning and projects completed during the bootcamp I have experience with Ruby on Rails. HTML, CSS/Sass, PostgreSQL, deploying to Heroku and using git and Github in a remote, team based workflow.</p>

        <p>I have recently been working more with Javascript and React and have been delving further into full stack development with Javascript.</p>

        <p>I love food.<br/> I love coffee.<br/> I love to travel.<br/> And of course I love all things techy.</p>
        
        <p>Take a look at some of my <Link className={indexStyles.link} to='/projects'><strong>projects</strong></Link> and feel free to <Link className={indexStyles.link} to='/contact'><strong>send me a message</strong></Link> if you have any questions!</p>
      </div>
    </Layout>
  )
}

export default Home