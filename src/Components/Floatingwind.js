import React from "react";
import { Box } from "./Reusecomp/Box";
import { Butn } from "./Reusecomp/Buttoncomp";
import { Textcomp } from "./Reusecomp/Textcomp";

export const FloatingWind = ()=>{
    return(
        <Box name = "find" 
            cssstyle={{
            width: "529px",
            height: "332px",
            background: "#FFF",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            padding: "100px 0 0 134px"
            }}> 
            <Box name = "droparea" 
            cssstyle={{
                border: "1px dashed #686868",
                width: "262px",
                padding: "22px 31px",
                textAlign: "center"
                }}
                >
                <Butn value="BROWSE" 
                cssstyle = {{
                    background: "#8D19FF",
                    borderRadius: "10px",
                    color: "#fff",
                    margin: "0"
                }} />
                <Textcomp 
                    value="Drag or drop a file here"
                    cssstyle = {{
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "14px",

                    }}

                />
            </Box>
        </Box>
    );
}