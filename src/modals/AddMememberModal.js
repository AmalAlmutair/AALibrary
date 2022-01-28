import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import membersStore from "../stores/membersStore";
import Members from "../components/Members";
// import Modal from "../modals/AddMememberModal";

function AddMememberModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [addMember, setAddMember] = useState({
    firstName: "",
    lastName: "",
    membership: "silver",
  });

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  const handleChange = (event) => {
    setAddMember({ ...addMember, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    membersStore.handleAddMember(addMember);
    handleClose();
  };
  return (
    <>
      <div className="members-list-header">
        <Button variant="primary" onClick={handleShow}>
          Add New Member
        </Button>
      </div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Fist Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="Enter first name"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="lastName"
                type="text"
                placeholder="Enter Last Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Membership Type:</Form.Label>
              <Form.Select name="membership" onChange={handleChange}>
                <option value="platinum">Platinum</option>
                <option value="gold">Gold</option>
                <option value="bronze">Bronze</option>
                {/* <option>Disabled select</option> */}
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Member
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddMememberModal;
