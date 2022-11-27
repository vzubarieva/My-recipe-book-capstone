import React from "react";
import Header from "./Header";
import RecipeControl from "./RecipeControl";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<RecipeControl />} />
      </Routes>
    </Router>
  );
}

export default App;
