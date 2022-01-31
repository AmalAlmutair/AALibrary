import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import membersStore from "../stores/membersStore";

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
        <Button
          style={{ fontFamily: "Cambria" }}
          variant="primary"
          onClick={handleShow}
        >
          Add New Member
        </Button>
      </div>
      <Modal
        style={{ fontFamily: "Cambria" }}
        show={isOpen}
        onHide={handleClose}
      >
        <Modal.Header style={{ backgroundColor: "tan" }} closeButton>
          <Modal.Title>Add New Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ fontFamily: "Cambria" }}>
                Fist Name
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="Enter first name"
                style={{ fontFamily: "Cambria" }}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ fontFamily: "Cambria" }}>
                Last Name
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                name="lastName"
                type="text"
                placeholder="Enter Last Name"
                style={{ fontFamily: "Cambria" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontFamily: "Cambria" }}>
                Select Membership Type:
              </Form.Label>
              <Form.Select
                style={{ fontFamily: "Cambria" }}
                name="membership"
                onChange={handleChange}
              >
                <option value="platinum">Platinum</option>
                <option value="gold">Gold</option>
                <option value="bronze">Bronze</option>
                {/* <option>Disabled select</option> */}
              </Form.Select>
            </Form.Group>

            <Button
              style={{ fontFamily: "Cambria" }}
              variant="primary"
              type="submit"
            >
              Add Member
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddMememberModal;
