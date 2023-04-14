export const GET_ROCK = "GET_ROCK";
export const GET_POP = "GET_POP";
export const GET_HIP_HOP = "GET_HIP_HOP";
export const GET_QUERY = "GET_QUERY";
export const GET_SEARCH = "GET_SEARCH";
export const RESET_SEARCH = "RESET_SEARCH";
export const SET_SELECTED_SONG = "SET_SELECTED_SONG";

export const getQueryAction = query => ({ type: GET_QUERY, payload: query });
export const resetSearchAction = () => ({ type: RESET_SEARCH, payload: [] });
export const setSelectedSongAction = song => ({
  type: SET_SELECTED_SONG,
  payload: song,
});

export const getRockAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let songs = await resp.json();

        dispatch({ type: GET_ROCK, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPopAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let songs = await resp.json();

        dispatch({ type: GET_POP, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getHipHopAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let songs = await resp.json();

        dispatch({ type: GET_HIP_HOP, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSearchAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let songs = await resp.json();

        dispatch({ type: GET_SEARCH, payload: songs.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
