const CheckVictor = (playerValue, dealerValue) => {
  if (playerValue > 21) {
    return;
  }
  if (playerValue > dealerValue && playerValue < 22) {
    return 'player';
  }
  if (playerValue > dealerValue && playerValue > 21) {
    return;
  }
  if (dealerValue > playerValue && dealerValue < 22) {
    return;
  }
  if (dealerValue > playerValue && dealerValue > 21) {
    return 'player';
  }
};

export default CheckVictor;
