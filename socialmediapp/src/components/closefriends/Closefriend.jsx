import React from 'react'
import "./closefriend.css";

const Closefriend = ({user}) => {
  return (
     <li className="sidebarFriends">

       <div className="sidebarFriend">

        <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>

       </div>
        

     </li>
  )
}

export default Closefriend