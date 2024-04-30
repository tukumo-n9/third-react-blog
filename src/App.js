import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CreatePost from "./CreatePost";
import Navbar from "./Navbar";
import Login from "./Login";
import Logout from "./Logout";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") || false);
  return (
    <BrowserRouter>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
