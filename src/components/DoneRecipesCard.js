import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

export default function DoneRecipesCard(props) {
  const [copied, setcopied] = useState(false);

  const {
    recipeImage,
    recipeName,
    recipeCategory,
    recipeNationality,
    recipeDate,
    recipeTag,
    recipeIndex,
    recipeType,
    isAlcoholic,
    recipeId,
  } = props;

  const handleClick = () => {
    setcopied(!copied);
    navigator.clipboard.writeText(`http://localhost:3000/${recipeType}s/${recipeId}`);
  };

  /*   if (recipeType === 'Food') {
    return (
      <div>
        <img
          data-testid={ `${recipeIndex}-horizontal-image` }
          src={ recipeImage }
          alt="imagem da receita feita"
        />
        <h4 data-testid={ `${recipeIndex}-horizontal-name` }>{recipeName}</h4>
        <p data-testid={ `${recipeIndex}-horizontal-top-text` }>{recipeCategory}</p>
        <p>{recipeNationality}</p>
        <p data-testid={ `${recipeIndex}-horizontal-done-date` }>{recipeDate}</p>
        {recipeTag.map((recipe, index) => (
          index < 1 && (
            <span
              data-testid={ `${index}-${recipe}-horizontal-tag` }
              key={ `${recipe}${index}` }
            >
              {recipe}
            </span>)
        ))}
        <img
          data-testid={ `${recipeIndex}-horizontal-share-btn` }
          src={ shareIcon }
          alt="icone de compartilhamento"
        />
      </div>
    );
  }
  if (recipeType === 'Drink') {
    return (
      <div>
        <img
          data-testid={ `${recipeIndex}-horizontal-image` }
          src={ recipeImage }
          alt="imagem da receita feita"
        />
        <h4 data-testid={ `${recipeIndex}-horizontal-name` }>{recipeName}</h4>
        <p>{isAlcoholic}</p>
        <p data-testid={ `${recipeIndex}-horizontal-done-date` }>{recipeDate}</p>
        <img
          data-testid={ `${recipeIndex}-horizontal-share-btn` }
          src={ shareIcon }
          alt="icone de compartilhamento"
        />
      </div>
    );
  } */

  const renderCards = (Type) => {
    switch (Type) {
    case 'food':
      return (
        <div>
          <Link to={ `/${recipeType}s/${recipeId}` }>
            <img
              data-testid={ `${recipeIndex}-horizontal-image` }
              src={ recipeImage }
              alt="imagem da receita feita"
              style={ { pointerEvents: 'auto' } }
            />
            <h4 data-testid={ `${recipeIndex}-horizontal-name` }>{recipeName}</h4>
          </Link>
          <p data-testid={ `${recipeIndex}-horizontal-top-text` }>
            {`${recipeNationality} - ${recipeCategory}`}
          </p>
          <p data-testid={ `${recipeIndex}-horizontal-done-date` }>{recipeDate}</p>
          {recipeTag.map((recipe, index) => (
            index < 2 && (
              <span
                data-testid={ `${0}-${recipe}-horizontal-tag` }
                key={ `${recipe}${index}` }
              >
                {recipe}
              </span>)
          ))}
          <button
            type="button"
            data-testid={ `${recipeIndex}-horizontal-share-btn` }
            src={ shareIcon }
            onClick={ () => handleClick() }
          >
            {copied ? 'Link copied!'
              : (
                <img
                  src={ shareIcon }
                  alt="icone de compartilhamento"
                />)}
          </button>
        </div>
      );
    case 'drink':
      return (
        <div>
          <Link to={ `/${recipeType}s/${recipeId}` }>
            <img
              data-testid={ `${recipeIndex}-horizontal-image` }
              src={ recipeImage }
              alt="imagem da receita feita"
            />
            <h4 data-testid={ `${recipeIndex}-horizontal-name` }>{recipeName}</h4>
          </Link>
          <p data-testid={ `${recipeIndex}-horizontal-top-text` }>{isAlcoholic}</p>
          <p data-testid={ `${recipeIndex}-horizontal-done-date` }>{recipeDate}</p>
          <img
            data-testid={ `${recipeIndex}-horizontal-share-btn` }
            src={ shareIcon }
            alt="icone de compartilhamento"
          />
        </div>
      );
    default:
      break;
    }
  };

  return (
    <div>
      {renderCards(recipeType)}
    </div>
  );
}

DoneRecipesCard.propTypes = {
  recipeCategory: PropTypes.string.isRequired,
  recipeDate: PropTypes.string.isRequired,
  recipeImage: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeTag: PropTypes.instanceOf(Array).isRequired,
  recipeIndex: PropTypes.number.isRequired,
  recipeType: PropTypes.string.isRequired,
  recipeNationality: PropTypes.string.isRequired,
  isAlcoholic: PropTypes.string.isRequired,
  recipeId: PropTypes.string.isRequired,
};
