import PropTypes from 'prop-types';
import React from 'react';
import RecipesCard from './RecipesCard';

const MAX_NUMBER_OF_RECIPES_LISTED = 12;

export default function RecipesList({ arrayOfRecipes, recipesType }) {
  const NUMBER_OF_RECIPES_LISTED = arrayOfRecipes.length < MAX_NUMBER_OF_RECIPES_LISTED
    ? arrayOfRecipes.length : MAX_NUMBER_OF_RECIPES_LISTED;

  const listRecipes = (array, listLength, type) => {
    const recipes = [];
    for (let index = 0; index < listLength; index += 1) {
      if (type === '/foods') {
        const { strMealThumb, strMeal } = array[index];
        recipes
          .push(<RecipesCard
            key={ `${index}${strMeal}` }
            image={ strMealThumb }
            name={ strMeal }
            id={ index }
            type={ type }
          />);
      }

      if (type === '/drinks') {
        const { strDrink, strDrinkThumb } = array[index];
        recipes
          .push(<RecipesCard
            key={ `${index}${strDrink}` }
            image={ strDrinkThumb }
            name={ strDrink }
            id={ index }
            type={ type }
          />);
      }
    }
    return recipes;
  };
  return (
    <section>
      {listRecipes(arrayOfRecipes, NUMBER_OF_RECIPES_LISTED, recipesType)}
    </section>
  );
}

RecipesList.propTypes = {
  arrayOfRecipes: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipesType: PropTypes.string.isRequired,
};
