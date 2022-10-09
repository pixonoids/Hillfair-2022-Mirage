import React from 'react'
import {AboutMini,Contact,Footer,ReaderDigest,Newsletter} from '../../components/organisms'
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
