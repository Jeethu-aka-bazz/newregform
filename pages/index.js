import React from "react";
import { createGlobalStyle } from "styled-components";
import { Header } from "../src/Components/appcomp/Header";
import { Form } from "../src/Components/form/Form";
import { Footer } from "../src/Components/appcomp/Footer";
import  Dropdowncomp  from "../src/Components/Reusecomp/Dropdowncomp";


const Globalstyle = createGlobalStyle`
body {
    font-family: 'Helvetica';
    font-style: "normal";
    margin: 0;
}
`;

const HomePage = () => {
  return (
    <>
    <Dropdowncomp />
      {/* <Globalstyle />
      <Header />
      <Form />
      <Footer /> */}

      {/* <FloatingWind />
            <Thankyou /> */}
    </>
  );
};

export default HomePage;
