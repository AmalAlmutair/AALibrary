import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import membersStore from "../stores/membersStore";
// import Modal from "../modals/AddMememberModal";

function ShowBookDetails({ selectedBook }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);
  const members = membersStore.members.filter((member) =>
    member.currentlyBorrowedBooks.find((bookId) => +bookId === +selectedBook.id)
  );

  return (
    <>
      <div className="members-list-header">
        <Button
          style={{ fontFamily: "Cambria", width: "100px" }}
          variant="primary"
          onClick={handleShow}
        >
          Details
        </Button>
      </div>
      <Modal
        style={{ fontFamily: "Cambria" }}
        show={isOpen}
        onHide={handleClose}
      >
        <Modal.Header style={{ backgroundColor: "tan" }} closeButton>
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
            {selectedBook.genre.map((index) =>
              selectedBook.genre.length - 1 ? index + ", " : index
            )}
          </p>
          <p>
            <strong>Borrowed By: </strong>
            <ol>
              {members.map((member) => (
                <li>{member.firstName + " " + member.lastName + " "}</li>
              ))}
            </ol>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ShowBookDetails;
