import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/HomeReducer";
import AlbumReducer from "../reducers/AlbumReducer";
import ArtistReducer from "../reducers/ArtistReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  album: AlbumReducer,
  artist: ArtistReducer,
  tracklist: ArtistReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
