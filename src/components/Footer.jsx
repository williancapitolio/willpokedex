import { Navbar, Container } from "react-bootstrap";

export const Footer = () => {
    return (
        <footer>
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                collapseOnSelect
                className="sticky-bottom mt-3"
            >
                <Container
                    className="text-align-center justify-content-center pt-1 pb-1"
                >
                    <a
                        href="https://github.com/williancapitolio"
                        target="_blank"
                        className="link-footer"
                    >
                        williancapitolio
                    </a>
                </Container>
            </Navbar>
        </footer>
    );
};
