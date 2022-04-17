const CheckValue = (card, val) => {
  if (card === 'KING' || card === 'QUEEN' || card === 'JACK') {
    return 10;
  }
  if (card === 'ACE') {
    if (val < 13) {
      return 11;
    }
    if (val >= 13) {
      return 1;
    }
  }
  if (Number.isInteger(Number(card))) {
    return Number(card);
  }
};

export default CheckValue;
