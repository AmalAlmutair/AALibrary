import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import booksData from "../booksData";
// import Modal from "../modals/AddMememberModal";

function ShowMemberProfile({ selectedMember }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [showMember, setShowMember] = useState({ selectedMember });

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  // const handleChange = (event) => {
  //   setAddMember({ ...addMember, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   membersStore.handleAddMember(addMember);
  //   handleClose();
  // };

  const books = selectedMember.currentlyBorrowedBooks.map((bookId) =>
    booksData.find((book) => +book.id === +bookId)
  );

  // const books = booksData.filter((book) =>
  //   book.id === selectedMember.currentlyBorrowedBooks ? book : "hello"
  // );

  return (
    <>
      <div className="members-list-header">
        <Button variant="primary" onClick={handleShow}>
          Open Profile
        </Button>
      </div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Member Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Member Name: </strong>
            {selectedMember.firstName + " " + selectedMember.lastName}
          </p>
          <p>
            <strong>Membership: </strong>
            {selectedMember.membership}
          </p>
          <p>
            <strong>Books Borrowed: </strong>
            <ol>
              {books.map((book) => (
                <li>
                  {book.title} - By: {book.author}
                </li>
              ))}
            </ol>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ShowMemberProfile;
