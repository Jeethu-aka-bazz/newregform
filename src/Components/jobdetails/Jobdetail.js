import React from "react";
import { Box } from "../Reusecomp/Box";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Inputcomp } from "../Reusecomp/Inputcomp";

export const Jobdetail = () =>{
    return (
        <Box
            name = "JobDetail" 
            cssstyle={{
                margin: "40px 0 0 0"
            }}
        >
            <Textcomp 
                value="Job Details"
                cssstyle = {{
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "28px"
                }}
            />

            <Box
                cssstyle={{
        background: "#fff",
        margin: "20px 0",
        border: "1px solid #E5E5E5",
        padding:"40px 50px",
        borderRadius: "10px"
    }}
                name = "Jobinputs"  
            >
                <Inputcomp
                    label = "Job Profile"
                    name = "jobprofile"
                    ismand = "true"
                    type = "text"
                    inpstyles={{
                        background: "#e5e5e5",
                        opacity: "50%"
                    }}
                    placeholder = "Software developement"
                    
                />
                
            </Box>

        </Box>
    )
}