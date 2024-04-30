import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    console.log("title:", title);
  }, [title]);

  useEffect(() => {
    console.log("content:", content);
  }, [content]);

  const navigate = useNavigate();

  const onCreatePost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      content: content,
      author: {
        name: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
      },
    });
    navigate("/");
  };

  return (
    <>
      <label htmlFor="title">タイトル</label>
      <input
        type="text"
        id="title"
        placeholder="タイトルを入力"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content">内容</label>
      <textarea
        id="content"
        placeholder="内容を入力"
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="button" onClick={onCreatePost}>
        投稿
      </button>
    </>
  );
}

export default CreatePost;
