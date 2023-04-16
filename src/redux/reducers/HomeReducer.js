import { GET_HIP_HOP, GET_POP, GET_QUERY, GET_ROCK, GET_SEARCH, RESET_SEARCH, SET_SELECTED_SONG } from "../actions";

const initialState = {
  rock: [],
  pop: [],
  hipHop: [],
  query: "",
  search: [],
  selectedSong: null,
  album: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCK:
      return {
        ...state,
        rock: action.payload,
      };
    case GET_POP:
      return {
        ...state,
        pop: action.payload,
      };
    case GET_HIP_HOP:
      return {
        ...state,
        hipHop: action.payload,
      };
    case GET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case GET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case RESET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case SET_SELECTED_SONG:
      return {
        ...state,
        selectedSong: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
