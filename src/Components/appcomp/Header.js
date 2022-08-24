import React from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";

export const Header = ()=>{
    return(
        <Box 
        name="header"
        cssstyle = {{
            backgroundColor : "rgba(141, 25, 255, 0.7)",
            padding: "40px 10px 60px 10px",
            textAlign: "center",
            color: "#fff"
            
        }}
        >
        <Textcomp
            value="INCRESCO TECHNOLOGIES" 
            Comp = "div" 
            cssstyle = {{
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "55px"
            }}
         />
        <Textcomp 
            value = "CAMPUS HIRING-2023" 
            Comp = "div"
            cssstyle={{
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "41px"
            }}
            />
        </Box>
    )
}