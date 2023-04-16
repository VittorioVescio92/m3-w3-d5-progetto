export const GET_ROCK = "GET_ROCK";
export const GET_POP = "GET_POP";
export const GET_HIP_HOP = "GET_HIP_HOP";
export const GET_QUERY = "GET_QUERY";
export const GET_SEARCH = "GET_SEARCH";
export const RESET_SEARCH = "RESET_SEARCH";
export const SET_SELECTED_SONG = "SET_SELECTED_SONG";
export const GET_ALBUM = "GET_ALBUM";
export const SET_SELECTED_ALBUM = "SET_SELECTED_ALBUM";
export const GET_ARTIST = "GET_ARTIST";
export const GET_TRACKLIST = "GET_TRACKLIST";
export const TOGGLE_FAVOURITE_ALBUM = "TOGGLE_FAVOURITE_ALBUM";

export const getQueryAction = query => ({ type: GET_QUERY, payload: query });
export const resetSearchAction = () => ({ type: RESET_SEARCH, payload: [] });
export const setSelectedSongAction = song => ({
  type: SET_SELECTED_SONG,
  payload: song,
});
export const setSelectedAlbumAction = album => ({ type: SET_SELECTED_ALBUM, payload: album });
export const favouritesAlbumAction = album => ({
  type: "TOGGLE_FAVOURITE_ALBUM",
  payload: album,
});

export const getRockAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let songs = await resp.json();
        songs.data.sort(() => Math.random() - 0.5);

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
        songs.data.sort(() => Math.random() - 0.5);
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
        songs.data.sort(() => Math.random() - 0.5);
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

export const getAlbumAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let album = await resp.json();
        dispatch({ type: GET_ALBUM, payload: album });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getArtistAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let artist = await resp.json();
        dispatch({ type: GET_ARTIST, payload: artist });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTracklistAction = url => {
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let tracklist = await resp.json();
        dispatch({ type: GET_TRACKLIST, payload: tracklist });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
