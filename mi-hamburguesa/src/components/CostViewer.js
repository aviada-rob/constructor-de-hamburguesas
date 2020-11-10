import React from 'react';

const CostViewer = props => {
  return (
    <div className='cost-viewer'>
      <h2>Costo</h2>
      <h1>$
        {
          props.ingredients.length > 0
          ? props.ingredients.map(ingredient=> ingredient.cost).reduce((a,b) => a+b)
          : '0.00'
        }
     </h1>
    </div>
  );
}

export default CostViewer;