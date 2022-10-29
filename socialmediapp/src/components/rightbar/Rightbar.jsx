import "./rightbar.css"
import { Users } from "../../data"


const Rightbar = () => {
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/share/7.jpeg" alt="" />
                    <span> <b>Mahmut Tunç</b>  and <b>3 other friends</b>  have a birtday today</span>
                </div>
                <img className="rightbarAd"  src="assets/share/9.jpeg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">

                    
                        
                    </li>
                   
                </ul>
            </div>
            
        </div>
    )
}

export default Rightbar;