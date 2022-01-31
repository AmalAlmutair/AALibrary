import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import booksData from "../booksData";
// import Modal from "../modals/AddMememberModal";

function ShowMemberProfile({ selectedMember }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [showMember, setShowMember] = useState({ selectedMember });

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  const books = selectedMember.currentlyBorrowedBooks.map((bookId) =>
    booksData.find((book) => +book.id === +bookId)
  );

  return (
    <>
      <div>
        <div className="members-list-header">
          <Button
            style={{
              fontFamily: "Cambria",
              height: "35px",
            }}
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
            <Modal.Title>Member Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="details">
              <div className="badge">
                <img
                  className="badge-image"
                  src={
                    selectedMember.membership === "gold"
                      ? "https://cdn-icons-png.flaticon.com/512/2583/2583344.png"
                      : selectedMember.membership === "silver"
                      ? "https://cdn-icons-png.flaticon.com/512/2583/2583319.png"
                      : "https://cdn-icons-png.flaticon.com/512/2583/2583434.png"
                  }
                />
              </div>
              <div className="member-name-books">
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {selectedMember.firstName + " " + selectedMember.lastName}
                </p>
              </div>
            </div>
            <p style={{ fontFamily: "Cambria" }}>
              <strong>Books Borrowed: </strong>
              <ol>
                {books.map((book) => (
                  <li>
                    <div className="book-item">
                      {book.title} - By: {book.author}
                      <p>
                        <img className="book-image" src={book.image} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default ShowMemberProfile;
