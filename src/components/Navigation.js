import React from 'react'
import Menu from './Menu'
import "../styles/Navigation.scss"
import logo from '../images/instagramLogo.png'
import searchIcon from '../images/searchIcon.png'
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className='navigation'>
        <div className='container'>
            <img className='logo' src={logo} alt="ig logo" onClick={() => navigate("/")}/>
            <div className='search'>
            <img className="searchIcon" src={searchIcon} alt='search logo'/>
            <span className='searchText'>Search</span>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default Navigation