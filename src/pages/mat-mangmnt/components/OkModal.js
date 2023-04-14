import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function OkModal(props) {
  const { show, setShow, handleShow, modalMessage } = props;

  const handleClose = () => setShow(false);
  //OKModalValue("ok");

  /*OKModalValue = () => {
    setShow(false);
  }*/
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OkModal;
