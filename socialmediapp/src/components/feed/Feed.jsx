import Post from "../postt/Post";
import Share from "../share/Share";
import "./feed.css"
import {Shares} from "../../data"


const Feed = () => {
    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {Shares.map((p) => (
                    <Post key={p.id} post={p}/>

                ))}
                
            </div>
        </div>
    )
}

export default Feed;