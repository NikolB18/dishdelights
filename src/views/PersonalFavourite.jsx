import { useState, useEffect } from 'react';
import '../App.css';

export default function PersonalFavoutite() {
    const [recipes, setRecipes] = useState(() => {
        const savedRecipes = localStorage.getItem('personalRecipes');
        return savedRecipes ? JSON.parse(savedRecipes) : [];
    });

    const [currentRecipe, setCurrentRecipe] = useState({ title: '', content: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

   
    useEffect(() => {
        localStorage.setItem('personalRecipes', JSON.stringify(recipes));
    }, [recipes]);

    function handleChange(e) {
        const { name, value } = e.target;
        setCurrentRecipe({ ...currentRecipe, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (isEditing) {
            const updatedRecipes = recipes.map((recipe, index) =>
                index === editIndex ? currentRecipe : recipe
            );
            setRecipes(updatedRecipes);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setRecipes([...recipes, currentRecipe]);
        }
        setCurrentRecipe({ title: '', content: '' });
    }

    function handleDelete(index) {
        const updatedRecipes = recipes.filter((_, i) => i !== index);
        setRecipes(updatedRecipes);
    }

    function handleEdit(index) {
        setCurrentRecipe(recipes[index]);
        setIsEditing(true);
        setEditIndex(index);
    }

    return (
        <div className="personal-favourites-container">
            <h1>Personal Favorite Recipes</h1>
            <form onSubmit={handleSubmit} className="recipe-form">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={currentRecipe.title}
                        onChange={handleChange}
                        placeholder="Enter recipe title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Recipe:</label>
                    <textarea
                        name="content"
                        id="content"
                        value={currentRecipe.content}
                        onChange={handleChange}
                        placeholder="Enter the recipe details"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    {isEditing ? 'Update Recipe' : 'Add Recipe'}
                </button>
            </form>

            <h2>Your Recipes</h2>
            <ul className="recipes-list">
                {recipes.length === 0 && <p>No recipes added yet.</p>}
                {recipes.map((recipe, index) => (
                    <li key={index} className="recipe-card">
                        <h3>{recipe.title}</h3>
                        <p>{recipe.content}</p>
                        <div className="actions">
                            <button onClick={() => handleEdit(index)} className="edit-button">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(index)} className="delete-button">
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

