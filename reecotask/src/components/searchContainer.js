import React from "react";

import { Input } from "antd";
import {BiSearch} from "react-icons/bi";

function SearchContainer(){
    return <div className="searchContainer">
        <Input className="search" suffix={<BiSearch className="serachIcon"/>} placeholder="Search..."/>
    </div>
}

export default SearchContainer;