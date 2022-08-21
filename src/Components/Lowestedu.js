import React from "react";
import { Textcomp } from "./Reusecomp/Textcomp";
import { Inputcomp } from "./Reusecomp/Inputcomp";
import { Box } from "./Reusecomp/Box";


export const Lowestedu = ()=>{
    return (
        <>
        <Textcomp 
                value="Lowest education profile"
                cssstyle={ {
                        fontWeight: 700,
                        margin: "20px 0", 
                        fontSize: "15px",
                        lineHeight: "17px"
                    } }
                />
                <Box cssstyle={{
                background: "#F9F9F9",
                margin: "20px 0",
                border: "1px solid #E5E5E5",
                padding:"40px 20px",
                borderRadius: "10px"
                }}>
                <Inputcomp
                    label = "10th percentage %"
                    name = "tenthmark"
                    ismand = "true"
                    placeholder = "In percentage"
                />
                <Inputcomp
                    label = "12th percentage %"
                    name = "twelvethmark"
                    ismand = "true"
                    placeholder = "In percentage"
                />
                </Box>
                </>
    )
}