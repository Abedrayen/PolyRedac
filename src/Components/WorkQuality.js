import React from 'react';
import { FaCheck, FaGem, FaHeart, FaShieldAlt } from 'react-icons/fa';
import "./WorkQuality.css";
import 'animate.css'
import { useInView } from 'react-intersection-observer';
import { useRef, useState, useEffect } from 'react';
import 'animate.css/animate.min.css';
import "./HighQualityWork.css";
const WorkQuality = () => {
    const [ref, inView] = useInView({
        threshold: 0, // le seuil de visibilité
        triggerOnce: false // la fonction de rappel ne sera exécutée qu'une seule fois
    });
    const [refe, inViewe] = useInView({
        threshold: 0, // le seuil de visibilité
        triggerOnce: false // la fonction de rappel ne sera exécutée qu'une seule fois
    });

    return (

        <>
            <section className="work" >
                <div className="container">
                    <h2 className="work__title ">Notre Travail<br /><br /></h2>
                    <div className="work__description">
                        <ul style={{ display: 'flex', }}>
                            <div className="col-lg-3 col-md-6">
                                <div className="work__item">
                                    <div className="work__icon">
                                        <FaGem />
                                    </div>
                                    <h3 className="work__item__title">Haute Qualité</h3>
                                    <p className={`work__item__description ${inView ? 'animate__animated animate__fadeInDown' : ''}`}
                                        ref={ref}>
                                        Notre travail est de la plus haute qualité, avec une attention particulière aux détails et un souci d'excellence.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="work__item">
                                    <div className="work__icon">
                                        <FaCheck />
                                    </div>
                                    <h3 className="work__item__title">Fiabilité</h3>
                                    <p className={`work__item__description ${inView ? 'animate__animated animate__fadeInDown' : ''}`}
                                        ref={ref}>
                                        Nos clients peuvent compter sur nous pour fournir un travail exceptionnel dans le respect des délais et du budget.
                                    </p>
                                </div>
                            </div>
                        </ul>
                        <ul style={{ display: 'flex', }}>
                            <div className="col-lg-3 col-md-6">
                                <div className="work__item">
                                    <div className="work__icon">
                                        <FaHeart />
                                    </div>
                                    <h3 className="work__item__title">La Passion</h3>
                                    <p className={`work__item__description ${inView ? 'animate__animated animate__fadeInDown' : ''}`}
                                        ref={ref}>
                                        Nous sommes passionnés par notre travail et nous nous efforçons de dépasser les attentes de nos clients à chaque fois.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="work__item">
                                    <div className="work__icon">
                                        <FaShieldAlt />
                                    </div>
                                    <h3 className="work__item__title">Sécurité</h3>
                                    <p className={`work__item__description ${inView ? 'animate__animated animate__fadeInDown' : ''}`}
                                        ref={ref}>
                                        Nous prenons la sécurité au sérieux et veillons à ce que tous nos travaux soient sécurisés et protégés contre les menaces potentielles.
                                    </p>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={`containerr ${inViewe ? 'animate__animated animate__pulse' : ''}`}
                    ref={refe}>

                    <div class="item" >
                        <h3 >Satisfaction à 100 % du contenu</h3>
                        <br />
                        <p>
                            Notre travail est fiable et rigoureux dans tous les aspects. Nous nous efforçons de fournir des résultats précis et de qualité à nos clients en utilisant les meilleures pratiques et les dernières technologies disponibles. Nous sommes également soucieux de la confidentialité et de la sécurité des données de nos clients.
                        </p></div>
                    <div class="item">
                        <h3>Contenu 100% Original et Personnalisé</h3>
                        <br />
                        <p>
                            Notre travail est entièrement axé sur la satisfaction du client, ce qui signifie que nous nous engageons à fournir un service 100% original et personnalisé. Nous comprenons que chaque client a des besoins uniques et nous sommes déterminés à répondre à ces besoins de manière efficace et personnalisée.
                        </p></div>
                    <div class="item">
                        <h3>Rédacteurs professionnels triés sur le volet</h3>
                        <br />
                        <p>
                            Notre équipe de rédacteurs est composée de professionnels triés sur le volet, sélectionnés pour leur expérience et leurs compétences en rédaction. Nous sommes fiers de pouvoir offrir à nos clients des textes de qualité supérieure, rédigés par des experts dans leur domaine.
                        </p></div>
                </div>
            </section>
        </>
    );
};

export default WorkQuality;
