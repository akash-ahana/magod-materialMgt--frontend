import React from "react";
import Table from "react-bootstrap/Table";

function ResizeAndSplittingForm() {
  return (
    <div>
      <h4 className="form-title">Material Resize and Splitting Form</h4>
      <hr className="horizontal-line" />
      <div className="table_top_style">
        <form action="">
          <div className="row">
            <div className="col-md-9">
              <label className="form-label">Material Code</label>
              <input className="" />
            </div>

            <div className="col-md-3 mt-2">
              <button className="button-style ">Split Material</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label className="form-label">Quantity</label>
              <input className="" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Para1</label>
              <input className="" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Para2</label>
              <input className="" />
            </div>
            <div className="col-md-3 mt-2">
              <button className="button-style ">Cancel</button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="row">
          <div className="col-md-8">
            <div
              style={{
                height: "400px",
                overflowY: "scroll",
                marginTop: "30px",
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
                    <th>Location</th>
                    <th>MtrlStock ID</th>
                    <th>DynamicPara1</th>
                    <th>Dyna2micPara</th>
                    <th>Returned</th>
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
          <div className="col-md-4 mt-4 ">
            <div className="ip-box form-bg">
              <div className="row">
                <div className="row">
                  <div className="col-md-3 ">
                    <label className="">Srl NO</label>
                  </div>

                  <div className="col-md-4 ">
                    <input className="in-field" readOnly />
                  </div>
                  <div className="col-md-3 ">
                    <button
                      className="button-style mt-3"
                      style={{ width: "130px" }}
                    >
                      Add New
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 ">
                    <label className="">Para1</label>
                  </div>

                  <div className="col-md-4 ">
                    <input className="in-field" readOnly />
                  </div>
                  <div className="col-md-3 ">
                    <button
                      className="button-style mt-3"
                      style={{ width: "130px" }}
                    >
                      Delete Item
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label className="">Para2</label>
                  </div>
                  <div className="col-md-8 ">
                    <input className="in-field" readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 ">
                    <label className="">Quantity</label>
                  </div>
                  <div className="col-md-8 ">
                    <input className="in-field" readOnly />
                  </div>
                </div>
                <div className="row mt-2 mb-3">
                  {" "}
                  <div className="col-md-3 ">
                    <label className="">Location</label>{" "}
                  </div>{" "}
                  <div className="col-md-8" style={{ marginTop: "8px" }}>
                    {" "}
                    <select className="ip-select dropdown-field">
                      <option value="option 1">001</option>
                      <option value="option 1">002</option>
                      <option value="option 1">003</option>
                      <option value="option 1">004</option>{" "}
                    </select>{" "}
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResizeAndSplittingForm;
