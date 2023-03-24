import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function CreateReturnNewModal(props) {
  const { show, setShow, handleShow } = props;
  const nav = useNavigate();

  const handleClose = () => {
    if (props.srlMaterialType === "material") {
      let selectData = {
        IV_No: props.srlIVNO,
      };
      nav(
        "/materialmanagement/return/customerjobwork/OutwordMaterialIssueVocher",
        {
          state: { selectData },
        }
      );
    }
    if (props.srlMaterialType === "part") {
    }
    setShow(false);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>IV No</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.srlIVNO}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateReturnNewModal;
