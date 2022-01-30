import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import membersData from "../membersData";
// import Modal from "../modals/AddMememberModal";

function ShowBookDetails({ selectedBook }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  const members = selectedBook.borrowedBy.map((memberId) =>
    membersData.find((member) => +member.id === +memberId)
  );

  return (
    <>
      <div className="members-list-header">
        <Button variant="primary" onClick={handleShow}>
          Book Details
        </Button>
      </div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Titel: </strong>
            {selectedBook.title}
          </p>
          <p>
            <strong>Author: </strong>
            {selectedBook.author}
          </p>

          <p>
            <strong>Genre: </strong>
            {selectedBook.genre}
          </p>
          <p>
            <strong>Books Borrowed: </strong>
            <ol>
              {members.map((member) => (
                <li>{member.firstName + " " + member.lastName}</li>
              ))}
            </ol>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ShowBookDetails;
