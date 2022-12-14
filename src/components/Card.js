import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const MAGICNUMBER = 12;

export default function Card({ data, type }) {
  if (data === null) {
    global.alert('Sorry, we haven\'t found any recipes for these filters.');
  }

  return (
    data
    && data.map((obj, index) => index < MAGICNUMBER && (
      data.length < 2
        ? (
          <Redirect
            push
            to={ type === 'Foods' ? `/foods/${obj.idMeal}` : `/drinks/${obj.idDrink}` }
          />)
        : (
          <div className="card-div" data-testid={ `${index}-recipe-card` } key={ index }>
            <Link to={ `/foods/${obj.idMeal}` }>
              <img
                src={ data[0]
                  .strMeal === undefined ? obj.strDrinkThumb : obj.strMealThumb }
                alt="imagem"
                className="card-img"
                data-testid={ `${index}-card-img` }
                style={ { pointerEvents: 'auto' } }
              />
            </Link>
            <h4
              data-testid={ `${index}-card-name` }
            >
              {data[0].strMeal === undefined ? obj.strDrink : obj.strMeal}

            </h4>
          </div>)
    )));
}
