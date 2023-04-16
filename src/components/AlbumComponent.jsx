import { useEffect } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import MyNav from "./MyNav";
import Player from "./Player";
import { getAlbumAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const AlbumComponent = () => {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const AlbumEndpoint = `https://striveschool-api.herokuapp.com/api/deezer/album/${params.id}`;

  useEffect(() => {
    dispatch(getAlbumAction(AlbumEndpoint));

    console.log(AlbumEndpoint);
  }, [params]);
  const albumSelected = useSelector(state => state.album.album);
  console.log(albumSelected);

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
            {albumSelected && (
              <Card style={{ width: "40%" }}>
                <Card.Img variant="top" src={albumSelected.cover_medium} />
                <Card.Body>
                  <Card.Title>{albumSelected.title}</Card.Title>
                </Card.Body>
              </Card>
            )}
          </Col>

          <Col className="p-5" md={4}>
            <Row>
              <Col id="trackList" md={8}>
                {albumSelected && albumSelected.tracks && (
                  <>
                    <h3 className="text-light">{albumSelected.title}</h3>
                    <ListGroup>
                      {albumSelected.tracks.data.map(track => (
                        <ListGroup.Item key={track.id}>{track.title}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  </>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Player />
      </Container>
    </>
  );
};

export default AlbumComponent;
