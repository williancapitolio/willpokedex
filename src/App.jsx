import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { HomePage } from "./pages/HomePage";
import { PokemonPage } from "./pages/PokemonPage";
import { Header } from "./components/Header";

export const App = () => {
    return (
        <Router>
            <Header />
            <Container>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/pokemon/:id" element={<PokemonPage />} />
                </Routes>
            </Container>
        </Router>
    );
};
