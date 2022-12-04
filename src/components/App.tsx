import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Protected from "./Protected";
import RecipeControl from "./RecipeControl";
import SignIn from "../pages/SignIn";
import MyRecipes from "../pages/MyRecipes";
import { AuthContextProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "../pages/Home";
import { Container } from "@mui/material";
import About from "../pages/About";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        {/* <Header /> */}
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/MyRecipes"
            element={
              <Protected>
                <MyRecipes />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
