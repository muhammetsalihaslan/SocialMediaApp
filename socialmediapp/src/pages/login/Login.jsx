import React from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom';


const Login = () => {
 const navigate = useNavigate();
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Salih's Friends</h3>
                <span className="loginDesc" >Connect with your friends and other</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="password" className="loginInput" />
                    <button className="loginButton" onClick={() => navigate('/')}>Log In</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>



        </div>

    </div>
  )
}

export default Login