import React from 'react'
import "./profile.css";
import Feed from '../../components/feed/Feed';
import Navbar from '../../components/navbar/Navbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';

const Profile = () => {
  return (
   <>
    
    <Navbar/>
     <div className="profile">
     <Sidebar/>
     <div className="profileRight">
        <div className="profileRightTop">
            <img className="profileCoverImg" src="assets/share/4.jpeg" alt="" />
        </div>
        <div className="profileRightBottom">
        <Feed/>
        <Rightbar/>
 
        </div>
     </div>
     </div>
   </>
  );
}

export default Profile