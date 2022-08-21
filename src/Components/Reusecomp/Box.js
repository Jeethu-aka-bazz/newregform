import React from "react";



export const Box = ({name,cssstyle,children,Cust = "div"})=>{
    return (
        <Cust className={name} style ={cssstyle}>{children}</Cust>
    )
}