import React, { useState, useEffect } from "react";
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
import MyRecipes from "./MyRecipes";

function SignIn() {
  // const [signUpSuccess, setSignUpSuccess] = useState<string>("");
  // const [signInSuccess, setSignInSuccess] = useState<string>("");
  // const [signOutSuccess, setSignOutSuccess] = useState<string>("");

  // const doSignUp = (event) => {
  //   event.preventDefault();
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       setSignUpSuccess(
  //         `You've successfully signed up, ${userCredential.user.email}!`
  //       );
  //     })
  //     .catch((error) => {
  //       setSignUpSuccess(`There was an error signing up: ${error.message}!`);
  //     });
  // };

  // const doSignIn = (event) => {
  //   event.preventDefault();
  //   const email = event.target.signinEmail.value;
  //   const password = event.target.signinPassword.value;
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       setSignInSuccess(
  //         `You've successfully signed in as ${userCredential.user.email}!`
  //       );
  //     })
  //     .catch((error) => {
  //       setSignInSuccess(`There was an error signing in: ${error.message}!`);
  //     });
  // };

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/MyRecipes");
    }
  }, [user, navigate]);

  // const doSignOut = () => {
  //   signOut(auth)
  //     .then(function () {
  //       setSignOutSuccess("You have successfully signed out!");
  //     })
  //     .catch(function (error) {
  //       setSignOutSuccess(`There was an error signing out: ${error.message}!`);
  //     });
  // };

  return (
    <React.Fragment>
      {/* <h1>Sign up</h1>
      {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign up</button>
      </form>

      <h1>Sign In</h1>
      {signInSuccess}
      <form onSubmit={doSignIn}>
        <input type="text" name="signinEmail" placeholder="email" />
        <input type="password" name="signinPassword" placeholder="Password" />
        <button type="submit">Sign in</button>
      </form> */}

      <Stack
        sx={{
          margin: "0 0 50% 60%",
        }}
      >
        <GoogleButton onClick={handleGoogleSignIn} />{" "}
      </Stack>

      {/* <h1>Sign Out</h1>
      {signOutSuccess}
      <br />
      <button onClick={doSignOut}>Sign out</button> */}
    </React.Fragment>
  );
}

export default SignIn;
