import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Polyredac from './Components/Polyredac'
import Home from "./Components/Blog/Pages/Home";
import CreatePost from "./Components/Blog/Pages/CreatePost";
import Login from "./Components/Blog/Pages/Login";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import BlogPost from './Components/Blog/Pages/BlogPost';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase-config'
import Cantact from './Components/Cantact';
import Blog from './Components/Blog/Blog'
import Cantactpage from './Components/Cantactpage';
import Services from './Components/Service/Services';
import CalendlyWidget from './Components/Calendly';

function App() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/login";
        });
    };
    const [userInfo, setUserInfo] = useState({})
    const [source, setSource] = useState('')
    const [posts, setPosts] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async() => {
            const data = await getDocs(postsCollectionRef);
            setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        }
        getPosts();
    }, []);


    return ( <
            >
            <
            Router >

            <
            Routes >
            <
            Route path = '/'
            element = { < Polyredac / > }
            /> <
            Route path = '/About'
            element = { < About / > }
            /> <
            Route path = "/Blog"
            element = { < Blog / > }
            /> <
            Route path = "/Blog/createpost"
            element = { < CreatePost isAuth = { isAuth }
                />} / >
                <
                Route path = "/Login"
                element = { < Login setIsAuth = { setIsAuth }
                    />} / >
                    <
                    Route path = "/blog/:postId"
                    element = { < BlogPost / > }
                    /> <
                    Route path = "/Cantact"
                    element = { < Cantactpage / > }
                    /> <
                    Route path = "/Service"
                    element = { < Services / > }
                    /> <
                    Route path = "/rdv"
                    element = { < CalendlyWidget / > }
                    /> <
                    /Routes> <
                    /Router> <
                    />
                );
            }

            export default App;