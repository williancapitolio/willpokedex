import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../services/Api";
import { Loader } from "../components/Loader";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PokemonPage = () => {
    const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState();
    const [loading, setLoading] = useState(true);

    const getPokemonData = async (id) => {
        const res = await api.get(`pokemon/${id}`);
        return res;
    };

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        setLoading(false);
    };

    useEffect(() => {
        getPokemon(id);
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Row>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                    >
                        <Card
                            className="my-3 p-3 rounded text-center shadow bg-white"
                            style={
                                { border: "none" }
                            }
                        >
                            <Link
                                to={`/pokemon/${pokemonDetails.id}`}
                            >
                                <Card.Img
                                    style={
                                        { width: "15rem" }
                                    }
                                    src={pokemonDetails.sprites.front_default}
                                    variant="top"
                                />
                            </Link>
                            <Card.Body
                                className={`${pokemonDetails.types[0].type.name} rounded text-white`}
                            >
                                <Link
                                    to={`/pokemon/${pokemonDetails.id}`}
                                    className="link-name"
                                >
                                    <Card.Title
                                        as="div"
                                    >
                                        <strong>
                                            #{pokemonDetails.id} - {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}
                                        </strong>
                                    </Card.Title>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                    >
                        <Card
                            className="my-3 p-3 rounded text-center shadow bg-white"
                            style={
                                { border: "none" }
                            }
                        >
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        {pokemonDetails.types.map(t => (
                                            <Col
                                                key={t.type.name}
                                            >
                                                <div
                                                    className={`${t.type.name} rounded px-4 py-1`}
                                                    style={
                                                        { color: "#FFF" }
                                                    }
                                                >
                                                    {t.type.name.toUpperCase()}
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card.Img
                                                style={
                                                    { width: "15rem" }
                                                }
                                                src={pokemonDetails.sprites.front_default}
                                            />
                                            <Card.Text>
                                                Forma Normal
                                            </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Img
                                                style={
                                                    { width: "15rem" }
                                                }
                                                src={pokemonDetails.sprites.front_shiny}
                                            />
                                            <Card.Text>
                                                Forma Shiny
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                    <Row
                                        className="mt-4"
                                    >
                                        <Col
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            lg={12}
                                            xl={12}
                                        >
                                            <div
                                                className="px-4 py-1 mb-3 rounded"
                                                style={
                                                    { border: "1px #000 solid" }
                                                }
                                            >
                                                Habilidades
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row
                                        className="text center"
                                    >
                                        {pokemonDetails.abilities.map(a => (
                                            <Col
                                                key={a.ability.name}
                                                xs={6}
                                                sm={6}
                                                md={6}
                                                lg={6}
                                                xl={6}
                                            >
                                                <div
                                                    className="rounded px-4 py-1"
                                                >
                                                    - {a.ability.name.toUpperCase()}
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    );
};
