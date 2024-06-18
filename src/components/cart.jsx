import React from "react";
import Header from "./header";
import "../styles/cart.css";
import { Link } from "react-router-dom";
function CartPage()
{
    return(
        <div>
            <Header/>
            <div className="treat"><p>Treat Yourself! B2G1 Offer -- Shop Now! --&gt;</p></div>
            <div className="cartDiv">
                <p style={{fontSize:"35px",letterSpacing:"2px"}}>Your cart is empty</p>
                <Link to="/"><button className="cartBtn" type="button">CONTINUE SHOPPING</button></Link>
                <p style={{fontSize:"22px",marginTop:"50px"}}>Have an account?</p>
                <p><Link to="/login"><span style={{textDecoration:"underline",cursor:"pointer"}}>Login to </span></Link> check out faster.</p>
            </div>
        </div>
    )
}

export default CartPage;