import React from "react";
import { Textcomp } from "../Reusecomp/Textcomp";
import { Box } from "../Reusecomp/Box";
import { Inputcomp } from "../Reusecomp/Inputcomp";

export const Highestedu = ()=>{
    return(
        <>
            
            <Textcomp 
                value="Highest education profile"
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
                    label = "Degree"
                    name = "degree"
                    ismand = "true"
                    placeholder = "Degree"
                />
                <Inputcomp
                    label = "College"
                    name = "college"
                    ismand = "true"
                    placeholder = "College"
                />
                <Inputcomp
                    label = "Reg.No"
                    name = "regno"
                    ismand = "true"
                    placeholder = "Role.No"
                />
                <Inputcomp
                    label = "Branch"
                    name = "branch"
                    ismand = "true"
                    placeholder = "Branch"
                />


                </Box>
        </>
    );
}