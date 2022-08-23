import React, { useState } from "react";
import { Textcomp } from "./Textcomp";
import { Box } from "./Box";
import styled from "styled-components";

const Radioinp = styled.span`
  padding: 0 9px;
  background-color: ${(props)=>props.isActive?"#8D19FF":"#fff"};
  height: 18px;
  margin: 8px;
  border: 2px solid #000;
  border-radius: 100%;
  
  &:hover{
    border: 2px solid #8D19FF;
  }
`;


const Radiolabel = styled.span`
  font-size: 20px;
  line-height: 23px;
  color: #686868;
  margin-right: 45px;
`;

export const Inputcomp = ({
  label,
  value,
  type = "text",
  ismand,
  inpstyles,
  placeholder,
  name,
}) => {

    const [radioactive,setradioactive] = useState("false");
    const handleevent = (e)=>{
        setradioactive(!radioactive);
    }
    

  return (
    <>
      <>
        <Textcomp
          name={name + "label"}
          value={label + (ismand === "true" ? "*" : "")}
          cssstyle={{
            fontWeight: 700,
            margin: "20px 0",
            fontSize: "15px",
            lineHeight: "17px",
          }}
        />

        {type === "radio" ? (
          <>
            <Box
              cssstyle={{
                marginTop: "23px",
              }}
              name="gender"
            >
              {value.map((radiobtn, index) => {
                return (
                  <Box Cust="span" key={index}>
                    <Radioinp
                      type={type}
                      name={radiobtn}
                      value={radiobtn}
                      isActive = {radioactive}
                      onClick={(e) => handleevent(e)}
                    />
                    <Radiolabel value={radiobtn} name={radiobtn}>
                      {radiobtn}
                    </Radiolabel>
                  </Box>
                );
              })}
            </Box>
          </>
        ) : (
          <Textcomp
            placeholder={placeholder}
            type={type}
            Comp="input"
            name={name}
            cssstyle={{
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "23px",
              width: "96%",
              padding: "24px 20px 21px 20px",
              margin: "10px 0",
              background: "#fff",
              border: "1px solid #908c8c",
              borderRadius: "10px",
              ...inpstyles,
            }}
          />
        )}
      </>
    </>
  );
};
