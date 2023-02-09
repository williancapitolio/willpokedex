import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { HomePage } from "./pages/HomePage";

export const App = () => {
    return (
        <Router>
            <Container>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
            </Container>
        </Router>
    );
};
