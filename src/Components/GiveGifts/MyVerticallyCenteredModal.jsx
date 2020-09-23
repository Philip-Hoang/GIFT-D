import React from "react";
import { Modal, Button } from "react-bootstrap";
export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-box"
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="text-center"
          id="contained-modal-title-vcenter"
        ></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1 className="text-center">{`${props.savedName}'s Gift has been Saved!`}</h1>
        <div className="text-center">
          <Button className="modal-button text-center " onClick={props.onHide}>
            Home
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
