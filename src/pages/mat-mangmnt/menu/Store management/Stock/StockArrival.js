import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import UpdateStockModal from "./UpdateStockModal";

function StockArrival() {
  const [open, setOpen] = useState();
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      {" "}
      <UpdateStockModal open={open} setOpen={setOpen} />
      <h4 className="form-title">Stock Arrival Updater Form </h4>
      <hr className="horizontal-line" />
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <label>Stock Date</label>
          <input type="date" />
        </div>
        <div className="col-md-2">
          <button className="button-style">Load Data</button>
        </div>
        <div className="col-md-4">
          <button
            className="button-style"
            style={{ width: "200px" }}
            onClick={handleOpen}
          >
            Update Stock Ledger
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-7">
          {" "}
          <div className="row">
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
                    <th>RV No</th>
                    <th>Cust Docu No</th>
                    <th>Material</th>
                    <th>Caluclated Weight</th>
                    <th>Total Weight</th>
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
          <div className="row">
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
                    <th>RV No</th>
                    <th>Srl</th>
                    <th>Caluclated Weight</th>
                    <th>Total Weight</th>
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
        <div className="col-md-5">
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
                  <th>RV No</th>
                  <th>Cust Docu No</th>
                  <th>Material</th>
                  <th>Weight</th>
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
  );
}

export default StockArrival;
