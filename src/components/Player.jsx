import { Link } from "react-router-dom";
import next from "../Next.png";
import play from "../Play.png";
import previous from "../Previous.png";
import repeat from "../Repeat.png";
import shuffle from "../Shuffle.png";
import pause from "../pause.png";
import { Container, Col, Row, Image, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import AudioPlayer from "react-audio-player";

const Player = () => {
  const selectedSong = useSelector(state => state.home.selectedSong);
  console.log(selectedSong);

  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={12}>
          <Row className="offset-lg-2 position-relative">
            {selectedSong !== null && (
              <Col xs={1} className="text-center d-flex py-auto align-items-center">
                <Image id="playerImg" src={selectedSong.album.cover} alt="song cover" />
                <h5 className="text-light fs-6 ps-2">{selectedSong.album.title}</h5>
              </Col>
            )}
            <Col id="playerControls" xs={6} md={4} lg={2} className="playerControls mt-2">
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
                  <Link to="#" onClick={togglePlay}>
                    <Image src={playing ? pause : play} alt={playing ? "pause" : "play"} />
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
          <Row className="justify-content-center playBar pb-5">
            <Col xs={6} md={4} className="mx-auto">
              <AudioPlayer
                src={selectedSong && selectedSong.preview}
                autoPlay={false}
                controls={false}
                listenInterval={1000}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />
              <ProgressBar now={0} className="mt-2" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Player;
