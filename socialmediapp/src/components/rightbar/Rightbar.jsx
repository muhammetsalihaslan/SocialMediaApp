import "./rightbar.css"
import { Users } from "../../data"
import Online from "../online/Online";


const Rightbar = ({profile}) => {

    const HomeRightbar = () => {
        return (
            <>
              <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/share/7.jpeg" alt="" />
                    <span> <b>Mahmut Tunç</b>  and <b>3 other friends</b>  have a birtday today</span>
                </div>
                <img className="rightbarAd"  src="assets/share/9.jpeg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                   
                        {Users.map(u => (
                            <Online key={u.id} user={u}/>
                        ))}
                    
                        
                    
                </ul>
            
            
            </>
        );
    };

    const ProfileRightbar = () => {
        return ( 
            <>
            <h4 className="rightbarTitle">
                User Information 
            </h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoKey">Mancester</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoKey">Monaco</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoKey">Single</span>
                </div>
            </div>
            
            <h4 className="rightbarTitle">User Friend</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Mesut Mesudiyeli</span>
                </div>
            </div>
            </>
         )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
               <ProfileRightbar/>
            </div>
            
        </div>
    )
}

export default Rightbar;