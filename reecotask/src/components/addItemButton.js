import React from "react";

import {Button} from 'antd';

import {AiOutlinePrinter} from "react-icons/ai";

function AddItem(){
   return <div className="addItem">
    <Button className='button'  onClick ={()=>{}}> Add item </Button>
    <AiOutlinePrinter className="printIcon"/>
   </div>
}


export default AddItem;