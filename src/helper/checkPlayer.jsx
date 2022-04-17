const CheckPlayer = (prop) => {
  if (prop > 21) {
    return false;
  }
  if (prop < 22) {
    return true;
  }
};

export default CheckPlayer;
