import React from "react";
import Header from "./header";
import "../styles/Login.css";
import "../styles/Home.css";
function Login()
{
    return(
    
        <div>
            <Header/>
            <div className="treat"><p>Treat Yourself! B2G1 Offer -- Shop Now! --&gt;</p></div>
            <form>
                <h1 className="loginHeader">Login</h1>
                <input class="loginInput" type="email" placeholder="Email"/><br/><br/>
                <input class="loginInput" type="password" placeholder="Password"/><br/>
                <p className="forgot">Forgot your password?</p><br/>
                <button className="loginBtn" type="button">SIGN IN</button><br/>
                <p className="account">Create account</p>
            </form>
        </div>
    )
}

export default Login;