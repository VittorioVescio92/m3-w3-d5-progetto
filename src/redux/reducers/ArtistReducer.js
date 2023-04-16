import { GET_ARTIST, GET_TRACKLIST } from "../actions";

const initialState = {
  artist: null,
  tracklist: [],
};

const ArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        artist: action.payload,
      };
    case GET_TRACKLIST:
      return {
        ...state,
        tracklist: action.payload,
      };

    default:
      return state;
  }
};

export default ArtistReducer;
