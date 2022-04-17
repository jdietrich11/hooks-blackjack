import axios from 'axios';

const GetCard = async (id) => {
  try {
    const res = await axios.get(
      `https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`
    );
    const response = await res;
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default GetCard;
