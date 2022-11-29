import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Protected from "./Protected";
import RecipeControl from "./RecipeControl";
import SignIn from "./SignIn";
import Account from "../pages/Account";
import { AuthContextProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/" element={<RecipeControl />} />
          <Route
            path="/Account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
