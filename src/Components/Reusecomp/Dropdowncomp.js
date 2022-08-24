import React from "react";
import styled from "styled-components";
import { Box } from "./Box";

let dropdownList = ["underGraduate","Postgraduate","Diploma"];

const dropthecont=(e)=>{

}


const Dropdowncomp = ()=>{
    return (
        <>
        <Box Cust = "input" onclick = {dropthecont}/>
        <Box name = "dropdownList" >
            
        </Box>
       </>
    );
}

export default Dropdowncomp;