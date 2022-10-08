import React from 'react'
import {AboutMini,Contact,Footer} from '../../components/organisms'
import './Home.scss'

export default function Home() {
  return (
    <div className='home'>
        <AboutMini/>
        <Contact/>
        <Footer/>
    </div>
  )
}
