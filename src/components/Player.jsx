import { Link } from "react-router-dom";
import next from "../Next.png";
import play from "../Play.png";
import previous from "../Previous.png";
import repeat from "../Repeat.png";
import shuffle from "../Shuffle.png";
import { Container, Col, Row, Image, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const selectedSong = useSelector(state => state.home.selectedSong);
  console.log(selectedSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={10} className="offset-lg-2">
          <Row>
            {selectedSong !== null && (
              <Col xs={2} className="text-center d-flex py-auto align-items-center">
                <Image id="playerImg" src={selectedSong.album.cover} alt="song cover" />
                <h5 className="text-light fs-6">{selectedSong.album.title}</h5>
              </Col>
            )}
            <Col xs={6} md={4} lg={2} className="mx-auto playerControls mt-1">
              <Row>
                <Col>
                  <Link to="#">
                    <Image src={shuffle} alt="shuffle" />
                  </Link>
                </Col>
                <Col>
                  <Link to="#">
                    <Image src={previous} alt="previous" />
                  </Link>
                </Col>
                <Col>
                  <Link to="#">
                    <Image src={play} alt="play" />
                  </Link>
                </Col>
                <Col>
                  <Link to="#">
                    <Image src={next} alt="next" />
                  </Link>
                </Col>
                <Col>
                  <Link to="#">
                    <Image src={repeat} alt="repeat" />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={6} md={4} className="mx-auto">
              <ProgressBar now={0} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Player;
