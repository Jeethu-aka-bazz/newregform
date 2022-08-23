import React from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { Footer } from "./Footer";
import { FloatingWind } from "./Floatingwind";
import { Thankyou } from "./Thankyou";
import { Inputcomp } from "./Reusecomp/Inputcomp"


export const App = ()=>{
    return (
        <>
            <Header />
            <Form />
            <Footer />
            {/* <FloatingWind />
            <Thankyou /> */}

        </>

    )
}