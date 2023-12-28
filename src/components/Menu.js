import React from 'react'
import "../styles/Menu.scss"
import { ReactComponent as Home } from '../images/home.svg'
import { ReactComponent as Inbox } from '../images/inbox.svg'
import { ReactComponent as Explore } from '../images/explore.svg'
import { ReactComponent as Notifications } from '../images/notifications.svg'
import ProfileIcon from './ProfileIcon'
import image from "../images/profile.jpeg"
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu'>
        <Link to='/'><Home className='icon'/></Link>
        <Inbox className='icon'/>
        <Explore className='icon'/>
        <Notifications className='icon'/>
        <Link to='/profile'><ProfileIcon iconSize="small" image={image} storyBorder={true}/></Link>
    </div>
  )
}

export default Menu