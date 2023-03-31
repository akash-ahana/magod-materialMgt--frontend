import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CreateDCSaveClearCancelModal from "./CreateDCSaveClearCancelModal";
import { toast } from "react-toastify";

function CreateDCYesNoModal(props) {
  const { showCreateDC, setShowCreateDC, handleShow } = props;
  const [show, setShow] = useState(false);
  // const handleClose = () => setShowCreateDC(false);

  const handleNo = () => setShowCreateDC(false);
  const handleYes = () => {
    if (
      props.formHeader.TotalWeight === "0.000" ||
      props.formHeader.TotalWeight === "0" ||
      props.formHeader.TotalWeight === 0 ||
      props.formHeader.TotalWeight === 0.0
    ) {
      toast.error("Serial Weight Cannot be Zero. Set Weight and try again");
    } else {
      setShow(true);
    }
    setShowCreateDC(false);
  };

  return (
    <>
      <CreateDCSaveClearCancelModal
        show={show}
        setShow={setShow}
        formHeader={props.formHeader}
        outData={props.outData}
        type={props.type}
        getDCID={props.getDCID}
      />
      <Modal show={showCreateDC} onHide={handleNo}>
        <Modal.Header closeButton>
          <Modal.Title>Create DC</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You cannot cancel this DC once created, be very sure before you
          proceed.
          <br />
          Do you want to create DC?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleYes}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleNo}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateDCYesNoModal;
