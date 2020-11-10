import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import { Button } from '@material-ui/core';

const IngredientsList = props => {
  return (
    <div className='ingredients-list'>
      <h2>Lista de Ingredientes</h2>
      <ul>
        {
          props.ingredients.map((ingredient, index)=>(
          <li key={ 'ingredients' + ingredient.id +index }>
            <CheckIcon />
            { ingredient.ingredient }
          </li>
          ))
        }
      </ul>
      <Button
        onClick={ props.startOver }
        variant='contained'
        color='default'
        size='large'
        className='ingredient'
      >
        Volver a iniciar
      </Button>
    </div>
  );
}

export default IngredientsList;