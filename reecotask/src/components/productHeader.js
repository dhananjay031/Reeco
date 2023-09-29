import React from "react";

import Supplier from '../components/subcomponents/supplier';
import ShippingDate from '../components/subcomponents/shippingDate';
import Total from '../components/subcomponents/total';
import Category from '../components/subcomponents/category';
import Department from '../components/subcomponents/department';
import Status from '../components/subcomponents/status';
import Boundary from "./subcomponents/boundary";

const SAMPLE_DATA = [
    {
        title:'Supplier',
        content: 'East Coast fruits & vegetables'
    },
     {
        title:'Shopping date',
        content: 'Thu, Feb 10'
    },
     {
        title:'Total',
        content: '$15,028.3'
    }, {
        title:'Category',
        content: '300-444-678'
    },
     {
        title:'Department',
        content: 'East Coast fruits & vegetables'
    },
     {
        title:'status',
        content: 'East Coast fruits & vegetables'
    }
]

function ProductHeader(){
    return <div className="productHeader">
        <Supplier/>
        <Boundary/>
        <ShippingDate/>
        <Boundary/>
        <Total  />
        <Boundary/>
        <Category/>
        <Boundary/>
        <Department/>
        <Boundary/>
        <Status/>
    </div>
}

export default ProductHeader;