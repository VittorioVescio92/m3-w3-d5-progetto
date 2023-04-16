import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedSongAction } from "../redux/actions";

const SongCard = ({ song }) => {
  console.log(song);
  const dispatch = useDispatch();
  // const favouritesAlbums = useSelector(state => state.favorites ?? []);

  // const isAlbumFavourite = favouritesAlbums.includes(song.album.id);

  const handleClick = () => {
    dispatch(setSelectedSongAction(song));
  };

  // const handleToggleFavourite = () => {
  //   dispatch(favouritesAlbumAction(song));
  // };
  // console.log(favouritesAlbums);
  return (
    <>
      <div style={{ position: "relative" }}>
        <Image id="albumImg" fluid src={song.album.cover_medium} alt="1" onClick={handleClick} />
      </div>
      <div>
        <Link to={`/album/${song.album.id}`}>
          <span>Album: {song.album.title}</span>
          <br />
        </Link>
        <Link to={`/artist/${song.artist.id}`}>Artist: {song.artist.name}</Link>
        <p>
          Track: {song.title}
          {/* <span>
            <button onClick={handleToggleFavourite}>{isAlbumFavourite ? "💝" : "/"}</button>
          </span> */}
        </p>
      </div>
    </>
  );
};

export default SongCard;
