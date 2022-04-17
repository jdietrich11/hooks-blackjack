import React, { useEffect, useState } from 'react';

import Overlay from '../overlay/overlay';
import Header from '../header/header';
import DealerHand from '../dealerHand/dealerHand';
import Playfield from '../playfield/playfield';
import Player from '../playerHand/playerHand';

import './app.scss';

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [dealerHand, setDealerHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [deckID, setDeckID] = useState('');
  const [dealerValue, setDealerValue] = useState(0);
  const [playerValue, setPlayerValue] = useState(0);
  const [bank, setBank] = useState(100);
  const [bid, setBid] = useState(0);
  const [currentBid, setCurrentBid] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=14')
      .then((res) => res.json())
      .then((data) => setDeckID(data.deck_id));
  }, []);

  return (
    <div className='app'>
      <Overlay
        firstName={firstName}
        submitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
        setFirstName={setFirstName}
      />
      <Header
        setDealerHand={setDealerHand}
        setPlayerHand={setPlayerHand}
        deckID={deckID}
        setDealerValue={setDealerValue}
        setPlayerValue={setPlayerValue}
        setBank={setBank}
        setBid={setBid}
        setCurrentBid={setCurrentBid}
        setSubmitted={setSubmitted}
        setActive={setActive}
      />
      <DealerHand value={dealerHand} />
      <Playfield
        firstName={firstName}
        dealerHand={dealerHand}
        setDealerHand={setDealerHand}
        playerHand={playerHand}
        setPlayerHand={setPlayerHand}
        deckID={deckID}
        setDeckID={setDeckID}
        dealerValue={dealerValue}
        setDealerValue={setDealerValue}
        playerValue={playerValue}
        setPlayerValue={setPlayerValue}
        bank={bank}
        setBank={setBank}
        bid={bid}
        setBid={setBid}
        currentBid={currentBid}
        setCurrentBid={setCurrentBid}
        submitted={submitted}
        setSubmitted={setSubmitted}
        active={active}
        setActive={setActive}
      />
      <Player value={playerHand} />
    </div>
  );
};

export default App;
