import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

function GenreCrud({ genres, setGenres }) {
  const [editingGenre, setEditingGenre] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newGenreName, setNewGenreName] = useState("");

  const handleDeleteGenre = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/genres/${id}`);
      setGenres(genres.filter((genre) => genre.id !== id));
    } catch (error) {
      console.error("Failed to delete genre:", error);
    }
  };

  const handleEditGenre = (genre) => {
    setEditingGenre(genre);
    setNewGenreName(genre.name);
    setShowEditModal(true);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/genres/${editingGenre.id}`, { name: newGenreName });
      setGenres(genres.map((genre) =>
        genre.id === editingGenre.id ? response.data : genre
      ));
      setShowEditModal(false);
      setEditingGenre(null);
    } catch (error) {
      console.error("Failed to update genre:", error);
    }
  };

  return (
    <div>
      <Table responsive="sm" style={{ marginTop: '5%', marginBottom: '5%' }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Genre</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre) => (
            <tr key={genre.id}>
              <td>{genre.id}</td>
              <td>{genre.name}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => handleEditGenre(genre)}
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteGenre(genre.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Genre Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Genre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGenreName">
              <Form.Label>Genre Name</Form.Label>
              <Form.Control
                type="text"
                value={newGenreName}
                onChange={(e) => setNewGenreName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GenreCrud;






