import React, { useEffect } from "react";
import { auth } from "../helpers/firebase";
import { UserAuth } from "../context/AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";

function SignIn() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      // remember state for redirect
      sessionStorage.setItem("logging-in", "true");
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null && sessionStorage.getItem("logging-in") === "true") {
      sessionStorage.removeItem("logging-in");
      navigate("/MyRecipes");
    }
  }, [user, navigate]);

  return (
    <React.Fragment>
      <Stack
        sx={{
          margin: "0 0 50% 60%",
        }}
      >
        {user ? "" : <GoogleButton onClick={handleGoogleSignIn} />}
      </Stack>
    </React.Fragment>
  );
}

export default SignIn;
