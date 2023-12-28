import React from 'react'
import ProfileIcon from '../components/ProfileIcon'
import '../styles/profilePage.scss'
import HorizontalScroll from 'react-scroll-horizontal'
import HighlightStory from '../components/HighlightStory'
import { useState } from 'react'
import profilepic from '../images/profile.jpeg'
import { PICS } from '../data/pics'

const ProfilePage = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [buttonText, setButtonText] = useState("Follow");
  const [photos, setPhotos] = useState(PICS);
  

  // const newPhoto = () =>{
  //   setPhotos([...photos, {pimage:profilepic}])
  //   console.log(photos)
  // }
  const newPhoto = (e) =>{
    const file = e.target.files[0];
    if (file) {
      setPhotos([...photos, { pimage: URL.createObjectURL(file) }]);
    }
  }
  const handleClick = () =>{
    setIsFollowed(!isFollowed)
    if(isFollowed === true){
      setButtonText("Follow")
    }
    else{
      setButtonText("Following")
    }
  }
  return (
    <div className='profilePage'>
      <main>
        <div>
        <div className='profileHeader'>
        <ProfileIcon iconSize='giga' storyBorder={false} image={profilepic} />
        <div className='profileInfo'>
          <div className='profileButtons'><h1>Vlado Chavez</h1>
          <button onClick={handleClick} className={isFollowed ? 'followed' : 'follow'}>{buttonText}</button>
          <button className={isFollowed ? 'followed' : 'follow'}><input
                  id='file-upload'
                  type='file'
                  accept='image/*'
                  onChange={newPhoto}
                  style={{ opacity: 0, position: "absolute" }}
                />^</button></div>
          <div className='profileFollowers'><p><b>23</b> posts</p> <p><b>956</b> followers</p><p><b>1057</b> following</p></div>
          <p><b>XXIII Puebla,mx</b></p>
        </div>
        </div>
        <div className='highlightStories'>
        <HorizontalScroll className='scroll' reverseScroll={true}>
            <HighlightStory/>
            <HighlightStory/>
            <HighlightStory/>
            <HighlightStory/>
            <HighlightStory/>
            <HighlightStory/>
            <HighlightStory/>
        </HorizontalScroll>
        </div>
        <div className='profilePictures'>
          {photos.map((pic)=>{
            return(<img src={pic.pimage} alt='noup'/>)
          })}
        </div>
        </div>
        </main>
    </div>
  )
}

export default ProfilePage