import React from "react";
import RecipeControl from "../components/RecipeControl";
import { UserAuth } from "../context/AuthContext";

const MyRecipes = () => {
  const { user } = UserAuth();
  // const handleSignOut = async () => {
  //   try {
  //     await logOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="w-[300px] m-auto">
      <h1 className="text-center text-2xl font-bold pt-12">
        My recipe dashboard
      </h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>

      <RecipeControl />
    </div>
  );
};

export default MyRecipes;
