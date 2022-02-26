import React from "react";

import Select from "react-select";

export default function CoverUpto(){
    var CoverUptoList=[
       {
        value:1,
        label:"32 Years",
       },

       {
        value:2,
        label:"42 Years",
       },

       {
        value:3,
        label:"52 Years",
       },

       {
        value:4,
        label:"60 Years",
       },

       {
        value:5,
        label:"65 Years",
       },

    ]
    return(
        <div style={{width:"400px"}}>
            <Select placeholder="Cover Upto" options={CoverUptoList}/>
        </div>
    )
}