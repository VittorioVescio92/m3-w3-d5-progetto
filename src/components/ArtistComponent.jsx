import MyNav from "./MyNav";
import { Link } from "react-router-dom";
import Player from "./Player";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArtistAction, getTracklistAction } from "../redux/actions";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const ArtistComponent = () => {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const artistSelected = useSelector(state => state.artist.artist);

  // const tracklist = useSelector(state => state.artist.tracklist);
  // const ArtistTracklist = artistSelected.tracklist;
  // console.log(ArtistTracklist);
  const ArtistEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/artist/${params.id}`;

  useEffect(() => {
    dispatch(getArtistAction(ArtistEndpoint));
    // dispatch(getTracklistAction(ArtistTracklist));

    console.log(ArtistEndpoint);
  }, [params]);

  console.log(artistSelected);
  // console.log(tracklist);

  return (
    <>
      <Container fluid>
        <Row className="mb-3">
          <Col className="mainLinks d-none d-md-flex" md={{ offset: 3 }}>
            <Link to="#">TRENDING</Link>
            <Link to="#">PODCAST</Link>
            <Link to="#">MOODS AND GENRES</Link>
            <Link to="#">NEW RELEASES</Link>
            <Link to="#">DISCOVER</Link>
          </Col>
        </Row>
        <MyNav />
        <Row>
          <Col className="pt-5 text-center mt-5" md={{ offset: 3 }}>
            {artistSelected && (
              <Card style={{ width: "40%" }}>
                <Card.Img variant="top" src={artistSelected.picture_medium} />
                <Card.Body>
                  <Card.Title>{artistSelected.name}</Card.Title>
                </Card.Body>
              </Card>
            )}
          </Col>

          <Col className="p-5" md={4}>
            {/* <Row>
              <Col id="trackList" md={8}>
                {ArtistTracklist && (
                  <>
                    <h3 className="text-light">{tracklist.data.title}</h3>
                    <ListGroup>
                      {tracklist.data.map(track => (
                        <ListGroup.Item key={track.id}>{track.title}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </>
                )}
              </Col>
            </Row> */}
          </Col>
        </Row>
        <Player />
      </Container>
    </>
  );
};
export default ArtistComponent;
