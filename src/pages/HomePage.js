import React from 'react'
import '../styles/App.scss';
import Cards from '../components/Cards';
import SideBar from '../components/SideBar';

const HomePage = () => {
    const Username = "vladbunny__2"
  return (
    <div className="App">
      <main>
        <div className='container'>
          <Cards Username={Username}/>
          <SideBar Username={Username}/>
        </div>
      </main>
    </div>
  );
}

export default HomePage