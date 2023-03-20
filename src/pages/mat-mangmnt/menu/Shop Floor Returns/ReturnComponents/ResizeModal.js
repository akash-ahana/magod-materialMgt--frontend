import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ModalComp from "./ModalComp";

function ResizeModal({ open1, setOpen1 }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setOpen1(false);
  };
  const handleClose1 = () => setOpen1(false);

  return (
    <>
      <ModalComp open={open} setOpen={setOpen} />
      <Modal show={open1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Magod Material</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <div className="row">
              <div className="col-md-2 mt-5">
                <label className="">Para1</label>
              </div>
              <div className="col-md-3 ">
                <label>Previous</label>
                <input className="in-field" name="qtyAccepted" />
              </div>
              <div className="col-md-3 ">
                <label>Resize To</label>
                <input className="in-field" name="qtyAccepted" />
              </div>
              <div className="col-md-3 mt-3 ">
                <button className="button-style" style={{ width: "80PX" }}>
                  Save
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2  mt-3">
                <label className="">Para2</label>
              </div>
              <div className="col-md-3 ">
                <input className="in-field" name="qtyAccepted" />
              </div>
              <div className="col-md-3 ">
                <input className="in-field" name="qtyAccepted" />
              </div>
              <div className="col-md-3 ">
                <button className="button-style" style={{ width: "80PX" }}>
                  Cancel
                </button>
              </div>
            </div>
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
          <Button variant="secondary" onClick={handleClose1}>
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
export default ResizeModal;
