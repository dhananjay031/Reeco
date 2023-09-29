import React from "react";

import SearchContainer from './searchContainer';
import AddItem from "./addItemButton";

function FooterBody(){
    return <div className="footerBody">
        <div className="head">
            <SearchContainer className='search'/>
            <AddItem className='addItem'/>
        </div>
        
    </div>
}

export default FooterBody;