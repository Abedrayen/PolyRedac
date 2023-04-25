import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function Cantact() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [adresse, setAdresse] = useState("");
    const [phone, setPhone] = useState("");
    const [cantactText, setCantactText] = useState("");

    const cantactsCollectionRef = collection(db, "cantacts");
    let navigate = useNavigate();

    const createCantact = async () => {
        await addDoc(cantactsCollectionRef, {
            nom,
            prenom,
            adresse,
            phone,
            cantactText,
        });
        navigate("/");
    };

    useEffect(() => {
    }, []);

    return (
        <div style={{
            display: "flex",
            justifyContent: "space - between",
            alignItems: "center",
            margin: "20px",
            padding: "20px",
            backgroundColor: "#ffffff0"
        }}
        >
            <div style={{ color: '#202020', }}>
                <h2 style={{ color: "#256aeb" }}>CONTACTEZ-NOUS</h2>
                <br />
                <p>Discutons de vos objectifs de contenu</p>

                <p>Développez votre contenu avec un gestionnaire de compte dédié</p>
                <br />
                <h4> AVANTAGES D'UN COMPTE GÉRÉ</h4>
                <br />
                <ul>
                    <li> - Sélection et gestion de rédacteurs personnalisés</li>
                    <li> - Un volume important de contenu de haute qualité</li>
                    <li> - Sélection et gestion de rédacteurs personnalisés</li>
                    <li>  - Calendrier de publication cohérent</li>
                    <li>   - Un support client de premier ordre</li>
                </ul>
            </div>
            <div className="createPostPage" >
                <div className="cpContainer">
                    <h1>Cantactez-nous</h1>
                    <div className="inputGp">

                        <input
                            placeholder="Nom..."
                            onChange={(event) => {
                                setNom(event.target.value);
                            }}
                        />

                        <input
                            placeholder="Prenom..."
                            onChange={(event) => {
                                setPrenom(event.target.value);
                            }}
                        />
                    </div>
                    <div className="inputGp">

                        <input
                            placeholder="Adresse..."
                            onChange={(event) => {
                                setAdresse(event.target.value);
                            }}
                        />

                        <input
                            placeholder="Phone..."
                            onChange={(event) => {
                                setPhone(event.target.value);
                            }}
                        />
                    </div>
                    <div className="inputGp">

                        <textarea
                            placeholder="Décrivez vos besoins en matière de contenu PolyRedac..."
                            onChange={(event) => {
                                setCantactText(event.target.value);
                            }}
                        />
                    </div>
                    <button onClick={createCantact}> Envoyer </button>
                </div>
            </div>
        </div >

    );
}

export default Cantact;