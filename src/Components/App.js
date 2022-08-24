import React from "react";
import { Header } from "./appcomp/Header";
import { Form } from "./form/Form";
import { Footer } from "./appcomp/Footer";


export const App = ()=>{
    return (
        <div>
            <Header />
            <Form />
            <Footer />
            {/* <FloatingWind />
            <Thankyou /> */}



        </div>

    )
}