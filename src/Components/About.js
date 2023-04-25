import React from "react";
import P from "./Abouut/P.js";
import P1 from "./Abouut/P1.js";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Cantact from "./Cantact"
function About() {

    return (
        <>
            <Navbar />
            <P1 />
            <div style={{ backgroundColor: "#fdfdfd" }}>
                <P />
                <Cantact />
            </div>

            <Footer />
        </>

    );
}

export default About;
