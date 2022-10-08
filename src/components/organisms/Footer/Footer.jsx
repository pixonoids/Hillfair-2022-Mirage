import React from 'react'
import './Footer.scss'
import { SocialIcons } from '../../atoms'
import {AiOutlineCopyright} from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='footer'>
    <div className="all">
    <div className="logos">
    <a href='https://nith.ac.in/' target="_blank">
    <img src='/images/nith.png' alt='nith' className='nith'/>
    </a>
    <a href='https://www.instagram.com/pixonoids/' target="_blank">
    <img src='/public/images/pixonoids_logo_color.png' alt='pixonoids' className='pixo'/>
    </a>
    </div>
    <SocialIcons/>
    </div>
    <p className='copyright'><AiOutlineCopyright/>&nbsp;Copyright Hill'ffair 2k22</p>
    </div>
  )
}
