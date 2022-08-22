import React from "react";
import { Textcomp } from "./Textcomp";
import { Box } from "./Box";


export const Inputcomp = ({label,value,type="text",ismand,inpstyles,placeholder,name})=>{
    return (
        <>
            {type === "radio" ? (
                <>
                <Textcomp 
                name = {name+"label"}
                Comp = "div"
                value={name+(ismand === "true"? "*":"")}
                cssstyle={ {
                        fontWeight: 700,
                        margin: "20px 0", 
                        fontSize: "15px",
                        lineHeight: "17px"
                    } }
            />
            <Box name="gender">
            {value.map((radiobtn,index)=>{
                return (
                    <Box name= "radiooption" Cust = "span" cssstyle={{marginRight: "20px"}} key = {index}>
                <Textcomp 
                    Comp="input"
                    type = {type}
                    name = {radiobtn}
                    value = {radiobtn}
                />
                <Textcomp 
                    comp = "span"
                    value = {radiobtn}
                    name = {radiobtn}
                />
                
                </Box>
                )
            })}
            </Box>
                </>
            ):(
            <>
            <Textcomp 
            name={name+"label"}
                value={label+(ismand === "true"? "*":"")}
                cssstyle={ {
                        fontWeight: 700,
                        margin: "20px 0", 
                        fontSize: "15px",
                        lineHeight: "17px"
                    } }
            />
            
                <Textcomp 
                    placeholder = {placeholder}
                    type = {type}
                    Comp = "input"
                    name = {name}
                    cssstyle= {{
                        fontWeight: 400,
                        fontSize: "17px",
                        lineHeight: "23px",
                        width: "96%",
                        padding: "24px 20px 21px 20px",
                        margin: "10px 0",
                        background: "#fff",
                        border: "1px solid #908c8c",
                        borderRadius: "10px",
                        ...inpstyles
                    }}
                />
            </>
            )
            }

            </>
    );
}