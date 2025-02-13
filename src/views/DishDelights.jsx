import React, { useState } from "react";
import "../App.css";
import chocolateCakeImage from "../assets/chocolate-cake.jpg";
import bananaBreadImage from "../assets/banana-bread.jpg";
import blueberryMuffinsImage from "../assets/blueberry-muffins.jpg";
import applePieImage from "../assets/apple-pie.jpg";
import cinnamonRollsImage from "../assets/cinnamon-rolls.jpg";
import lemonTartImage from "../assets/lemon-tart.jpg";

// Recipes data
const recipesData = [
  {
    id: 1,
    title: "Chocolate Cake",
    ingredients: [
      "2 cups of flour",
      "1 cup of sugar",
      "1/2 cup of cocoa powder",
      "1 tsp baking powder",
      "2 eggs",
      "1/2 cup of milk",
    ],
    time: "1 hour",
    servings: "8 servings",
    steps: [
      "Preheat the oven to 180°C (350°F).",
      "Mix dry ingredients in one bowl.",
      "Mix wet ingredients in another bowl.",
      "Combine the wet and dry ingredients.",
      "Pour into a baking pan and bake for 35 minutes.",
    ],
    image: chocolateCakeImage,
  },
  {
    id: 2,
    title: "Banana Bread",
    ingredients: [
      "3 ripe bananas",
      "2 cups of flour",
      "1 cup of sugar",
      "1 tsp baking soda",
      "1/2 cup of butter",
      "2 eggs",
    ],
    time: "1 hour",
    servings: "6 servings",
    steps: [
      "Preheat the oven to 175°C (350°F).",
      "Mash the bananas and mix with sugar and butter.",
      "Add the eggs and mix well.",
      "Sift in the dry ingredients and mix until combined.",
      "Pour into a loaf pan and bake for 50 minutes.",
    ],
    image: bananaBreadImage,
  },
  {
    id: 3,
    title: "Blueberry Muffins",
    ingredients: [
      "2 cups of flour",
      "1/2 cup of sugar",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "1 cup of milk",
      "1 cup of blueberries",
      "1/4 cup of butter",
    ],
    time: "30 minutes",
    servings: "12 muffins",
    steps: [
      "Preheat the oven to 200°C (400°F).",
      "Mix dry ingredients in one bowl.",
      "Mix wet ingredients in another bowl.",
      "Combine the wet and dry ingredients and fold in the blueberries.",
      "Pour into muffin cups and bake for 20 minutes.",
    ],
    image: blueberryMuffinsImage,
  },
  {
    id: 4,
    title: "Apple Pie",
    ingredients: [
      "4 apples (peeled and sliced)",
      "2 cups of flour",
      "1 cup of sugar",
      "1/2 cup of butter",
      "1 tsp cinnamon",
      "1/4 tsp salt",
    ],
    time: "1.5 hours",
    servings: "8 servings",
    steps: [
      "Preheat the oven to 180°C (350°F).",
      "Prepare the pie crust and let it chill.",
      "Mix apple slices with sugar and cinnamon.",
      "Fill the pie crust with the apple mixture.",
      "Cover with the top crust and bake for 45 minutes.",
    ],
    image: applePieImage,
  },
  {
    id: 5,
    title: "Cinnamon Rolls",
    ingredients: [
      "2 cups of flour",
      "1/4 cup of sugar",
      "1 tsp yeast",
      "1/2 cup of milk",
      "1/4 cup of butter",
      "1 tsp cinnamon",
    ],
    time: "2 hours",
    servings: "12 rolls",
    steps: [
      "Prepare the dough and let it rise for 1 hour.",
      "Roll out the dough and spread butter, sugar, and cinnamon.",
      "Roll up the dough and slice into rolls.",
      "Bake at 180°C (350°F) for 20 minutes.",
    ],
    image: cinnamonRollsImage,
  },
  {
    id: 6,
    title: "Lemon Tart",
    ingredients: [
      "1 cup of flour",
      "1/4 cup of sugar",
      "1/2 cup of butter",
      "3 lemons (juiced and zested)",
      "1/2 cup of cream",
      "4 eggs",
    ],
    time: "1 hour",
    servings: "8 servings",
    steps: [
      "Preheat the oven to 175°C (350°F).",
      "Prepare the tart crust and let it chill.",
      "Mix lemon juice, zest, eggs, cream, and sugar.",
      "Pour into the tart crust and bake for 25 minutes.",
    ],
    image: lemonTartImage,
  },
];

export default function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="recipes-container">
      <h1>DishDelights Recipes</h1>

      {/* Recipes Grid */}
      <div className="recipes-grid">
        {recipesData.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => setSelectedRecipe(recipe)}
          >
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </div>

      {/* Recipe Details Dialog */}
      {selectedRecipe && (
        <div className="recipe-dialog">
          <div className="dialog-content">
            <button className="close-button" onClick={() => setSelectedRecipe(null)}>
              &times;
            </button>
            <h2>{selectedRecipe.title}</h2>
            <p><strong>Time to Make:</strong> {selectedRecipe.time}</p>
            <p><strong>Servings:</strong> {selectedRecipe.servings}</p>
            <p><strong>Ingredients:</strong></p>
            <ul>
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p><strong>Steps to Make:</strong></p>
            <ol>
              {selectedRecipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
