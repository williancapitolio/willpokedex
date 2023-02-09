import { Row, Col, Spinner } from "react-bootstrap";

export const Loader = () => {
    return (
        <div
            className="d-flex justify-content-center mt-5"
            style={{ height: "100vh" }}
        >
            <Row>
                <Col>
                    <Spinner
                        className="spinner-border spinner-border-lg"
                        role="status"
                        style={
                            {
                                height: "5vh",
                                width: "5vh"
                            }
                        }
                    >

                    </Spinner>
                </Col>
            </Row>
            <Row>
                <Col>
                        <div
                            className="mx-3"
                        >
                            Buscando Pokémons...
                        </div>
                </Col>
            </Row>
        </div>
    );
};
