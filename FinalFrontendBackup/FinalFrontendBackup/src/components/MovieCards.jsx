import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import "../css/MovieCards.css";

function MovieCards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from the backend
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/movies/");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} md={4} className="mb-4">
          <Card className="movie-card" style={{ width: "18rem" }}>
           
            <Card.Img
              variant="top"
              src={movie.imagePath} 
              alt={movie.name}
            />
            <Card.Body>
              <Card.Title>{movie.name}</Card.Title>
              <Card.Text>{movie.description}</Card.Text> {/* Add description in the movie model */}
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{movie.genre}</ListGroup.Item>
              <ListGroup.Item>{movie.releasingYear}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href={movie.videoPath} target="_blank">
                Play
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default MovieCards;





// import React from "react";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import '../css/MovieCards.css';
// import { Col, Row } from "react-bootstrap";
// import sss from "../components/A1.jpg";

// function MovieCards(){

//   // const movieData=[
//   //   {
//   //     Name:'nemo',
//   //     Director:'jhi jhaa',
//   //     Date:'2017',
//   //     image:sss
//   //   },
//   //   {
//   //     Name:'nemo',
//   //     Director:'jhi jhaa',
//   //     Date:'2017',
//   //     image:sss
//   //   },
//   //   {
//   //     Name:'nemo',
//   //     Director:'jhi jhaa',
//   //     Date:'2017',
//   //     image:sss
//   //   },
//   //   {
//   //     Name:'nemo',
//   //     Director:'jhi jhaa',
//   //     Date:'2017',
//   //     image:sss
//   //   },
//   //   {
//   //     Name:'nemo',
//   //     Director:'jhi jhaa',
//   //     Date:'2017',
//   //     image:sss
//   //   },
//   //   {
//   //     Name:'nemo',
//   //     Director:'jhi jhaa',
//   //     Date:'2017',
//   //     image:sss
//   //   },
//   //   {
//   //     Name:'nemo',
//   //     Director:'jhi jhaa',
//   //     Date:'2017',
//   //     image:sss
//   //   }
//   // ]

//   return (
//     <>
//     <Row>
//     {/* <h1>character</h1> */}
//         <Card className="movie-card" style={{ width: '18rem' }}>
         
//       <Card.Img variant="top" src={require('./A1.jpg')} />
//       <Card.Body>
//         <Card.Title >Babua On The Ship</Card.Title>
//         <Card.Text>
//          Babua going on an adventurous trip.
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//       </ListGroup>
//       <Card.Body>
//         <Card.Link href="#">Play</Card.Link>
//         <Card.Link href="#"></Card.Link>
//       </Card.Body>

//     </Card>
//     {/* {
//       movieData.map(movie=>(
        
//         <Col sm>
//         <Card className="movie-card" style={{ width: '18rem' }}>
          
//           <Card.Img variant="top" src={movie.image} />
//           <Card.Body>
//             <Card.Title >{movie.Name}</Card.Title>
//             <Card.Text>{movie.Date}
//             </Card.Text>
//           </Card.Body>
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item>{movie.Director}</ListGroup.Item>
//           </ListGroup>
//           <Card.Body>
//             <Card.Link href="#">Play</Card.Link>
//             <Card.Link href="#"></Card.Link>
//           </Card.Body>
    
//         </Card>
//         </Col>
        
        
        
//       ))
//       } */}
//       </Row> 
//       </>
       
//   );
// }

// export default MovieCards;