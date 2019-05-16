import React from 'react';
import Usgslogo from "./usgslogo.png";
import {Container, Row, Col} from 'react-bootstrap';

class Usgsheader extends React.Component {
    render() {
        return (
            <div id="usgsHeaderContainer">
                <Container fluid>
                    <Row>
                        <Col className='header-nav'>
                            <a className="logo-header" href="https://www.usgs.gov/" title="Home">
                            <img src = {Usgslogo} alt="Usgs logo"></img>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Usgsheader;