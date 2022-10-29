import React from 'react';
import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const Post = ({post}) => {
  console.log(post)
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
            <img className="postImg" src="assets/share/5.jpeg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <FavoriteIcon htmlColor="tomato" className="likeIcon"/>
                <ThumbUpAltIcon htmlColor="blue" className="likeIcon"/>
                <span className="postLikeCounter">32 poeple liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post