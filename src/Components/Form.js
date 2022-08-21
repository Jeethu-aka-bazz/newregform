import React from "react";
import { Box } from "./Reusecomp/Box";
import { Formintro } from "./Formintro";
import { Jobdetail } from "./Jobdetail";
import { Personaldetails } from "./Personaldetails";
import { Educationaldetails } from "./Educationaldetails";
import { Attachment } from "./Attachment";
import { Butn } from "./Reusecomp/Buttoncomp";

export const Form = ()=>{
    return (
        <Box 
        name = "Registrationform"
        cssstyle = {{
            margin: "35px 122px 0 122px"
        }}
        >
        
        <Formintro />
        <Jobdetail />
        <Personaldetails />
        <Educationaldetails />
        <Attachment />

        <Butn 
            type = "submit"
            value="SUBMIT"
            cssstyle = {{
                background: "#8D19FF",
                color: "#fff",
            }}
            divstyle = {{
                textAlign: "right"
            }}
        />

        </Box>
    )
}
