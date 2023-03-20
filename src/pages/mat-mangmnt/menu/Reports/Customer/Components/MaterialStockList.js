import React from "react";
import Table from "react-bootstrap/Table";

function MaterialStockList() {
  return (
    <div>
      {" "}
      <>
        <h4 className="form-title">Material Stock List</h4>
        <hr className="horizontal-line" />
        <h4 className="form-title">Customer Material Stock List</h4>
        <div className="row">
          <div className="col-md-1 mt-2">
            <label className="">Location</label>
          </div>
          <div className="col-md-6 mt-2">
            <select className="ip-select dropdown-field">
              <option value="option 1">001</option>
              <option value="option 1">002</option>
              <option value="option 1">003</option>
              <option value="option 1">004</option>
            </select>
          </div>
          <div className="col-md-2">
            <button className="button-style">Selected Stock</button>
          </div>
          <div className="col-md-2">
            <button className="button-style">Full Stock</button>
          </div>
        </div>

        <hr className="horizontal-line mt-4" />
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="row">
              {" "}
              <div style={{ height: "200px", overflowY: "scroll" }}>
                <Table bordered>
                  <thead
                    style={{
                      textAlign: "center",
                      position: "sticky",
                      top: "-1px",
                    }}
                  >
                    <tr>
                      <th>Material</th>
                      <th>Qty</th>
                      <th>Weight</th>
                      <th>Scrap Weight</th>
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
            <div className="row">
              {" "}
              <div style={{ height: "200px", overflowY: "scroll" }}>
                <Table bordered>
                  <thead
                    style={{
                      textAlign: "center",
                      position: "sticky",
                      top: "-1px",
                    }}
                  >
                    <tr>
                      <th>Material</th>
                      <th>Qty</th>
                      <th>Weight</th>
                      <th>Scrap Weight</th>
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
                    <th>Para1</th>
                    <th>Para2</th>
                    <th>Qty</th>
                    <th>Locked</th>
                    <th>Scrap</th>
                    <th>Weight</th>
                    <th>Scrap Weight</th>
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
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default MaterialStockList;
