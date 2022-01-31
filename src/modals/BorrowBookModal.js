import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
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
    membersStore.handleReturnBook(borrowedBy, selectedBook);
    handleClose();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    membersStore.handleBorrowBook(borrowedBy, selectedBook);
    handleClose();
  };

  return (
    <>
      <div className="members-list-header">
        <Button
          style={{ fontFamily: "Cambria" }}
          variant="primary"
          onClick={handleShow}
        >
          Borrow / Return
        </Button>
      </div>
      <Modal
        style={{ fontFamily: "Cambria" }}
        show={isOpen}
        onHide={handleClose}
      >
        <Modal.Header style={{ backgroundColor: "tan" }} closeButton>
          <Modal.Title>Select Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
            <Button
              style={{ marginLeft: "10px" }}
              variant="primary"
              type="submit"
              onClick={handleRetun}
            >
              Retun
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BorrowBook;
