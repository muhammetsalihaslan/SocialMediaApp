import React from 'react'
import Feed from '../../components/feed/Feed';
import Navbar from '../../components/navbar/Navbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css"
const Home = () => {
  return (
    <>
     <Navbar/>
     <div className="homeContainer">
     <Sidebar/>
     <Feed/>
     <Rightbar/>
     

     </div>
    </>
  )
}

export default Home;