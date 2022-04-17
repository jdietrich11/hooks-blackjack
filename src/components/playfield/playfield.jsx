import React from 'react';

import GetCard from '../../helper/getCard';
import CheckValue from '../../helper/checkValue';
import CheckVictor from '../../helper/checkVictor';
import CheckPlayer from '../../helper/checkPlayer';

import './playfield.scss';

const Playfield = (props) => {
  const onNewGame = () => {
    if (props.bank < 1 && props.firstName !== 'josh') {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
    if (props.bank < 1 && props.firstName === 'josh') {
      alert('Game Over!');
    }
    props.setDealerValue(0);
    props.setDealerHand([]);
    props.setPlayerValue(0);
    props.setPlayerHand([]);
    props.setBid(0);
    props.setCurrentBid(0);
    props.setActive(true);
    props.setSubmitted(false);
  };

  const dealerDraw = async () => {
    let res = await GetCard(props.deckID);
    let code = await res.data.cards[0].code;
    let val = await CheckValue(res.data.cards[0].value, props.dealerValue);
    props.setDealerHand([...props.dealerHand, code]);
    props.setDealerValue(props.dealerValue + val);
  };

  const dealerTurn = async () => {
    if (props.playerValue > 21) {
      CheckVictor(props.playerValue, props.dealerValue);
    }
    if (props.playerValue > props.dealerValue) {
      dealerDraw();
      setTimeout(() => {
        if (props.dealerValue > props.playerValue) {
          let winner = CheckVictor(props.playerValue, props.dealerValue);
          if (winner === 'player') {
            props.setBank(props.bank + 2 * props.currentBid);
          }
        }
        dealerTurn();
      }, 1000);
    }
  };

  return (
    <div className='playfield'>
      <div className='dealer__value'>{props.dealerValue}</div>
      <div className='bidding'>
        <div className='bidding__bank'>BANK: {props.bank}</div>
        <input
          onChange={(e) => {
            if (props.bank - e.target.value >= 0 && e.target.value > 0) {
              props.setBid(e.target.value);
            }
          }}
          className={props.submitted ? 'hidden' : 'bidding__input'}
          type='number'
          value={props.bid}
          min='0'
          max={props.bank}
        />
        <div
          onClick={async () => {
            props.setCurrentBid(props.bid);
            props.setBank(props.bank - props.bid);
            dealerDraw();
            props.setSubmitted(!props.submitted);
          }}
          className={props.submitted ? 'hidden' : 'bidding__submit'}
        >
          &#10003;
        </div>
      </div>
      <div className='user-inputs'>
        <button
          className={
            !props.active ? 'btn btn__draw btn__draw-option' : 'btn btn__draw'
          }
          onClick={async () => {
            if (props.currentBid > 0) {
              let res = await GetCard(props.deckID);
              let code = await res.data.cards[0].code;
              let val = await CheckValue(
                res.data.cards[0].value,
                props.playerValue
              );
              props.setPlayerHand([...props.playerHand, code]);
              props.setPlayerValue(props.playerValue + val);
              let check = await CheckPlayer(props.playerValue);
              if (!check) {
                setTimeout(() => {
                  onNewGame();
                }, 1000);
              }
            } else {
              alert('PLEASE MAKE A VALID BET');
            }
          }}
        >
          Draw
        </button>
        <button
          onClick={() => onNewGame()}
          className={props.active ? 'btn__new btn__new-option' : 'btn__new'}
        >
          Next Round?
        </button>
        <button
          className={
            !props.active ? 'btn btn__end btn__end-option' : 'btn btn__end'
          }
          onClick={() => {
            if (!props.submitted) {
              alert('Please make a valid Bet');
            } else {
              if (props.playerValue < 22) {
                props.setActive(!props.active);
                dealerTurn();
              } else {
                onNewGame();
              }
            }
          }}
        >
          End
        </button>
      </div>
      <div className='deck'>
        <img
          className='deck__img'
          src={require('../../img/deck.jpg')}
          alt='deck'
        />
      </div>
      <div className='player__value'>{props.playerValue}</div>
    </div>
  );
};

export default Playfield;
