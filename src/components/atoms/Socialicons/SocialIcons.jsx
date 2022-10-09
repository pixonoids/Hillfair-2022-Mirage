import React from 'react'
import {BsInstagram,BsFacebook,BsYoutube} from 'react-icons/bs'
import './SocialIcons.scss'

export default function () {
  return (
    <div className='socialicons'>
        <ul class="glowingIcons">
  <li>
    <a href="https://www.instagram.com/hillffair_nith/" target="_blank" >
   <BsInstagram/>
    </a>
  </li>
  <li>
    <a href="https://www.facebook.com/hillffair" target="_blank">
    <BsFacebook/>
    </a>
    </li>
  <li>
    <a href="https://www.youtube.com/channel/UC1Dui20MXzSfiyFB97yCElQ" target="_blank">
     <BsYoutube/>
    </a>
    
  </li>
</ul>
    </div>
  )
}
