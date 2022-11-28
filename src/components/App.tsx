import React from "react";
import Header from "./Header";
import RecipeControl from "./RecipeControl";
import SignIn from "./SignIn";
import { AuthContextProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<RecipeControl />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
