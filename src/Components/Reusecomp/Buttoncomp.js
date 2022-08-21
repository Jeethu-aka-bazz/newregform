import React from "react";
import { formData } from "./Textcomp";

function handleclick(e){
    e.target.name === "SUBMIT"&& console.log(formData);
}

export const Butn = ({value,cssstyle,name,type,divstyle})=>{
    return (
        <div name = {name} style = {divstyle}>
        <button style={{
                margin:"32px 0",
                fontSize: "16px",
                lineHeight: "18px",
                padding: "15px 50px",
                border: "1px solid #8D19FF",
                borderRadius: "13px",
                ...cssstyle
            }} 
            onClick={handleclick}
            type = {type}
            name = {value}
            >
                {value}
            </button>
        </div>
    );
}