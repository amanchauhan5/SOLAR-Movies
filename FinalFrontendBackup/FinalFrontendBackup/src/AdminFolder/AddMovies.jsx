import React, { useState, useEffect } from "react";
import { Form, Row, Col, FloatingLabel, Button, Alert } from "react-bootstrap";
import NavAdmin from "./NavAdmin";
import Footer from "../components/Footer";
import './AdminCss/AddMovies.css';
import MovieCrud from "./MovieCrud";
import axios from "axios";
import MainNavbar from "../components/MainNavbar";

function AddMovies() {
  const [movieData, setMovieData] = useState({
    name: '',
    releasingYear: '',
    DirectorName: '',
    genre: '',
    imagePath: '',
    videoPath: '',
  });

  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ type: '', message: '' });
  const [genres, setGenres] = useState([]);
  const [showAllMovies, setShowAllMovies] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('http://localhost:8080/genres');
        setGenres(response.data);
      } catch (error) {
        console.error('Failed to fetch genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:8080/api/movies/add', movieData);

      if (response.status === 201) {
        setAlertMessage({ type: 'success', message: 'Movie added successfully!' });
        setMovieData({
          name: '',
          releasingYear: '',
          DirectorName: '',
          genre: '',
          imagePath: '',
          videoPath: '',
        });
      }
    } catch (error) {
      setAlertMessage({ type: 'danger', message: 'Error adding movie. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleShowAllMovies = () => {
    setShowAllMovies(true); 
  };

  return (
    <>
      <MainNavbar />
      <div className="addmovie">
        <h2 className="text-center">Add New Movie</h2>
        {alertMessage.message && (
          <Alert variant={alertMessage.type}>{alertMessage.message}</Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Row className="mb-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Movie Name">
                <Form.Control
                  type="text"
                  placeholder="Enter Movie Name"
                  name="name"
                  value={movieData.name}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingSelectGrid" label="Genre">
                <Form.Select
                  aria-label="Floating label select example"
                  name="genre"
                  value={movieData.genre}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Genre</option>
                  {genres.map((genre) => (
                    <option key={genre.id} value={genre.name}>
                      {genre.name}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Director Name">
                <Form.Control
                  type="text"
                  placeholder="Enter Director Name"
                  name="DirectorName"
                  value={movieData.DirectorName}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Release Year">
                <Form.Control
                  type="number"
                  placeholder="Enter Release Year"
                  name="releasingYear"
                  value={movieData.releasingYear}
                  onChange={handleChange}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Movie Card Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Image URL"
              name="imagePath"
              value={movieData.imagePath}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Movie Video URL</Form.Label>
            <Form.Control
              type="link"
              placeholder="Enter Video URL"
              name="videoPath"
              value={movieData.videoPath}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? 'Adding...' : 'Add Movie'}
          </Button>

          {' '}
          <Button variant="secondary" onClick={handleShowAllMovies}>
            Show All Movies
          </Button>

        </Form>
      </div>
      <MovieCrud showAllMovies={showAllMovies}/>
      <Footer />
    </>
  );
}

export default AddMovies;






// import React, { useState,useEffect } from "react";
// import { Form, Row, Col, FloatingLabel, Button, Alert } from "react-bootstrap";
// import NavAdmin from "./NavAdmin";
// import Footer from "../components/Footer";
// import './AdminCss/AddMovies.css';
// import MovieCrud from "./MovieCrud";
// import axios from "axios";
// import MainNavbar from "../components/MainNavbar";

// function AddMovies() {
//   const [movieData, setMovieData] = useState({
//     name: '',
//     releasingYear: '',
//     DirectorName: '',
//     genre: '',
//   });

//   const [image, setImage] = useState(null);
//   const [video, setVideo] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [alertMessage, setAlertMessage] = useState({ type: '', message: '' });
//   const [genres, setGenres] = useState([]);

//   useEffect(() => {
//     const fetchGenres = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/genres');
//         setGenres(response.data);
//       } catch (error) {
//         console.error('Failed to fetch genres:', error);
//       }
//     };

//     fetchGenres();
//   }, []);


//   const handleChange = (e) => {
//     setMovieData({ ...movieData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (name === 'image') {
//       setImage(files[0]);
//     } else if (name === 'video') {
//       setVideo(files[0]);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setAlertMessage({ type: '', message: '' });

//     const formData = new FormData();
//     formData.append('name', movieData.name);
//     formData.append('releasingYear', movieData.releasingYear);
//     formData.append('genre', movieData.genre);
//     formData.append('DirectorName', movieData.DirectorName);
//     formData.append('image', image);
//     formData.append('video', video);

//     try {
//       const response = await axios.post('http://localhost:8080/api/movies/add', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       if (response.status === 201) {
//         setAlertMessage({ type: 'success', message: 'Movie added successfully!' });
//         setMovieData({
//           name: '',
//           releasingYear: '',
//           DirectorName: '',
//           genre: '',
//         });
//         setImage(null);
//         setVideo(null);
//       }
//     } catch (error) {
//       setAlertMessage({ type: 'danger', message: 'Error adding movie. Please try again.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* <NavAdmin /> */}
//       <MainNavbar/>
//       <div className="addmovie">
//         <h2 className="text-center">Add New Movie</h2>
//         {alertMessage.message && (
//           <Alert variant={alertMessage.type}>{alertMessage.message}</Alert>
//         )}
//         <Form onSubmit={handleSubmit}>
//           <Row className="mb-2">
//             <Col md>
//               <FloatingLabel controlId="floatingInputGrid" label="Movie Name">
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Movie Name"
//                   name="name"
//                   value={movieData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </FloatingLabel>
//             </Col>
//             <Col md>
//               <FloatingLabel controlId="floatingSelectGrid" label="Genre">
//                 <Form.Select
//                   aria-label="Floating label select example"
//                   name="genre"
//                   value={movieData.genre}
//                   onChange={handleChange}
//                   required
//                 >
//                     <option value="">Select Genre</option>
//                   {genres.map((genre) => (
//                     <option key={genre.id} value={genre.name}>
//                       {genre.name}
//                     </option>
//                   ))}
                  
//                   {/* <option value="">Select Genre</option>
//                   <option value="Cultural">Cultural</option> */}
                  
//                 </Form.Select>
//               </FloatingLabel>
//             </Col>
//           </Row>
//           <Row className="mb-2">
//             <Col md>
//               <FloatingLabel controlId="floatingInputGrid" label="Director Name">
//                 <Form.Control
//                   type="text"
//                   placeholder="Name"
//                   name="DirectorName"
//                   value={movieData.DirectorName}
//                   onChange={handleChange}
//                   required
//                 />
//               </FloatingLabel>
//             </Col>
//             <Col md>
//               <FloatingLabel controlId="floatingInputGrid" label="Release Year">
//                 <Form.Control
//                   type="number"
//                   placeholder="Year"
//                   name="releasingYear"
//                   value={movieData.releasingYear}
//                   onChange={handleChange}
//                   required
//                 />
//               </FloatingLabel>
//             </Col>
//           </Row>
//           <Form.Group controlId="formFile" className="mb-3">
//             <Form.Label>Movie Card Image</Form.Label>
//             <Form.Control
//               type="file"
//               name="image"
//               onChange={handleFileChange}
//               accept="image/*"
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="formFile" className="mb-3">
//             <Form.Label>Movie Video</Form.Label>
//             <Form.Control
//               type="file"
//               name="video"
//               onChange={handleFileChange}
//               accept="video/*"
//               required
//             />
//           </Form.Group>
//           <Button type="submit" variant="primary" disabled={loading}>
//             {loading ? 'Adding...' : 'Add Movie'}
//           </Button>
//         </Form>
//       </div>
//       <MovieCrud />
//       <Footer />
//     </>
//   );
// }

// export default AddMovies;





