import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../../firebase-config";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePost({ isAuth }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [postText, setPostText] = useState("");
    const [editorHtml, setEditorHtml] = useState("");
    const [image, setImage] = useState("");
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, false] }],
            [{ font: [] }],
            [{ size: ["small", false, "large", "huge"] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            [{ align: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }, { direction: "ltr" }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "color",
        "background",
        "script",
        "align",
        "list",
        "bullet",
        "indent",
        "direction",
        "link",
        "image",
        "video",
    ];

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        };
    };
    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText: editorHtml,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
            image: image,
            date,
        });
        navigate("/Blog");
    };

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create A Post</h1>
                <div className="inputGp">
                    <label> Title:</label>
                    <input
                        placeholder="Title..."
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />

                </div>
                <div className="inputGp">
                    <label> Post:</label>
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={editorHtml}
                        onChange={(value) => setEditorHtml(value)}
                    />
                </div>
                <div className="inputGp">
                    <label>Upload Image:</label>
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                </div>
                <div className="inputGp">
                    <label> Date:</label>
                    <input
                        placeholder="Date..."
                        onChange={(event) => {
                            setDate(event.target.value);
                        }}
                    />
                </div>

                <button onClick={createPost}> Submit Post</button>
            </div>
        </div>
    );
}

export default CreatePost;
