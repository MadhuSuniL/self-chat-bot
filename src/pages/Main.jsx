import React from 'react'
import Header from '../Components/Main/Header'
import Projects from '../Components/Main/Projects'
import '../assets/style.css'
import Clients from '../Components/Main/Clients'
import Stats from '../Components/Main/Stats'
import Experience from '../Components/Main/Experience'
import Skills from '../Components/Main/Skills'
import Madhu from '../Madhu'
import Footer from '../Components/Main/Footer'
import Chats from '../Components/Main/Chats'

const Main = () => {
  return (
    <div id='main' style={{scrollBehavior: 'smooth'}} className='bg-[rgb(230,230,230)] h-screen overflow-auto relative'>
        <div className='fixed bg-gradient2 h-screen w-screen'/>
        <div className='absolute z-60 w-full'>
            <Header/>
            <div className='bg-[rgb(230,230,230)] w-full absolute'>
              <Projects/>
              <Experience/>
              <Skills/>
              <Clients/>
              <Stats/>
              <Chats/>
              <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Main


