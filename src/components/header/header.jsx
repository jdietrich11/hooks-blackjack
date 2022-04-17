import React from 'react';

import './header.scss';

const logo = require('../../img/logo.png');

const Header = (props) => {
  const onNewGame = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${props.deckID}/shuffle/`);
    props.setDealerValue(0);
    props.setDealerHand([]);
    props.setPlayerValue(0);
    props.setPlayerHand([]);
    props.setBank(100);
    props.setBid(0);
    props.setCurrentBid(0);
    props.setActive(true);
    props.setSubmitted(false);
  };
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={logo} alt='logo' className='logo' />
      </div>
      <div className='header__title'>React BlackJack</div>
      <div onClick={() => onNewGame()} className='header__new-game btn'>
        New Game
      </div>
    </div>
  );
};

export default Header;
