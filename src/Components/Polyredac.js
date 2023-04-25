import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Pourquoi from "./Pourquoi";
import WorkQuality from "./WorkQuality";
import Cantact from "./Cantact";
function Polyredac() {
    return (
        <>
            <Navbar />
            <Header />
            <WorkQuality />
            <Pourquoi />
            <Cantact />
            <Footer />
        </>
    );
}

export default Polyredac;
