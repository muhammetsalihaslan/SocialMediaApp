import React from 'react'
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
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
                    <div className="shareOption">

                    <PermMediaIcon className="shareIcon"/>
                    <span className="shareOptionText">
                        Photo or Video
                    </span>
                    </div>
                    <div className="shareOption">

                    <LabelIcon className="shareIcon"/>
                    <span className="shareOptionText">
                      Tag
                    </span>
                    </div>
                    <div className="shareOption">

                    <RoomIcon className="shareIcon"/>
                    <span className="shareOptionText">
                        Locations
                    </span>
                    </div>
                    <div className="shareOption">

                    <EmojiEmotionsIcon className="shareIcon"/>
                    <span className="shareOptionText">
                        Feeling
                    </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Share