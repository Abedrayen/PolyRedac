import React from 'react';
import './Services.css'
import { FaPencilAlt } from 'react-icons/fa';
import { GiBullseye } from 'react-icons/gi';
import { BsFileEarmarkText } from 'react-icons/bs';
import Hservice from './Hservice';
import Navbar from '../Navbar'
import Footer from '../Footer';
import { FaBlog, FaEnvelope, FaFileAlt, FaPen, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Services = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <Hservice />
            <div className="services-container">
                <div className="services-header">
                    <br />
                    <h2 style={{ fontSize: "40px" }}>NOS SERVICES</h2>
                </div>
                <div className="services-content">
                    <div className="service">
                        <div className="service-icon">
                            <FaPencilAlt size={48} color="#006699" />
                        </div>
                        <div className="service-info">
                            <h3>Copywriting</h3>
                            <p>
                                Our team of experienced copywriters can create compelling content for your website, blog, social media, and more.
                            </p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <GiBullseye size={48} color="#006699" />
                        </div>
                        <div className="service-info">
                            <h3>Content Strategy</h3>
                            <p>
                                We can help you develop a content strategy that aligns with your business goals and engages your target audience.
                            </p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon">
                            <BsFileEarmarkText size={48} color="#006699" />
                        </div>
                        <div className="service-info">
                            <h3>Editing</h3>
                            <p>
                                Whether you need proofreading, copy editing, or substantive editing, our team can ensure that your content is error-free and polished.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-containers" style={{ maxWidth: "1000px", margin: " 0 auto", padding: "50px 20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <div
                    style={{
                        backgroundColor: "#f2f2f2",
                        padding: "20px",
                        borderRadius: "10px",
                        textAlign: "center",
                        marginBottom: "50px",
                    }}
                >
                    <p style={{ fontSize: "2rem" }}>
                        En tant qu'agence web, nous proposons des services de rédaction et de
                        création de contenu abordables qui peuvent vous aider à supercharger
                        votre contenu et à obtenir des textes parfaits à chaque fois.
                    </p>
                    <br />
                    <button style={{
                        padding: "10px 20px", fontSize: "1.8rem", backgroundColor: "#4811588c",
                        color: "white",
                        border: "none",
                        borderRadius: "30px",
                        cursor: "pointer"
                    }} onClick={() => {
                        navigate('/rdv')
                    }} >
                        Plannifier un rendez-vos avec PolyRedac
                    </button>
                </div>
                <div className="services-list" style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "spaceBetween"
                }} >
                    <div className="service-item" style={{ display: "flex", width: "300px", flexDirection: "column" }}>
                        <FaBlog size={30} color="#1abc9c" padding="3%" />
                        <h3>Articles de blog</h3>
                        <p>Des articles de blog uniques et intéressants pour attirer du trafic et engager votre public cible.</p>
                    </div>
                    <div className="service-item" style={{ display: "flex", width: "300px", flexDirection: "column" }}>
                        <FaUsers size={30} color="#1abc9c" />
                        <h3>Contenu pour les médias sociaux</h3>
                        <p>Des publications de qualité pour vos réseaux sociaux pour renforcer votre présence en ligne et votre engagement.</p>
                        <p>Des publications de qualité pour vos réseaux sociaux pour renforcer votre présence en ligne et votre engagement.</p>
                    </div>
                    <div className="service-item" style={{ display: "flex", width: "300px", flexDirection: "column" }}>
                        <FaFileAlt size={30} color="#1abc9c" />
                        <h3>Rédaction de sites web</h3>
                        <p>Des descriptions de produits, des pages de services et des textes de vente accrocheurs pour votre site web.</p>
                    </div>
                    <div className="service-item" style={{ display: "flex", width: "300px", flexDirection: "column" }}>
                        <FaEnvelope size={30} color="#1abc9c" />
                        <h3>Marketing par courriel</h3>
                        <p>Des newsletters et des e-mails promotionnels efficaces pour fidéliser vos clients et augmenter vos ventes.</p>
                    </div>
                    <div className="service-item" style={{ display: "flex", width: "300px", flexDirection: "column" }}>
                        <FaPen size={30} color="#1abc9c" />
                        <h3>Rédaction personnalisée</h3>
                        <p>Des textes personnalisés pour vos besoins spécifiques, adaptés à votre entreprise et à votre public cible.</p>
                    </div>
                </div>
                <div className="services-pricing">
                    <h2>Options tarifaires flexibles</h2>
                    <p>Nous proposons des options tarifaires flexibles pour s'adapter à votre budget, et nos délais d'exécution sont parmi les plus rapides du secteur.</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Services;