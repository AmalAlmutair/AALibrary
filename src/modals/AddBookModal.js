import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import booksStore from "../stores/booksStore";

function AddBookModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [addBook, setAddBook] = useState({
    title: "",
    author: "",
    genre: ["Self-Help"],
  });

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  const handleChange = (event) => {
    setAddBook({ ...addBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    booksStore.handleAddBook(addBook);
    setAddBook({ title: "", author: "", genre: ["Self-Help"] });
    handleClose();
  };
  return (
    <>
      <div className="members-list-header">
        <Button variant="primary" onClick={handleShow}>
          Add New Book
        </Button>
      </div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="title"
                type="text"
                placeholder="Enter Book Title"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Author</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="author"
                type="text"
                placeholder="Enter Author "
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Select Genre</Form.Label>
              <Form.Select name="genre" onChange={handleChange}>
                <option value="Self-Help">Self Help</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Thriller">Thriller</option>
                <option value="Suspense">Suspense</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Biography">Biography</option>
                <option value="Business">Business</option>
                <option value="Entrepreneurship">Entrepreneurship</option>
                <option value="Crime">Crime</option>
                <option value="Mystery">Mystery</option>
                <option value="Fiction">Fiction</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Book
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddBookModal;
