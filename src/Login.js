import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "./firebase";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      navigate("/");
    });
  };
  return (
    <>
      <p>ログインする</p>
      <button onClick={loginWithGoogle}>ログイン</button>
    </>
  );
}

export default Login;
