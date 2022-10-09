import React from 'react'
import Newsletter from '../../components/organisms/Newsletter/Newsletter'
import ReaderDigest from '../../components/organisms/ReaderDigest/ReaderDigest'
import './Home.scss'

export default function Home() {
  return (
    <div className='funFactNewsletter'><ReaderDigest/><Newsletter/></div>
  )
}
