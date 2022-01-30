import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import membersData from "../membersData";
import membersStore from "../stores/membersStore";

function BorrowBook({ selectedBook }) {
  const [isOpen, setIsOpen] = useState(false);
  const [borrowedBy, setBorrowedBy] = useState(1);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  const handleChange = (event) => {
    setBorrowedBy(event.target.value);
  };
  const handleRetun = (event) => {
    event.preventDefault();
    membersStore.handleReturnBook(borrowedBy, selectedBook.id);
    handleClose();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    membersStore.handleBorrowBook(borrowedBy, selectedBook.id);
    handleClose();
  };

  return (
    <>
      <div className="members-list-header">
        <Button variant="primary" onClick={handleShow}>
          Borrow Book
        </Button>
      </div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
          // onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3">
              <Form.Label>Members:</Form.Label>
              <Form.Select name="membership" onChange={handleChange}>
                {membersStore.members.map((member) => (
                  <option value={member.id}>
                    {member.firstName + " " + member.lastName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Borrow
            </Button>
            <Button variant="primary" type="submit" onClick={handleRetun}>
              Retun
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BorrowBook;
