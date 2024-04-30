import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";

function Home() {
  const [postList, setPostList] = useState([]);

  const getPosts = async () => {
    const data = await getDocs(collection(db, "posts"));
    // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    console.log(postList);
  }, [postList]);

  const onDeletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    getPosts();
  };
  return (
    <>
      <h1>Blog</h1>
      {postList.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>@{post.author.name}</p>
          {post.author.id === auth.currentUser?.uid && (
            <button onClick={() => onDeletePost(post.id)}>削除</button>
          )}
        </div>
      ))}
    </>
  );
}

export default Home;
