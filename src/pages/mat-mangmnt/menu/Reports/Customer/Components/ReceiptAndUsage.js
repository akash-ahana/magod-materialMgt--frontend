import React from "react";
import Table from "react-bootstrap/Table";

function ReceiptAndUsage() {
  return (
    <div>
      <div className="row">
        <div className="col-md-5">
          {" "}
          <div style={{ height: "375px", overflow: "scroll" }}>
            <Table bordered>
              <thead
                style={{
                  textAlign: "center",
                  position: "sticky",
                  top: "-1px",
                }}
              >
                <tr>
                  <th>RV NO</th>
                  <th>Date</th>
                  <th>Status</th>
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
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="col-md-7">
          <div className="row">
            <div style={{ height: "375px", overflow: "scroll" }}>
              <Table bordered>
                <thead
                  style={{
                    textAlign: "center",
                    position: "sticky",
                    top: "-1px",
                  }}
                >
                  <tr>
                    <th>Srl NO</th>
                    <th>Part ID</th>
                    <th>Received</th>
                    <th>Accepted</th>
                    <th>Rejected</th>
                    <th>Issued</th>
                    <th>Used</th>
                    <th>Returned</th>
                    <th>Unused</th>
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
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div style={{ height: "375px", overflow: "scroll" }}>
                <Table bordered>
                  <thead
                    style={{
                      textAlign: "center",
                      position: "sticky",
                      top: "-1px",
                    }}
                  >
                    <tr>
                      <th>NCProgramNO</th>
                      <th>QtyIssued</th>
                      <th>QtyUsed</th>
                      <th>QtyReturned</th>
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
            <div className="col-md-6">
              <div style={{ height: "375px", overflow: "scroll" }}>
                <Table bordered>
                  <thead
                    style={{
                      textAlign: "center",
                      position: "sticky",
                      top: "-1px",
                    }}
                  >
                    <tr>
                      <th>IV NO</th>
                      <th>Issue_Date</th>
                      <th>QtyIssued</th>
                      <th>QtyUsed</th>
                      <th>QtyReturned</th>
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
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiptAndUsage;
