import { IMG_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    let [btnName, setBtnName] = useState("login");

    return (
        <div className="header">
            <div className="img-container">
                <img className="logo" src={IMG_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li> <a href="#">Home</a> </li>
                    <li> <a href="#">About Us</a> </li>
                    <li> <a href="#">Contact Us</a> </li>
                    <li> <a href="#">Cart</a> </li>
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