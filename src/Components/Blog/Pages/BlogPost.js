import React from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase-config'
import Navbar from '../../Navbar'
import { useState } from "react";
import { useEffect } from "react";
import Footer from '../../Footer'
import './BlogPost.css'
function BlogPost() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const postRef = doc(db, "posts", postId);
            const docSnapshot = await getDoc(postRef);
            if (docSnapshot.exists()) {
                setPost(docSnapshot.data());
            }
        }
        fetchPost();
    }, [postId]);

    if (!post) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Navbar />
            <div className="blogPost">
                <div className="postHeader">
                    <div className="title">
                        <h1>{post.title}</h1>
                    </div>
                </div>
                <br />
                <div style={{ textAlign: 'center' }}>
                    <img src={post.image} alt="" style={{ maxWidth: '500px', maxHeight: '500px', textAlign: 'center', display: 'block', margin: '0 auto' }} />
                </div>
                <br />
                <div dangerouslySetInnerHTML={{ __html: post.postText }} />
                <div style={{ display: "flex", direction: "row" }}>
                    <h4 style={{ textAlign: "start", padding: "2%" }}>PolyRedac Blog</h4>
                    <h4 style={{ textAlign: "end", padding: "2%", left: "0" }}>{post.date}</h4>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogPost;
