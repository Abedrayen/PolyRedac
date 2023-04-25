import React, { useState } from "react";
import "./Navbar.css";
import About from "./About";
import Home from "./Polyredac";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate, Link } from 'react-router'
import wa from '../Images/Logo_PolyRedac-removebg-preview.png'
function Navbar() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/login";
        });
    };
    const navigate = useNavigate()

    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };

    return (
        <nav className="nav">
            <ul className={active}>
                <li className="nav__item">  <img src={wa} alt="Logo" width="90" height="90" /></li>
                <li className="nav__item"> <a href="" className="nav__brand" onClick={() => {
                    navigate('/')
                }}>
                    Polyredac
                </a></li>
            </ul>
            <ul className={active}>
                <li className="nav__item" >
                    <a href='' className="nav__link" onClick={() => {
                        navigate('/Service')
                    }} >
                        Services
                    </a>
                </li>
                <li className="nav__item">
                    <a href='' className="nav__link" onClick={() => {
                        navigate('/About')
                    }}>
                        About
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link" onClick={() => { navigate('/Blog') }}>
                        Actualitè
                    </a>
                </li>

                <li className="nav__item">
                    <a href='' className="nav__link" onClick={() => {
                        navigate('/Cantact')
                    }}>
                        Contact
                    </a>
                </li>

                {!isAuth ? (<></>
                ) : (<>      <li className="nav__item">
                    <a href='' className="nav__link" onClick={() => {
                        navigate('/Blog/createpost')
                    }}>
                        CreatePost
                    </a>
                </li>
                    <li className="nav__item">
                        <a href='' className="nav__link" onClick={() => {
                            signUserOut()
                        }}>
                            LogOut
                        </a>
                    </li></>
                )}

            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;