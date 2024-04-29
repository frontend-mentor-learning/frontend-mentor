// pages/recipe.tsx
import Head from 'next/head';

const RecipePage = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-eggshell p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <img className="rounded-lg mb-4" src="/image-omelette.jpeg" alt="Omelette" />
          <h1 className="text-3xl font-youngserif mb-2 text-border-dark">Simple Omelette Recipe</h1>
          <p className="text-text-primary">
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
            to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>

          <div className="bg-text-accent rounded-lg p-4 mt-4">
            <p className="font-bold text-lg">Preparation time</p>
            <ul className="list-disc pl-5">
              <li>Total: Approximately 10 minutes</li>
              <li>Preparation: 5 minutes</li>
              <li>Cooking: 5 minutes</li>
            </ul>
          </div>

          <div className="mt-4">
            <p className="text-xl font-youngserif text-text-secondary">Ingredients</p>
            <ul className="list-disc pl-5">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
          </div>

          <hr className="my-4 border-border-light" />

          <div className="mt-4">
            <p className="text-xl font-youngserif text-text-secondary">Instructions</p>
            <ol className="list-decimal pl-8">
              <li><strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                You can add a tablespoon of water or milk for a fluffier texture.</li>
              <li><strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</li>
              <li><strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                the eggs evenly coat the surface.</li>
              <li><strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the
                middle, sprinkle your chosen fillings over one half of the omelette.</li>
              <li><strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the
                fillings. Let it cook for another minute, then slide it onto a plate.</li>
              <li><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</li>
            </ol>
          </div>

          <hr className="my-4 border-border-light" />

          <div className="mt-4">
            <p className="text-xl font-youngserif text-text-secondary">Nutrition</p>
            <div className="flex justify-between font-bold">
              <span className="text-text-secondary">Calories</span><span className="text-text-secondary">27kcal</span>
              <span className="text-text-secondary">Carbs</span><span className="text-text-secondary">0g</span>
              <span className="text-text-secondary">Protein</span><span className="text-text-secondary">20g</span>
              <span className="text-text-secondary">Fat</span><span className="text-text-secondary">22g</span>
            </div>
          </div>

          <div className="text-xs text-center text-text-accent mt-4">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className="text-blue-600" target="_blank">Frontend Mentor</a>.
            Coded by <a href="#">Your Name</a>.
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePage;
