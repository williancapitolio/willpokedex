import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../services/Api";
import { Loader } from "../components/Loader";
import { Row, Col, Card } from "react-bootstrap";

export const PokemonPage = () => {
    const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState();
    const [loading, setLoading] = useState(true);

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetails(details.data);
        setLoading(false);
    };

    const getPokemonData = async (id) => {
        const res = await api.get(`pokemon/${id}`);
        return res;
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
                            className="my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white"
                            style={
                                { border: "none" }
                            }
                        >
                            <Card.Img
                                style={
                                    { width: "15rem" }
                                }
                                src={pokemonDetails.sprites.front_default}
                                variant="top"
                            />
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    );
};
