import React from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";

export const Formintro = () =>{
    return (
        <Box name = "intro">
            <Textcomp
            value="*Required" 
            Comp = "span" 
            cssstyle = {{
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "23px"
            }}
         />
         <Textcomp
            value="Registration form" 
            Comp = "div" 
            cssstyle = {{
                fontWeight: 700,
                fontSize: "48px",
                margin: "20px 0 0 0",
                lineHeight: "55px"
            }}
         />
        </Box>
    );
}