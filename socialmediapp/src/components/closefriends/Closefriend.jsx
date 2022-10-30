import React from 'react'
import "./closefriend.css";

const Closefriend = ({user}) => {
  return (
     
     <>
     
     <img className="closeFriendImg" src={user.profilePicture} alt="" />
     <span className="closeFriendName">{user.username}</span>
     
     
     </>
       

  )
       

     
}

export default Closefriend