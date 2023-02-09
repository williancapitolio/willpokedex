import { useState, useEffect } from "react";
import { api } from "../services/Api";
import { Col, Row } from "react-bootstrap";
import { PokemonCard } from "../components/PokemonCard";

export const HomePage = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPokemonList = async () => {
        let pokemonArray = [];
        for (let i = 1; i <= 151; i++) {
            pokemonArray.push(await getPokemonData(i));
        }
        console.log(pokemonArray);
        setPokemon(pokemonArray);
        setLoading(false);
    };

    const getPokemonData = async (id) => {
        const res = await api.get(`pokemon/${id}`);
        return res;
    };

    useEffect(() => {
        getPokemonList();
    }, []);

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <Row>
                    {pokemon.map(p => (
                        <Col key={p.data.name} xs={12} sm={12} md={4} lg={4} xl={4}>
                            <PokemonCard pokemon={p.data} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
};