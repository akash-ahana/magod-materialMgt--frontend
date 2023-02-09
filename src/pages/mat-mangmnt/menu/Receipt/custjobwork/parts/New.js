import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCustomers } from "../../../../actions/customerAction";

function New() {
  const dispatch = useDispatch();
  const customerList = useSelector((state) => state.customerList);
  const { loading1, error1, customers } = customerList;
  useEffect(() => {
    dispatch(listCustomers());
  }, [dispatch]);

  const currDate = new Date()
    .toJSON()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");

  return (
    <div>
      <h4 className="form-title">Customer Parts Receipt Voucher</h4>
      <hr className="horizontal-line" />

      <div className="row">
        <div className="col-md-3">
          <label className="">Receipt Date</label>
          <input type="text" value={currDate} disabled />
        </div>
        <div className="col-md-3">
          <label className="">RV No</label>
          <input type="text" disabled />
        </div>
        <div className="col-md-3">
          <label className="">RV Date</label>
          <input type="text" value={currDate} disabled />
        </div>
        <div className="col-md-3">
          <label className="">status</label>
          <input type="text" disabled />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <label className="form-label">Customer</label>
          <select className="ip-select">
            <option value="">Select Customer</option>
            {customers.map((customer, index) => (
              <option key={customer.Cust_Code} value={customer.Cust_Code}>
                {customer.Cust_name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label className="">Weight</label>
          <input type="text" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <label className="">Reference</label>
          <input type="text" />
        </div>
        <div className="col-md-4">
          <label className="">Caluclated Weight</label>
          <input type="text" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8 justify-content-center">
          <button className="button-style" style={{ width: "196px" }}>
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
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default New;
