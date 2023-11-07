import { RecipeSearch } from "../components/ui/RecipeSearch";
import { useState } from "react";
import { RecipeCard } from "./RecipeCard";
import "./RecipeListPage.css";

export function RecipeListPage() {
  let [recipe, setRecipe] = useState();

  return (
    <>
      <div className="RecipeListPage">
        {recipe ? (
          <RecipeCard selectedRecipe={recipe} clickFn={setRecipe} />
        ) : (
          <RecipeSearch clickFn={setRecipe} />
        )}
      </div>
    </>
  );
}