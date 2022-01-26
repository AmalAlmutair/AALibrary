import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddMememberModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  return (
    <div>
      <>
        <div>
          <br />
          <Button
            style={{ backgroundColor: "black", color: "white" }}
            variant="primary"
            onClick={handleShow}
          >
            Add New Member
          </Button>
        </div>
        <Modal
          show={isOpen}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AddMememberModal;
