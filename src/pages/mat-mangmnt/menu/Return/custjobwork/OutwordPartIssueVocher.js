import React, { useState } from "react";
import { data5 } from "../../../components/Data";
import Tables from "../../../../../components/Tables";
import Swal from "sweetalert2";
import FormModal from "../../../components/FormModal";

function OutwordPartIssueVocher(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const getHeadings = () => {
    return Object.keys(data5[0]);
  };

  const getPop = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Current IV is cancelled and stock added to Material Stock",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "okay",
    });
  };
  return (
    <div>
      <FormModal show={show} setShow={setShow} />

      <div>
        <h4 className="form-title">Outward Material Issue Vocher</h4>
        <hr className="horizontal-line" />

        <div className="row">
          <div className="col-md-4">
            <label className="">IV No</label>
            <input type="text" name="rvNo" value="Draft" readOnly />
          </div>
          <div className="col-md-4">
            <label className="">Date</label>
            <input
              type="text"
              name="rvDate"
              //   value={currDate} readOnly
            />
          </div>
          <div className="col-md-4">
            <button className="button-style">Save</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <label className="form-label">Customer</label>
            <select
              className="ip-select"
              name="customer"
              // onChange={changeCustomer}
            >
              {/* <option value="">Select Customer</option> */}
              {/* {customers.map((customer, index) => ( */}
              {/* <option value={customer.Cust_Code}> */}
              {/* {customer.Cust_name} */}
              {/* </option> */}
              {/* ))} */}
            </select>
          </div>
          <div className="col-md-4">
            <button className="button-style" onClick={getPop}>
              Cancel IV
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label className="">CST No</label>
            <input
              type="text"
              name="reference"
              // value={formHeader.reference}
              // onChange={InputHeaderEvent}
            />
          </div>
          <div className="col-md-4">
            <label className="">DC No / Ph No</label>
            <input
              type="text"
              name="reference"
              // value={formHeader.reference}
              // onChange={InputHeaderEvent}
            />
          </div>
          <div className="col-md-4">
            <button className="button-style" onClick={handleShow}>
              Create DC
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label className="">Weight</label>
            <input
              type="text"
              name="reference"
              // value={formHeader.reference}
              // onChange={InputHeaderEvent}
            />
          </div>

          <div className="col-md-4">
            <label className="">Caluclated Weight</label>
            <input
              type="text"
              name="calculatedWeight"
              // value={calcWeightVal}
              readOnly
            />
          </div>
          <div className="col-md-4">
            <button className="button-style">Print DC</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="ip-box form-bg">
            <div className="row">
              <Tables theadData={getHeadings()} tbodyData={data5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutwordPartIssueVocher;
