import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedSongAction } from "../redux/actions";

const SongCard = ({ song }) => {
  console.log(song);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedSongAction(song));
  };

  return (
    <>
      <Image id="albumImg" fluid src={song.album.cover_medium} alt="1" onClick={handleClick} />
      <p>
        <Link to={`/album/${song.album.id}`}>
          <span>Album: {song.album.title}</span>
          <br />
        </Link>
        <Link to={`/artist/${song.artist.id}`}>Artist: {song.artist.name}</Link>
        <p>Track: {song.title}</p>
      </p>
    </>
  );
};

export default SongCard;
