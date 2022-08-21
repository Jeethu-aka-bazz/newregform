import React from "react";
import { Box } from "./Reusecomp/Box";
import { Textcomp } from "./Reusecomp/Textcomp";
import { Inputcomp } from "./Reusecomp/Inputcomp";

export const Personaldetails = ()=>{
    return(
        <>
            <Box
                name = "PersonalDetail" 
                cssstyle={{
                    margin: "40px 0 0 0"
                }}
            >
                <Textcomp 
                value="Personal Details"
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
                    label = "First Name"
                    name = "firstname"
                    ismand = "true"
                    
                    placeholder = "First Name"
                />
                <Inputcomp
                    label = "Middle Name"
                    name = "middlename"
                    ismand = "false"
                    
                    placeholder = "Middle Name"
                />
                <Inputcomp
                    label = "Last Name"
                    name = "lastname"
                    ismand = "true"
                    
                    placeholder = "Last Name"
                />
                <Inputcomp
                    label = "Email id"
                    name = "emailid"
                    type="email"
                    ismand = "true"
                    
                    placeholder = "Example@gmail.com"
                />
                <Inputcomp
                    label = "Contact Number"
                    name = "contactnumber"
                    ismand = "true"
                    
                    placeholder = "Contact Number"
                />
                <Inputcomp
                    label = "DOB-(DD/MM/YYYY)"
                    name = "dateofbirth"
                    ismand = "true"
                    
                    type = "date"
                    placeholder = "DD/MM/YYYY"
                />

            <Inputcomp type = "radio" name = "Gender" ismand="true" value={["Male","Female","Others"]}/>
                
            </Box>
            </Box>


            {/* <span value="spl" name = "abcd" onClick={(e)=>{console.log(e.currentTarget)}}>hello</span> */}
        </>
    );
}
