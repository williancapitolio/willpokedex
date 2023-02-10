import { Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
    return (
        <header>
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                collapseOnSelect
            >
                <Container>
                    <LinkContainer
                        to="/"
                    >
                        <Navbar.Brand>
                            willPokédex
                        </Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
        </header>
    );
};
