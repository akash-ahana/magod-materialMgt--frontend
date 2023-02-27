import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
const { getRequest, postRequest } = require("../../api/apiinstance");
const { endpoints } = require("../../api/constants");

function CreateYesNoModal(props) {
  const { show, setShow, formHeader, allotRVYesButton } = props;
  const handleNo = () => setShow(false);

  const handleYes = () => {
    formHeader.status = "Received";

    //get running no and assign to RvNo
    const url =
      endpoints.getRunningNo + "?SrlType=MaterialReceiptVoucher&Period=2023";
    //console.log(url);
    getRequest(url, (data) => {
      data.map((obj) => {
        let newNo = parseInt(obj.Running_No) + 1;
        let no = "23/000" + newNo;
        formHeader.rvNo = no;

        //update the running no
        const inputData = {
          SrlType: "MaterialReceiptVoucher",
          Period: "2023",
          RunningNo: newNo,
        };
        postRequest(endpoints.updateRunningNo, inputData, (data) => {});

        //update header
        postRequest(
          endpoints.updateHeaderMaterialReceiptRegister,
          formHeader,
          (data) => {
            if (data.affectedRows !== 0) {
              toast.success("Record Updated Successfully");
            } else {
              toast.error("Record Not Updated");
            }
          }
        );
      });
    });

    allotRVYesButton(formHeader);
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleNo}>
        <Modal.Header closeButton>
          <Modal.Title>Please Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Have you entered all details and inspected the parts received? No
          changes are permitted after this
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

export default CreateYesNoModal;
