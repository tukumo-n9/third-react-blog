import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Logout({ setIsAuth }) {
  const navigate = useNavigate();
  const onSignOut = () => {
    signOut(auth).then(() => {
      setIsAuth(false);
      localStorage.setItem("isAuth", false);
      navigate("/");
    });
  };
  return (
    <>
      <p>ログアウトする</p>
      <button type="button" onClick={onSignOut}>
        ログアウト
      </button>
    </>
  );
}

export default Logout;
