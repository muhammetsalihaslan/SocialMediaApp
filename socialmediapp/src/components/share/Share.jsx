import React from 'react'
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';

const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/3.jpeg" alt="" />
                <input className="shareInput" placeholder="Whats in your mind" />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <PermMediaIcon className="shareIcon"/>
                    <span className="shareOptionText">
                        Photo or Video
                    </span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Share