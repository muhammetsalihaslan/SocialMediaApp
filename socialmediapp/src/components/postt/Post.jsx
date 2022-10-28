import React from 'react';
import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src="/assets/person/2.jpeg" alt="" />
                <span className="postUsername">Salih Aslan</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
             <MoreVertIcon/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey its my first post:) </span>
            <img src="assets/share/1.jpeg" alt="" />
        </div>
        <div className="postBottom"></div>
      </div>
    </div>
  )
}

export default Post