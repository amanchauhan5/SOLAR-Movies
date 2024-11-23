import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import axios from "axios";
import './AdminCss/Crud.css';

function MovieCrud({ showAllMovies }) {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {

    
    if (showAllMovies) {
      fetchMovies();
    }
  }, [showAllMovies]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/movies/');
      setMovies(response.data);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  const handleEditClick = (movie) => {
    setEditingMovie(movie);
    setShowEditModal(true);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      try {
        await axios.delete(`http://localhost:8080/api/movies/${id}`);
        fetchMovies(); 
      } catch (error) {
        console.error('Failed to delete movie:', error);
      }
    }
  };

  const handleEditChange = (e) => {
    setEditingMovie({ ...editingMovie, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async () => {
    try {
      await axios.put(`http://localhost:8080/api/movies/${editingMovie.id}`, editingMovie);
      setShowEditModal(false);
      fetchMovies(); 
    } catch (error) {
      console.error('Failed to update movie:', error);
    }
  };

  if (!showAllMovies) {
    return null; 
  }

  return (
    <div className="movie-crud">
      <h3 className="text-center">All Movies</h3>
      <Table className="table-responsive" responsive="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Movie Name</th>
            <th>Director</th>
            <th>Genre</th>
            <th>Release Year</th>
            <th>Image</th>
            <th>Video</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.name}</td>
              <td>{movie.DirectorName}</td>
              <td>{movie.genre}</td>
              <td>{movie.releasingYear}</td>
              <td>
                <img
                  src={movie.imagePath}
                  alt={movie.name}
                  style={{ width: "100px", height: "auto" }}
                />
              </td>
              <td>
                <video
                  src={movie.videoPath}
                  controls
                  style={{ width: "150px", height: "auto" }}
                />
              </td>
              <td>
                <Button variant="warning" onClick={() => handleEditClick(movie)}>Edit</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteClick(movie.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingMovie && (
            <Form>
              <FloatingLabel controlId="floatingInput" label="Movie Name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Movie Name"
                  name="name"
                  value={editingMovie.name}
                  onChange={handleEditChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingSelect" label="Genre" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Genre"
                  name="genre"
                  value={editingMovie.genre}
                  onChange={handleEditChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Director Name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Director Name"
                  name="DirectorName"
                  value={editingMovie.DirectorName}
                  onChange={handleEditChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Release Year" className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Enter Release Year"
                  name="releasingYear"
                  value={editingMovie.releasingYear}
                  onChange={handleEditChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Image URL"
                  name="imagePath"
                  value={editingMovie.imagePath}
                  onChange={handleEditChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Video URL" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter Video URL"
                  name="videoPath"
                  value={editingMovie.videoPath}
                  onChange={handleEditChange}
                />
              </FloatingLabel>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MovieCrud;





// import React, { useState, useEffect } from "react";
// import { Table, Button, Modal, Form, FloatingLabel } from "react-bootstrap";
// import axios from "axios";
// import './AdminCss/Crud.css';

// function MovieCrud({ showAllMovies }) {
//   const [movies, setMovies] = useState([]);
//   const [editingMovie, setEditingMovie] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);

//   useEffect(() => {
//     if (showAllMovies) {
//       fetchMovies();
//     }
//   }, [showAllMovies]);

//   const fetchMovies = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/movies/');
//       setMovies(response.data);
//     } catch (error) {
//       console.error('Failed to fetch movies:', error);
//     }
//   };

//   const handleEditClick = (movie) => {
//     setEditingMovie(movie);
//     setShowEditModal(true);
//   };

//   const handleDeleteClick = async (id) => {
//     if (window.confirm('Are you sure you want to delete this movie?')) {
//       try {
//         await axios.delete(`http://localhost:8080/api/movies/${id}`);
//         fetchMovies(); // Refresh the list after deletion
//       } catch (error) {
//         console.error('Failed to delete movie:', error);
//       }
//     }
//   };

//   const handleEditChange = (e) => {
//     setEditingMovie({ ...editingMovie, [e.target.name]: e.target.value });
//   };

//   const handleEditSubmit = async () => {
//     try {
//       await axios.put(`http://localhost:8080/api/movies/${editingMovie.id}`, editingMovie);
//       setShowEditModal(false);
//       fetchMovies(); // Refresh the list after updating
//     } catch (error) {
//       console.error('Failed to update movie:', error);
//     }
//   };

//   if (!showAllMovies) {
//     return null; // Don't render anything if "Show All Movies" is not clicked
//   }

//   return (
//     <div className="movie-crud">
//       <h3 className="text-center">All Movies</h3>
//       <Table className="table-responsive" responsive="sm">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Movie Name</th>
//             <th>Director</th>
//             <th>Genre</th>
//             <th>Release Year</th>
//             <th>Image URL</th>
//             <th>Video URL</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {movies.map((movie) => (
//             <tr key={movie.id}>
//               <td>{movie.id}</td>
//               <td>{movie.name}</td>
//               <td>{movie.DirectorName}</td>
//               <td>{movie.genre}</td>
//               <td>{movie.releasingYear}</td>
//               <td>{movie.imagePath}</td>
//               <td>{movie.videoPath}</td>
//               <td>
//                 <Button variant="warning" onClick={() => handleEditClick(movie)}>Edit</Button>
//               </td>
//               <td>
//                 <Button variant="danger" onClick={() => handleDeleteClick(movie.id)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Edit Movie Modal */}
//       <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Movie</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {editingMovie && (
//             <Form>
//               <FloatingLabel controlId="floatingInput" label="Movie Name" className="mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Movie Name"
//                   name="name"
//                   value={editingMovie.name}
//                   onChange={handleEditChange}
//                 />
//               </FloatingLabel>
//               <FloatingLabel controlId="floatingSelect" label="Genre" className="mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Genre"
//                   name="genre"
//                   value={editingMovie.genre}
//                   onChange={handleEditChange}
//                 />
//               </FloatingLabel>
//               <FloatingLabel controlId="floatingInput" label="Director Name" className="mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Director Name"
//                   name="DirectorName"
//                   value={editingMovie.DirectorName}
//                   onChange={handleEditChange}
//                 />
//               </FloatingLabel>
//               <FloatingLabel controlId="floatingInput" label="Release Year" className="mb-3">
//                 <Form.Control
//                   type="number"
//                   placeholder="Enter Release Year"
//                   name="releasingYear"
//                   value={editingMovie.releasingYear}
//                   onChange={handleEditChange}
//                 />
//               </FloatingLabel>
//               <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter Image URL"
//                   name="imagePath"
//                   value={editingMovie.imagePath}
//                   onChange={handleEditChange}
//                 />
//               </FloatingLabel>
//               <FloatingLabel controlId="floatingInput" label="Video URL" className="mb-3">
//                 <Form.Control
//                   type="link"
//                   placeholder="Enter Video URL"
//                   name="videoPath"
//                   value={editingMovie.videoPath}
//                   onChange={handleEditChange}
//                 />
//               </FloatingLabel>
//             </Form>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowEditModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleEditSubmit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default MovieCrud;










// import React, { useState, useEffect } from "react";
// import { Table, Button } from "react-bootstrap";
// import axios from "axios";
// import './AdminCss/Crud.css';

// function MovieCrud() {
//   const [movies, setMovies] = useState([]);

//   // Fetch movies from backend
//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/movies/');
//         setMovies(response.data);
//       } catch (error) {
//         console.error('Failed to fetch movies:', error);
//       }
//     };
//     fetchMovies();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/movies/${id}`);
//       setMovies(movies.filter(movie => movie.id !== id));
//     } catch (error) {
//       console.error('Error deleting movie:', error);
//     }
//   };

//   return (
//     <Table className="table-responsive" responsive="sm">
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>Movie Name</th>
//           <th>Director</th>
//           <th>Genre</th>
//           <th>Release Year</th>
//           <th>Edit</th>
//           <th>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         {movies.map(movie => (
//           <tr key={movie.id}>
//             <td>{movie.id}</td>
//             <td>{movie.name}</td>
//             <td>{movie.directorName}</td>
//             <td>{movie.genre}</td>
//             <td>{movie.releasingYear}</td>
//             <td>
//               <Button variant="warning" size="sm">Edit</Button>
//             </td>
//             <td>
//               <Button variant="danger" size="sm" onClick={() => handleDelete(movie.id)}>
//                 Delete
//               </Button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// }

// export default MovieCrud;






// import React from "react";
// import { Table } from "react-bootstrap";
// import './AdminCss/Crud.css';


// function MovieCrud(){

//     return(

//         <Table className="table-responsive" responsive="sm">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Movie Name</th>
//             <th>Director</th>
//             <th>Genre</th>
//             <th>Release Date</th>
//             <th>Edit</th>
//             <th>delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>Table cell</td>
//             <td>Table cell</td>
//             <td>Table cell</td>
//             <td>Table cell</td>
//             <td><input type="button" value='Edit'></input></td>
//             <td><input type="button" value='Delete'></input></td>
//           </tr>
          
        
//         </tbody>
//       </Table>
//     );

// }

// export default MovieCrud;