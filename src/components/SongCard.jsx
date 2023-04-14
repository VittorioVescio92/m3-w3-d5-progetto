import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const SongCard = ({ song }) => {
  return (
    <>
      <Link to={`/album/${song.album.id}`}>
        <Image fluid src={song.album.cover_medium} alt="1" />
      </Link>
      <p>
        <Link to={`/album/${song.album.id}`}>
          Album: {song.album.title}
          <br />
        </Link>
        <Link to={`/artist/${song.artist.id}`}>Artist: {song.artist.name}</Link>
      </p>
    </>
  );
};
export default SongCard;
