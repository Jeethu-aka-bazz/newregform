import React from "react";
import { Textcomp } from "../Reusecomp/Textcomp";

export const Footer = () =>{
    return (
        <Textcomp 
            Comp = "div"
            value = "Copyright@Incresco pvt ltd"
            cssstyle={{
                opacity: 0.5,
                padding: "25px",
                textAlign: "center",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "11px",
                borderTop: "1px solid #000"
            }}

        />
    );
}