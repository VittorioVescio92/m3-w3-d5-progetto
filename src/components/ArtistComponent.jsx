import { Button, Row, Col } from "react-bootstrap";

import MyNav from "./MyNav";
import { Link } from "react-router-dom";
import Player from "./Player";

const ArtistComponent = () => {
  return (
    <>
      <Row>
        <Col xs={2}>
          <MyNav />
        </Col>
      </Row>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <MyNav />
          </div>

          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <div className="row mb-3">
              <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <Link to="#">TRENDING</Link>
                <Link to="#">PODCAST</Link>
                <Link to="#">MOODS AND GENRES</Link>
                <Link to="#">NEW RELEASES</Link>
                <Link to="#">DISCOVER</Link>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-10 col-lg-10 mt-5">
                <h2 className="titleMain"></h2>
                <div id="followers"></div>
                <div className="d-flex justify-content-center" id="button-container">
                  <Button className="btn-success mr-2 mainButton d-none" id="playButton">
                    PLAY
                  </Button>
                  <Button className="btn-outline-light mainButton d-none" id="followButton">
                    FOLLOW
                  </Button>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                <div className="mt-4 d-flex justify-content-start">
                  <h2 className="text-white font-weight-bold">Tracks</h2>
                </div>
                <div className="pt-5 mb-5">
                  <div className="row" id="apiLoaded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Player />
    </>
  );
};
export default ArtistComponent;
