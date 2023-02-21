import React, { useEffect, useState } from "react";

const { getRequest, postRequest } = require("../../../../../api/apiinstance");
const { endpoints } = require("../../../../../api/constants");

function PurchasePartsNew() {
  const currDate = new Date()
    .toJSON()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");

  let [custdata, setCustdata] = useState([]);
  const [formHeader, setFormHeader] = useState({
    rvId: "",
    receiptDate: currDate, //.split("/").reverse().join("-"),
    rvNo: "Draft",
    rvDate: currDate, //.split("/").reverse().join("-"),
    status: "Created",
    customer: "",
    customerName: "",
    reference: "",
    weight: "0",
    calcWeight: "0",
    type: "Parts",
    address: "",
  });

  useEffect(() => {
    async function fetchCustData() {
      getRequest(endpoints.getCustomers, (data) => {
        setCustdata(data);
      });
      //console.log("data = ", custdata);
    }
    fetchCustData();
  }, []);

  let changeCustomer = async (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    const found = custdata.find((obj) => obj.Cust_Code === value);
    //setCustDetailVal(found.Address);

    setFormHeader((preValue) => {
      //console.log(preValue)
      return {
        ...preValue,
        [name]: value,
        address: found.Address,
      };
    });
  };
  return (
    <div>
      <div>
        <h4 className="form-title">Customer Parts Receipt Voucher</h4>
        <hr className="horizontal-line" />

        <div className="row">
          <div className="col-md-3">
            <label className="">Receipt Date</label>
            <input
              type="text"
              name="receiptDate"
              value={formHeader.receiptDate}
              readOnly
            />
          </div>
          <div className="col-md-3">
            <label className="">RV No</label>
            <input type="text" name="rvNo" readOnly value={formHeader.rvNo} />
          </div>
          <div className="col-md-3">
            <label className="">RV Date</label>
            <input
              type="text"
              name="rvDate"
              value={formHeader.rvDate}
              readOnly
            />
          </div>
          <div className="col-md-3">
            <label className="">status</label>
            <input
              type="text"
              name="status"
              value={formHeader.status}
              readOnly
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <label className="form-label">Customer</label>
            <select
              className="ip-select"
              name="customer"
              onChange={changeCustomer}
            >
              <option value="" disabled selected>
                Select Customer
              </option>
              {custdata.map((customer, index) => (
                <option key={index} value={customer.Cust_Code}>
                  {customer.Cust_name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label className="">Weight</label>
            <input
              type="text"
              name="weight"
              value={formHeader.weight}
              // onChange={InputHeaderEvent}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <label className="">Reference</label>
            <input
              type="text"
              name="reference"
              value={formHeader.reference}
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
        </div>

        <div className="row mt-4">
          <div className="col-md-8 justify-content-center">
            <button
              className="button-style"
              style={{ width: "196px" }}
              // onClick={saveButtonState}
            >
              Save
            </button>
            <button className="button-style" style={{ width: "196px" }}>
              Allot RV No
            </button>
            <button className="button-style" style={{ width: "196px" }}>
              Delete RV
            </button>
          </div>
          <div className="col-md-4">
            <label className="form-label"></label>
            <textarea
              style={{ height: "110px" }}
              className="form-control"
              value={formHeader.address}
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          {/* <div
              className="table-data"
              style={{ height: "480px", overflowY: "scroll" }}
            >
               <Tables theadData={getHeadings()} tbodyData={data1} />
            </div> */}
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Part Id</th>
                <th>Unit Wt</th>
                <th>Qty Received</th>
                <th>Qty Accepted</th>
                <th>Qty Rejected</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {partArray.map((part, index) => ( */}
              {/* <tr key={index}> */}
              {/* <td>{index + 1}</td>
                    <td>{part.partId}</td>
                    <td>{part.unitWeight}</td>
                    <td>{part.qtyReceived}</td>
                    <td>{part.qtyAccepted}</td>
                    <td>{part.qtyRejected}</td> */}
              <td>
                <button
                  className="btn btn-danger form-control"
                  // onClick={() => handleDelete(part.id)}
                >
                  Delete
                </button>
              </td>
              {/* </tr> */}
              {/* ))} */}
            </tbody>
          </table>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="ip-box form-bg">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="ip-box form-bg">
                  <div className="row">
                    <div className="row justify-content-center mt-1 mb-2">
                      <button
                        className="button-style "
                        style={{ width: "120px" }}
                        //   onClick={addNewPart}
                      >
                        Add New
                      </button>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ">
                        <label className="">Part ID</label>
                      </div>
                      <div className="col-md-8" style={{ marginTop: "8px" }}>
                        <select className="ip-select dropdown-field">
                          <option value="option 1">001</option>
                          <option value="option 1">002</option>
                          <option value="option 1">003</option>
                          <option value="option 1">004</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ">
                        <label className="">Unit Wt</label>
                      </div>
                      <div className="col-md-8 ">
                        <input
                          className="in-field"
                          type="text"
                          //   onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ">
                        <label className="">Qty Received</label>
                      </div>
                      <div className="col-md-8 ">
                        <input
                          className="in-field"
                          type="text"
                          //   onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ">
                        <label className="">Qty Accepted</label>
                      </div>
                      <div className="col-md-8 ">
                        <input
                          className="in-field"
                          type="text"
                          //   onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ">
                        <label className="">Qty Rejected</label>
                      </div>
                      <div className="col-md-8 ">
                        <input
                          className="in-field"
                          type="text"
                          //   onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <button
                className="button-style "
                style={{ width: "120px" }}
                //   onClick={addNewPart}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchasePartsNew;
