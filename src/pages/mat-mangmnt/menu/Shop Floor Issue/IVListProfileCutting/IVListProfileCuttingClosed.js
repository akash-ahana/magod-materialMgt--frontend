import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function IVListProfileCuttingClosed() {
  const nav = useNavigate();

  return (
    <div>
      <>
        <h4 className="form-title">Parts Issue Vocher List</h4>
        <hr className="horizontal-line" />
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div style={{ height: "400px", overflowY: "scroll" }}>
              <Table bordered>
                <thead
                  style={{
                    textAlign: "center",
                    position: "sticky",
                    top: "-1px",
                  }}
                >
                  <tr>
                    <th>IV No</th>
                    <th>Issue Date</th>
                    <th>NC Program No</th>
                    <th>Qty Issued</th>
                    <th>Qty Used</th>
                    <th>Qty Returned</th>
                    <th>Remarks</th>
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
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="ip-box form-bg">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="ip-box form-bg">
                    <div className="row">
                      <div className="row justify-content-center mt-2">
                        <button
                          onClick={() =>
                            nav(
                              "/materialmanagement/shopfloorissue/ivlistprofilecutting/closed/shopmatissuevocher"
                            )
                          }
                          className="button-style"
                          style={{ width: "120px" }}
                        >
                          Open
                        </button>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Customer</label>
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
                          <label className="">Issue Vr No</label>
                        </div>
                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Vr Date</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            type="date"
                            // onChange={(e) => setDate(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Program No</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            // onChange={(e) => setDate(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Assembly Name</label>
                        </div>
                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Operation</label>
                        </div>

                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Material</label>
                        </div>
                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Alloted</label>
                        </div>
                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Used</label>
                        </div>
                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Returned</label>
                        </div>
                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default IVListProfileCuttingClosed;
