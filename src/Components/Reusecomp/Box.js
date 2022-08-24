import React from "react";

export const Box = ({name,cssstyle,children,Cust = "div",onclick,hidden = "false"})=>{
    return (
        <Cust className={name} style ={cssstyle} onClick = {onclick}>{children}</Cust>
    )
}