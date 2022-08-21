import React from "react";
import { Box } from "./Reusecomp/Box";
import { Butn } from "./Reusecomp/Buttoncomp";
import { Textcomp } from "./Reusecomp/Textcomp";

export const Thankyou = () => {
    return (
        <Box name = "thankyouscreen" cssstyle={{textAlign:"center",height:"100%",width:"100%"}}>
        <Textcomp 
        name="logo" 
        Comp="div" 
        cssstyle = {{
            width:"93.33px",
            height:"93.33px",
            background:"#9747FF",
            margin: "14% 0 0 46.5%"
        }} 
        />
            <Textcomp
            Comp="div"
                value="Thank you for registering"
                cssstyle={{
                    fontWeight: 700,
                    fontSize: "48px",
                    lineHeight: "55px",
                    margin: "31px 0 28px 0"
                }}
            />
            <Textcomp
            Comp="div"
                value="We will send future updates on your registered email ID."
                cssstyle={{
                    width: "877px",
                    fontWeight: 400,
                    fontSize: "24px",
                    lineHeight: "28px",
                    margin:"auto"
                }}
            />
            <Butn
                value="Ok"
                cssstyle = {{
                    color:"#fff",
                    width: "200px",
                    height: "48px",
                    background: "#8D19FF",
                    borderRadius: "13px"
                }}
            />
        </Box>
    );
}