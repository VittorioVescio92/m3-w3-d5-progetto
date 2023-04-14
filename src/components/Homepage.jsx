import { Col, Container, Row } from "react-bootstrap";
import MyNav from "./MyNav";
import Player from "./Player";
import MainComponent from "./MainComponent";

const Homepage = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <MyNav />
        </Col>
        <Col xs={12} lg={9} className="offset-md-3 mainPage">
          <MainComponent />
        </Col>
      </Row>
      <Player />
    </Container>
  );
};
export default Homepage;
