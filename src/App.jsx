import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { HomePage } from "./pages/HomePage";

export const App = () => {
    return (
        <Router>
            <Container>
                <HomePage />
            </Container>
        </Router>
    );
};
