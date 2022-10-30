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
            <div className="profileCover">

            <img className="profileCoverImg" src="assets/share/11.jpeg" alt="" />
            <img className="profileUserImg" src="assets/person/1.jpeg" alt="" />
            
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Salih ASLAN</h4>
                <span className="profileInfoDesc">Hello its my page</span>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
        <Rightbar profile/>
 
        </div>
     </div>
     </div>
   </>
  );
}

export default Profile