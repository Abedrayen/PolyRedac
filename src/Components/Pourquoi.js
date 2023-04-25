import React from "react";
import "./Pourquoi.css";
import { useInView } from 'react-intersection-observer';
import { useRef, useState, useEffect } from 'react';
import 'animate.css/animate.min.css';
import ehi from "../Images/artificial-intelligence-ai-research-robot-cyborg-development-future-people-living-digital-data-mining-machine-learning-171270756.jpg"
import eha from "../Images/redacteur-web.webp"
import oha from "../Images/accelerating-digital-transformation-with-artificial-intelligence.jpg"
function Pourquoi() {
    const [ref, inView] = useInView({
        threshold: 0.5, // le seuil de visibilité
        triggerOnce: true // la fonction de rappel ne sera exécutée qu'une seule fois
    });
    const [refi, inViewi] = useInView({
        threshold: 0.5, // le seuil de visibilité
        triggerOnce: true // la fonction de rappel ne sera exécutée qu'une seule fois
    });
    const [refe, inViewe] = useInView({
        threshold: 0.5, // le seuil de visibilité
        triggerOnce: true // la fonction de rappel ne sera exécutée qu'une seule fois
    });
    return (
        <>
            <div className="pourrq" >
                <br /><br />
                <div >
                    <h2 style={{ textAlign: "center", color: "#2345", fontSize: '35px' }}>Pourquoi investir dans le marketing de contenu ?</h2>
                </div>

                <br />
                <p style={{ margin: "20px 100px", fontSize: "20px", color: "#223" }}>Il est essentiel pour toute entreprise de recruter des rédacteurs capables de fournir un contenu de qualité en s'inspirant de la voix de votre marque. De plus en plus de spécialistes du marketing réalisent que le contenu est l'investissement à long terme qui non seulement résiste à l'épreuve du temps, mais qui offre également le meilleur retour sur investissement.</p>
                <div className="two-blocks-container">
                    <div className="left-block">
                        <img src={ehi} alt="Block Image" style={{ height: "300px", width: "100%" }} />
                    </div>
                    <div className={`right-block ${inView ? 'animate__animated animate__backInRight' : ''}`}
                        ref={ref}>
                        <h2 style={{ margin: "10px 10px", color: "#1954c2" }}>Écrasez vos concurrents grâce à nos services de rédaction qui changent la donne !</h2>
                        <p style={{ margin: "10px 10px", fontSize: "20px" }}>
                            L'époque où l'on jetait des dollars de marketing contre le mur en espérant que quelque chose colle est révolue depuis longtemps. Chaque dollar investi dans le marketing compte et le marketing de contenu, lorsqu'il est bien fait, peut contribuer à générer des prospects et à développer votre entreprise pendant des années après la publication.

                            Le marketing de contenu est un investissement à long terme et le succès commence par une stratégie de contenu complète. Prenez rendez-vous avec nos experts en stratégie de contenu dès aujourd'hui !</p>
                    </div>
                </div>
                <div className="two-blocks-container">
                    <div className={`left-block2 ${inViewi ? 'animate__animated animate__backInLeft' : ''}`}
                        ref={refi}>
                        <h2 style={{ margin: "10px 10px", color: "#1954c2" }}>Companies with blogs create 67% more leads per month than companies without.</h2>
                        <p style={{ margin: "10px 10px", fontSize: "20px" }}>
                            Now more than ever we are fighting for the attention of our customers. An active blog gives you the chance to show readers (and search engines!) the full breadth of your expertise and authority in your industry.

                            Creating consistent, quality content takes dedication and expert content writers. Build your ideal writing team today.</p>
                    </div>
                    <div className="right-block2">
                        <img src={eha} alt="Block Image" />
                    </div>
                </div>
                <div className="two-blocks-container">
                    <div className="left-block">
                        <img src={oha} alt="Block Image" style={{ height: "300px", width: "100%" }} />
                    </div>
                    <div className={`right-block ${inViewe ? 'animate__animated animate__backInRight' : ''}`}
                        ref={refe}>
                        <h2 style={{ margin: "10px 10px", color: "#1954c2" }}>97% des entreprises échouent à cause d'un texte trop faible - ne soyez pas l'une d'entre elles. Engagez notre agence d'experts dès maintenant !</h2>
                        <p style={{ margin: "10px 10px", fontSize: "20px", color: '#292727', fontFamily: 'inherit' }}>
                            Quel que soit votre produit ou service, vos clients ont le choix. Pour qu'ils vous choisissent, il faut une connexion que vos concurrents n'ont pas. Créez un contenu qui raconte efficacement votre histoire et présente votre entreprise comme la meilleure option pour vos clients.

                            Vous ne savez pas par où commencer ? Contactez l'un de nos spécialistes du contenu dès aujourd'hui pour découvrir comment les créateurs de contenu de Scripted peuvent vous démarquer de vos concurrents.</p>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Pourquoi;
