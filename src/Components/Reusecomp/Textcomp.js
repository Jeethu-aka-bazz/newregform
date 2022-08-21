import React, { useState } from "react";

export let formData = {jobprofile:"Software developement"}

export const Textcomp = ({placeholder,name,value,type,cssstyle, Comp = "span"})=>{
    
const [inputValue,setinputValue] = useState("");



function handleevent(e){
    const targetclass = e.target.className;
    const targetvalue = e.target.value;
    setinputValue(targetvalue);
    formData[targetclass] = targetvalue;
}



    if(Comp === "input"){ 
        return(<Comp
            className = {name}
            type = {type}
            style = {cssstyle}
            value = {(type === "radio")?name:inputValue}
            placeholder = {placeholder}
            disabled = {name === "jobprofile"}
            onChange = {(e)=>handleevent(e)}

    />)
    }

    return (
        <Comp
            className = {name}
            style = {cssstyle}
            value = {value} 
        >
        {value}
        </Comp>
    )
}
