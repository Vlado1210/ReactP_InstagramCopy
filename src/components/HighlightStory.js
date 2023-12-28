import React from 'react'
import '../styles/highlightstory.scss'
import ProfileIcon from './ProfileIcon'
import users from '../data/users'


const Story = ({Username, image}) => {

  let accountName = Username ? Username : users[Math.floor(Math.random() * users.length)].username;


    if (accountName.length > 10) {
      accountName = accountName.substring(0, 10) + "...";
    }  
  return Username ? (
    <div className="story ownProfile">
      <ProfileIcon iconSize="big" storyBorder={true} image={image} />
      <span className="accountName">{accountName}</span>
    </div>
  ) : (
    <div className="highlightstory">
      <ProfileIcon iconSize="big" storyBorder={true} />
      <span className="accountName">{accountName}</span>
    </div>
  );
}

export default Story