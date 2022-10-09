import React from 'react'
import {AboutMini,Contact,Footer} from '../../components/organisms'
import Newsletter from '../../components/organisms/Newsletter/Newsletter'
import ReaderDigest from '../../components/organisms/ReaderDigest/ReaderDigest'
import './Home.scss'

export default function Home() {
  return (
    <div className='home'>
        <AboutMini/>
         <div className='funFactNewsletter'><ReaderDigest/><Newsletter/></div>
        <Contact/>
        <Footer/>
    </div>

   

  )
}
