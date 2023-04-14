import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNav from "./MyNav";
import Player from "./Player";

const AlbumComponent = () => {
  return (
    <>
      <Container fluid>
        <Row className="mb-3">
          <Col className="mainLinks d-none d-md-flex" md={{ span: 9, offset: 3 }}>
            <Link to="#">TRENDING</Link>
            <Link to="#">PODCAST</Link>
            <Link to="#">MOODS AND GENRES</Link>
            <Link to="#">NEW RELEASES</Link>
            <Link to="#">DISCOVER</Link>
          </Col>
        </Row>
        <MyNav />
        <Row>
          <Col id="img-container" className="pt-5 text-center" md={3}></Col>
          <Col className="p-5" md={8}>
            <Row>
              <Col id="trackList" className="mb-5" md={10}></Col>
            </Row>
          </Col>
        </Row>
        <Player />
      </Container>
    </>
  );
};
export default AlbumComponent;
