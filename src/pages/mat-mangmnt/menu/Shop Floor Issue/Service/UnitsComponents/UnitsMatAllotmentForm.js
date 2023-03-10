import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
function UnitsMatAllotmentForm() {
  const nav = useNavigate();
  return (
    <>
      <div>
        <h4 className="form-title">Material Allotment Form</h4>
        <hr className="horizontal-line" />

        <div className="row">
          <div className="col-md-6">
            <label className="">Task No</label>
            <input type="text" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Customer</label>
            <select className="ip-select">
              <option value="option 1"> A A Industries</option>
              <option value="option 1">Test Industries</option>
              <option value="option 1">Ahana Systems and solutions</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div style={{ marginBottom: "9px" }}>
              <label className="">NC Program No</label>
              <input className="" />
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ marginBottom: "9px" }}>
              <label className="">Material Code</label>
              <input className="" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="">Priorty</label>
            <input className="" />
          </div>
          <div className="col-md-3">
            <label className="">Para 1</label>
            <input className="" />
          </div>

          <div className="col-md-3">
            <label className="">Machine</label>
            <input className="" />
          </div>
          <div className="col-md-3">
            <label className="">Quantity</label>
            <input className="" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="">Status</label>
            <input className="" />
          </div>
          <div className="col-md-3">
            <label className="">Para 2</label>
            <input className="" />
          </div>

          <div className="col-md-3">
            <label className="">Process</label>
            <input className="" />
          </div>
          <div className="col-md-3">
            <label className="">Alloted</label>
            <input className="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <label className="">Sourse</label>
            <input className="" />
          </div>
          <div className="col-md-5">
            <button
              className="button-style "
              //   disabled={true}
            >
              Allot Material
            </button>
            <button
              className="button-style "

              //   disabled={true}
              //   onClick={addToStock}
            >
              Cancel Allot
            </button>
            <button
              className="button-style "
              //   disabled={true}
              onClick={() =>
                nav(
                  "/materialmanagement/shopfloorissue/service/units/shopfloormaterialissuevocher"
                )
              }
            >
              Issue to Production
            </button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-7">
            <div
              style={{
                height: "400px",
                overflowY: "scroll",
                marginTop: "10px",
              }}
            >
              <Table bordered>
                <thead
                  style={{
                    textAlign: "center",
                    position: "sticky",
                    top: "-1px",
                  }}
                >
                  <tr>
                    <th>Locked</th>
                    <th>Stock ID</th>
                    <th>Para 1</th>
                    <th>Para 2</th>
                    <th>Location</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  <tr
                  // onClick={() => selectedRowFn(item, key)}
                  // className={
                  //   key === selectedRow?.index ? "selcted-row-clr" : ""
                  // }
                  >
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="col-md-5">
            <div
              style={{
                height: "400px",
                overflowY: "scroll",
                marginTop: "10px",
              }}
            >
              <Table bordered>
                <thead
                  style={{
                    textAlign: "center",
                    position: "sticky",
                    top: "-1px",
                  }}
                >
                  <tr>
                    <th>Stock ID</th>
                    <th>Para 1</th>
                    <th>Para 2</th>
                    <th>Selected</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  <tr
                  // onClick={() => selectedRowFn(item, key)}
                  // className={
                  //   key === selectedRow?.index ? "selcted-row-clr" : ""
                  // }
                  >
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnitsMatAllotmentForm;
