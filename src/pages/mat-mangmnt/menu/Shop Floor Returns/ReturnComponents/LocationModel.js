import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ModalComp from "./ModalComp";

function LocationModel({ show, setShow }) {
  const [open, setOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleOpen = () => {
    // alert("The material will be altered as SCRAP, Continue?");
    setOpen(true);
    setShow(false);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <ModalComp open={open} setOpen={setOpen} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Magod Material</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row mt-2">
              {" "}
              <div className="col-md-12 ">
                <label className="">Location</label>{" "}
              </div>{" "}
              <div className="col-md-11" style={{ marginTop: "8px" }}>
                {" "}
                <select className="ip-select dropdown-field">
                  <option value="option 1">001</option>
                  <option value="option 1">002</option>
                  <option value="option 1">003</option>
                  <option value="option 1">004</option>{" "}
                </select>{" "}
              </div>{" "}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleOpen}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default LocationModel;
