import React from 'react';

const HamburgerView = props => {
  return (
    <div className='hamburger-view'>
      <h2>Mi Hamburguesa</h2>
      <ul className='burger'>
        {
          props.ingredients.map((ingredient, index)=>(
          <li key={ 'ingredients' + ingredient.id +index } className={ ingredient.classes }></li>
          ))
        }
      </ul>
      <h3>
        Calorías Totales: 
        {
          props.ingredients.length > 0
          ? ' ' + props.ingredients.map(ingredient=> ingredient.calories).reduce((a,b) => a+b)
          : ' 0'
        } Kcal.
      </h3>
    </div>
  );
}

export default HamburgerView;