import React from "react";

import { BsChevronRight } from "react-icons/bs";
import BackButton from "./backButton";
import ApproveButton from "./approveButton";

function Header(){
   return <div className="headerContainer">
    <div className="order"> Orders <BsChevronRight/> <a href="#" className="orderId"> Order 32457ABC </a></div>
    <div className="footer">
        <div className="orderNumberContainer">
        <h3> Order 32457ABC </h3>
        </div>
        <div className="buttonContainer">
            <BackButton/>
            <ApproveButton/>
        </div>
       
    </div>
   </div>
}


export default Header;