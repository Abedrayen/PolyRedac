import React from "react";

import './P.css'

const P = () => {
    return (
        <>
            <div>
                <section>
                    <div class="container mx-auto py-5 col-lg-10 col-xl-9">
                        <div class="mb-5 text-center">
                            <h2 class="display-6 mb-1" style={{ fontSize: "25px" }}><strong>Qui sommes-nous...</strong></h2>
                            <p class="text-muted">Notre équipe de rédacteurs booster à l’IA
                                produit du contenu de haute qualité depuis deux ans, et nous sommes fiers d'avoir acquis une bonne réputation dans le secteur.
                            </p>
                        </div>
                        <p>En tirant parti des dernières technologies d'IA, notre équipe a pu rationaliser ses processus, améliorer son efficacité et fournir des résultats exceptionnels à ses clients. Nous avons adopté l'IA comme un outil permettant d'améliorer nos compétences rédactionnelles, et non de les remplacer, et nous en avons constaté les avantages de première main.</p>
                    </div>
                </section>

                <section class=" container mx-auto py-5 col-lg-10 col-xl-9 bg-light">
                    <div class="container row py-5 m-auto col-lg-10 col-xl-9">
                        <h2 class="display-6 text-center mb-4" style={{ fontSize: "20px", textAlign: "center" }}><strong>Notre histoire</strong></h2>
                        <p>Nos rédacteurs sont des experts dans leur domaine, avec une compréhension approfondie du langage, de la grammaire et de la narration. Ils travaillent main dans la main avec nos outils d'IA pour produire un contenu engageant, informatif et conforme à la marque de nos clients.</p>
                        <p>Nous pensons que la clé de notre succès réside dans la capacité de notre équipe à travailler en collaboration, à exploiter les points forts de chacun de ses membres et à rechercher constamment de nouvelles façons d'améliorer notre travail. Nous sommes passionnés par ce que nous faisons, et cela se voit dans la qualité de notre travail.<br />
                            <br />Nous vous remercions d'avoir pensé à notre équipe pour répondre à vos besoins en matière de contenu. Nous sommes impatients de travailler avec vous pour donner vie à votre vision.</p>
                    </div>
                </section>
            </div>


        </>
    );
};

export default P;