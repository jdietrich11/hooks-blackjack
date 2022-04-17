import React from 'react';

import './playfield.scss';

const DealerHand = (props) => {
  return (
    <div className='dealer'>
      {props.value.map((i) => {
        return (
          <div key={i + Math.random()} className='card'>
            <img
              src={`https://deckofcardsapi.com/static/img/${i}.png`}
              alt={i}
              className='card__img'
            />
          </div>
        );
      })}
    </div>
  );
};

export default DealerHand;
