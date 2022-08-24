import React from "react";
import { Lowestedu } from "./Lowestedu";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Box } from "../Reusecomp/Box";
import { Highestedu } from "./Highestedu";

export const Educationaldetails = ()=>{
    return(
        <>
            <Box
                name = "EducationalDetail" 
                cssstyle={{
                    margin: "40px 0 0 0"
                }}
            >
                <Textcomp 
                value="Educational Details"
                cssstyle = {{
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "28px"
                }}
            />
            <Box
            name ="educationdetails" 
            cssstyle={{
                background: "#fff",
                margin: "20px 0",
                border: "1px solid #E5E5E5",
                padding:"40px 20px",
                borderRadius: "10px"
            }}>

            
                <Lowestedu />
                <Highestedu />
            
            </Box>
            </Box>
        </>
    );
}