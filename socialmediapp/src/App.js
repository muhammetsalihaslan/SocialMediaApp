
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="profile" element={<Profile/>}/>


      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
