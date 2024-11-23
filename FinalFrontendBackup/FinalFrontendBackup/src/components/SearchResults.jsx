import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';

function SearchResults() {
    const location = useLocation();
    const movies = location.state?.movies || [];

    return (
        <Container>
            <h2>Search Results</h2>
            <Row>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <Col key={movie.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={movie.imagePath} />
                                <Card.Body>
                                    <Card.Title>{movie.name}</Card.Title>
                                    <Card.Text>
                                        Director: {movie.director_name}
                                        <br />
                                        Genre: {movie.genre}
                                        <br />
                                        Year: {movie.releasingYear}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p>No movies found for your search.</p>
                )}
            </Row>
        </Container>
    );
}

export default SearchResults;
