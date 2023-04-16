import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SongCard from "./SongCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHipHopAction, getPopAction, getRockAction, getSearchAction, setSelectedSongAction } from "../redux/actions";

const MainComponent = () => {
  const search = useSelector(state => state.home.query);
  const endpointRock = "https://striveschool-api.herokuapp.com/api/deezer/search?q=Rock";
  const endpointPop = "https://striveschool-api.herokuapp.com/api/deezer/search?q=Pop";
  const endpointHipHop = "https://striveschool-api.herokuapp.com/api/deezer/search?q=Hip%20Hop";
  const endpointSearch = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockAction(endpointRock));
    dispatch(getPopAction(endpointPop));
    dispatch(getHipHopAction(endpointHipHop));
    if (search !== "") {
      dispatch(getSearchAction(endpointSearch));
    }
  }, [search]);

  const rockSongs = useSelector(state => state.home.rock);
  const popSongs = useSelector(state => state.home.pop);
  const hipHopSongs = useSelector(state => state.home.hipHop);
  const searchSongs = useSelector(state => state.home.search);

  const handleSongClick = song => {
    dispatch(setSelectedSongAction(song));
  };
  return (
    <>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>

      {searchSongs.length > 0 && (
        <>
          <Row>
            <Col xs={10}>
              <div id="searchResults">
                <h2>Search Results</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-2">
                  {searchSongs.map(song => (
                    <Col key={song.id} className="text-center" id="id">
                      <SongCard song={song} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </>
      )}

      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-2" id="rockSection">
              {rockSongs.length > 0 &&
                rockSongs.slice(0, 4).map(song => (
                  <Col key={song.id} onClick={() => handleSongClick(song)} className="text-center" id="id">
                    <SongCard song={song} />
                  </Col>
                ))}
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-2" id="popSection">
              {popSongs.length > 0 &&
                popSongs.slice(0, 4).map(song => (
                  <Col key={song.id} className="text-center" id="id">
                    <SongCard song={song} />
                  </Col>
                ))}
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-2" id="hipHopSection">
              {hipHopSongs.length > 0 &&
                hipHopSongs.slice(0, 4).map(song => (
                  <Col key={song.id} className="text-center" id="id">
                    <SongCard song={song} />
                  </Col>
                ))}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default MainComponent;
