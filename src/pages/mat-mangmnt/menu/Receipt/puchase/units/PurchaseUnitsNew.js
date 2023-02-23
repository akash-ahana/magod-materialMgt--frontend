import React from "react";
import Tables from "../../../../../../components/Tables";
import { data3 } from "../../../../components/Data";
import Swal from "sweetalert2";

function PurchaseUnitsNew() {
  const getHeadings = () => {
    return Object.keys(data3[0]);
  };

  const getPop = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "okay",
    });
  };

  return (
    <div>
      <div>
        <h4 className="form-title">Material Receipt Voucher</h4>
        <hr className="horizontal-line" />

        <div className="row">
          <div className="col-md-3">
            <label className="">Receipt Date</label>
            <input
              type="text"
              name="receiptDate"
              // value={formHeader.receiptDate}
              readOnly
            />
          </div>
          <div className="col-md-3">
            <label className="">RV No</label>
            <input type="text" name="rvNo" value="Draft" readOnly />
          </div>
          <div className="col-md-3">
            <label className="">RV Date</label>
            <input type="text" name="rvDate" readOnly />
            {/* value={currDate} */}
          </div>
          <div className="col-md-3">
            <label className="">status</label>
            <input type="text" name="status" value="Created" readOnly />
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
              <option value="">Select Customer</option>
              {/* {customers.map((customer, index) => (
                  <option value={customer.Cust_Code}>
                    {customer.Cust_name}
                  </option>
                ))} */}
            </select>
          </div>
          <div className="col-md-4">
            <label className="">Weight</label>
            <input
              type="text"
              name="weight"
              required
              // value={formHeader.weight}
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
        </div>

        <div className="row mt-4">
          <div className="col-md-8 justify-content-center">
            <button className="button-style" style={{ width: "196px" }}>
              Save
            </button>

            <button
              className="button-style"
              style={{ width: "196px" }}
              onClick={getPop}
            >
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
              // value={custDetailVal}
              readOnly
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div
              className="table-data"
              style={{ height: "480px", overflowY: "scroll" }}
            >
              <Tables theadData={getHeadings()} tbodyData={data3} />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="ip-box form-bg">
              <div className="row justify-content-center mt-2">
                <button className="button-style " style={{ width: "260px" }}>
                  Add Serial
                </button>
              </div>
              <div className="row justify-content-center mt-2">
                <button className="button-style " style={{ width: "120px" }}>
                  Add to stock
                </button>
                <button className="button-style " style={{ width: "130px" }}>
                  Remove stock
                </button>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="ip-box form-bg">
                    <div className="row">
                      <p className="form-title-deco">Serial Details</p>

                      <div className="col-md-3 ">
                        <label className="">Part ID</label>
                      </div>
                      <div className="col-md-6" style={{ marginTop: "8px" }}>
                        <select className="ip-select dropdown-field">
                          <option value="option 1">001</option>
                          <option value="option 1">002</option>
                          <option value="option 1">003</option>
                          <option value="option 1">004</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-3">
                        <label className="">Para 1</label>
                      </div>
                      <div className="col-md-4 ">
                        <input className="in-field" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <label className="">Para 2</label>
                      </div>
                      <div className="col-md-4 ">
                        <input className="in-field" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <label className="">Para 3</label>
                      </div>
                      <div className="col-md-4 ">
                        <input className="in-field" />
                      </div>
                    </div>
                    <div className="col-md-12 ">
                      <p className="form-title-deco">Quantity Details</p>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Received</label>
                        </div>
                        <div className="col-md-4 ">
                          <input className="in-field" />
                        </div>
                        <div className="col-md-4">
                          <div
                            className="col-md-12 mt-2"
                            style={{ display: "flex", gap: "5px" }}
                          >
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                             <label className="">Inspected</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Accepted</label>
                        </div>
                        <div className="col-md-4 ">
                          <input className="in-field" />
                        </div>
                        <div className="col-md-4">
                          <div
                            className="col-md-12 mt-2"
                            style={{ display: "flex", gap: "5px" }}
                          >
                            <input
                              className="form-check-input mt-2"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                             <label className="">Updated</label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Wt Caluclated 2</label>
                        </div>
                        <div className="col-md-4 ">
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Weight</label>
                        </div>
                        <div className="col-md-4 ">
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Location</label>
                        </div>
                        <div className="col-md-6" style={{ marginTop: "8px" }}>
                          <select className="ip-select dropdown-field">
                            <option value="option 1">001</option>
                            <option value="option 1">002</option>
                            <option value="option 1">003</option>
                            <option value="option 1">004</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-2">
                <button className="button-style " style={{ width: "120px" }}>
                  Delete Serial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseUnitsNew;
