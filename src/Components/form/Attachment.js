import React from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Butn } from "../Reusecomp/Buttoncomp";

const ismand = "true";

export const Attachment = ()=>{
    return(
        <Box name = "Attachment" 
            cssstyle={{
                margin: "40px 0 0 0"
        }}>
            <Textcomp 
                value="Attachments"
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
                padding:"40px 20px 20px",
                borderRadius: "10px"
            }}>
                <Textcomp 
                    value = {"Resume/cv"+(ismand&&"*")} 
                    cssstyle = {{
                        fontWeight: 700,
                        fontSize: "16px",
                        lineHeight: "18px"
                    }}/>
                <Textcomp 
                    value="(Accept format: .doc/.docx/.pdf;Size:1MB)"
                    cssstyle={{
                        fontWeight: 400,
                        fontSize: "14px",
                        marginLeft: "10px",
                        lineHeight: "16px"
                        }}
                />
                <Butn 
                name = "filesubmit" 
                type="filesubmit"
                cssstyle={{
                    background: "#fff",
                    color: "#8D19FF",
                    
                }} 
                value = "Choose File" />
            </Box>
        </Box>
    )
}