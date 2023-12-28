import React from 'react'
import '../styles/sidebar.scss'
import Sticky from 'react-sticky-el'
import Profile from './Profile'
import Suggestions from './Suggestions'
import Footer from './Footer'
import image from '../images/profile.jpeg'
import { Link } from 'react-router-dom'

const SideBar = ({Username}) => {
  return (
    <div className='sidebar'>
        <Sticky topOffset={-80}>
            <div>
                <Link to='/profile'><Profile username={Username} 
                caption="Vlado Chavez" 
                urlText='Switch' 
                iconSize="big"
                 image={image}/></Link>
                 <Suggestions/>
                 <Footer/>
            </div>

        </Sticky>
    </div>
  )
}

export default SideBar