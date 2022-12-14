import React, { useState } from "react";
import { Textcomp } from "./Textcomp";
import { Box } from "./Box";
import styled from "styled-components";

const Radioinp = styled.input`
  padding: 0 9px;
  background-color: ${(props) => (props.isActive ? "#8D19FF" : "#fff")};
  color: "#e5e5e5";
  height: 18px;
  margin: 8px;
  border: 2px solid #000;
  border-radius: 100%;

  &:hover {
    border: 2px solid #8d19ff;
  }
`;

const Radiolabel = styled.span`
  font-size: 20px;
  line-height: 23px;
  color: #686868;
  margin-right: 45px;
`;

const Radiocomp = ({ value, radioactive, onclick }) => {
  return (
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
                type="radio"
                name = {radiobtn[0]}
                value={(radioactive[index])[radiobtn[0]]}
                onClick={(e)=>onclick(e,index)}
              />
              <Radiolabel value={radiobtn} name={radiobtn}>
                {radiobtn}
              </Radiolabel>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export const Inputcomp = ({
  label,
  value,
  type = "text",
  ismand,
  inpstyles,
  placeholder,
  name,
}) => {
  const [radioactive, setradioactive] = useState([false, false,false]);
    const handleevent = (e,index1) => {
        let newact = [];
        radioactive.map((e,index2)=>{
            if(index1 === index2 )newact.push(true);
            else newact.push(false);
        })
        setradioactive(newact);
    }

  return (
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
          <Radiocomp
            value={value}
            radioactive={radioactive}
            onclick={handleevent}
          />
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
  );
};
