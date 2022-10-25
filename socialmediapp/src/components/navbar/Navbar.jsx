import React from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
         <span className="logo">Salih's Friends</span>
      </div>
      <div className="navbarCenter">
         <div className="searchbar">
          <SearchIcon />
          <input placeholder="Search" className='searchInput' />
         </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLink">

        <span className="navbarLinks">Homepage</span>
        <span className="navbarLinks">Timeline</span>
        </div>
      <div className="navbarIcons">
        <div className="navbarIconItem">
          <PersonIcon/>
          <span className="navbarIconBadge">1</span>
        </div>
        <div className="navbarIconItem">
          <ChatIcon/>
          <span className="navbarIconBadge">2</span>
        </div>
        <div className="navbarIconItem">
          <NotificationsIcon/>
          <span className="navbarIconBadge">5</span>
        </div>
      </div>
      <img src="/assets/pp/1.jpeg" alt="" className="navbarImg" />
      </div>
    </div>
  )
}

export default Navbar