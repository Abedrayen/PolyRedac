import React, { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../firebase-config'
import Navbar from '../../Navbar'
import { useNavigate } from "react-router-dom";
import { RiArrowRightSLine } from 'react-icons/ri';

function Home() {
    const [postLists, setPostList] = useState([]);
    const [posts, setPosts] = useState([]);
    const postsCollectionRef = collection(db, "posts");
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).sort((a, b) => b.date.localeCompare(a.date)));
        }
        getPosts();
    }, []);

    const handleClick = (postId) => {
        navigate(`/Blog/${postId}`);
    };

    const latestPost = postLists.length ? postLists[0] : null;

    return (
        <>
            <div className="parent-container">
                {latestPost && (
                    <div className="latest-post-container">
                        <div className="latest-post" style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ flex: '1' }}>
                                <img src={latestPost.image} alt="" style={{ maxWidth: '100%', Height: '100%', textAlign: 'center', margin: '0 ', padding: '0' }} />
                            </div>
                            <div style={{ flex: '1', marginRight: '20px' }}>
                                <div className="tile">
                                    <h3 style={{ textAlign: 'center', alignItems: 'center', marginTop: "3%" }}>{latestPost.title}</h3>
                                </div>

                                <div style={{ padding: "20px", color: "#222" }}>
                                    <div dangerouslySetInnerHTML={{ __html: latestPost.postText.slice(0, 500) }} />
                                </div>

                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <h6 style={{ textAlign: "start", padding: "2%" }}>PolyRedac Blog</h6>
                                    <h6 style={{ textAlign: "end", padding: "2%" }}>{latestPost.date}</h6>
                                </div>

                                <button className="read-button" onClick={() => handleClick(latestPost.id)}>
                                    <span>Lire la suite</span>
                                    <RiArrowRightSLine />
                                </button>
                            </div>


                        </div>
                    </div>
                )}
            </div>



            <div className="homePage" style={{ padding: '5px', margin: '5px', maxHeight: '100%', textAlign: "center" }}>
                {postLists.slice(1).map((post) => (
                    <div key={post.id} className="post" onClick={() => handleClick(post.id)} >
                        <div style={{ textAlign: 'center' }}>
                            <img src={post.image} alt="" style={{ maxWidth: '100%', maxHeight: '100%', textAlign: 'center', margin: '0 ' }} />
                        </div>
                        <div className="tile">
                            <h3 style={{ textAlign: 'center', alignItems: 'center' }}>{post.title}</h3>
                        </div>

                        <div style={{ padding: "20px", color: "#222" }}>
                            <div dangerouslySetInnerHTML={{ __html: post.postText.slice(0, 250) }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <h6 style={{ textAlign: "start", padding: "2%" }}>PolyRedac Blog</h6>
                            <h6 style={{ textAlign: "end", padding: "2%" }}>{post.date}</h6>
                        </div>

                        <button className="read-more-button">
                            <span>Lire la suite</span>
                            <RiArrowRightSLine />
                        </button>
                    </div>
                ))}
            </div>



        </>

    );
}
export default Home;


