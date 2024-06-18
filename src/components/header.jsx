import React, { useState } from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faSearch,faShoppingBag,faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Header()
{
 const[showSideBar,setshowSideBar]=useState(false);
 const handleSideBar=()=>
 {
    setshowSideBar("true");
 }
 const closeSideBar=()=>
    {
       setshowSideBar("false");
    }
     return(
       
        <div>
            <nav className="menuBar">
                           {showSideBar==="true" && (<div class="sidebar">
                            <button style={{fontSize:"15px",border:"1px solid grey",height:"20px"}} onClick={closeSideBar}>close</button>
                                    <Link to="/"><p>SHOP ALL</p></Link>
                                    <Link to="/hyue-lipsticks"><p>HYUE HYDRAMATTE<sup>TM</sup>LIQUID LIPSTICK</p></Link>
                                    <Link to="/hyue-nailpolish"><p>HYUE GEL FX Nail Paint</p></Link>
                                    <p>HYUE Chrome Glazed Nail Paint</p>
                                    
                            </div>)}
                        <a><FontAwesomeIcon icon={faBars} className="faBars" onClick={handleSideBar}/>
                        <span className="icon"><FontAwesomeIcon icon={faSearch} className="faSearch" /></span></a>
                        <a><p style={{fontSize:"30px",fontWeight:"normal",letterSpacing:"2px",color:"black",marginTop:"-10px"}}>HYUE</p></a>
                        <a><Link to="/login"><FontAwesomeIcon icon={faUser} className="faUser"/> </Link>
                        <span className="icon"><Link to="/cart"><FontAwesomeIcon icon={faShoppingBag} className="faShoppingBag"/></Link> </span></a>
                 </nav>
        </div>
    )
}

export default Header;