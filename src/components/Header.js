import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    let [btnName, setBtnName] = useState("login");
    console.log("Header Rendered");

    useEffect(() => {
        console.log("UseEffect rendered in header");    
    }, [btnName]);

    return (
        <div className="header">
            <div className="img-container">
                <img className="logo" src={IMG_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/About">About Us</Link> </li>
                    <li> <Link to="/Contact"> Contact Us </Link> </li>
                    <li> <Link to="/cart">Cart</Link> </li>
                    <button className="login" onClick={() => {
                        btnName === "login" ? setBtnName("logout") : setBtnName("login");
                    }}> {btnName} 
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;