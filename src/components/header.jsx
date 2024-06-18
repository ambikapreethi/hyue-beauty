import React from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faSearch,faShoppingBag,faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
function Header()
{
    return(
        <div>
            <nav className="menuBar">
                        <a><FontAwesomeIcon icon={faBars} className="faBars" />
                        <span className="icon"><FontAwesomeIcon icon={faSearch} className="faSearch" /></span></a>
                        <a><p style={{fontSize:"30px",fontWeight:"normal",letterSpacing:"2px",color:"black",marginTop:"-10px"}}>HYUE</p></a>
                        <a><Link to="/login"><FontAwesomeIcon icon={faUser} className="faUser"/> </Link>
                        <span className="icon"><Link to="/cart"><FontAwesomeIcon icon={faShoppingBag} className="faShoppingBag"/></Link> </span></a>
                 </nav>
        </div>
    )
}

export default Header;