import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import Home from "./Pages/Home";

function Polyredac() {
    return (
        <>
            <Navbar />
            <div className="about-container">
                <br /><br />
                <h2 style={{ fontSize: "90px", color: "#6995d8" }}>Actualitè</h2>
                <h4>Decouvrir nos articles</h4>
                <h5>
                    Nos processus et nos services s'associent pour créer un contenu de grande valeur pour nos clients...</h5>
            </div>
            <Home />
            <Footer />
        </>
    );
}

export default Polyredac;
