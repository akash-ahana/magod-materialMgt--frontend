import React from "react";
import Table from "react-bootstrap/Table";

function Parts() {
  return (
    <>
      <div className="row">
        <div className="col-md-2 col-sm-12">
          {" "}
          <div className="row-md-12 table-data">
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
                    <th>Rv No</th>
                    <th>Select</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  <tr>
                    <td>asdfghj</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="row-md-12 table-data">
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
                    <th>Select</th>
                    <th>PartID</th>
                    <th>ReceiveID</th>
                    <th>Rejected</th>
                    <th>Issued</th>
                    <th>Used</th>
                    <th>Returned</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="row">
            <div className="col-md-4">
              <label className="">RV_No</label>
              <input type="text" name="rvNo" />
            </div>
            <div className="col-md-7">
              <label className="">Customer Ref</label>
              <input type="text" name="customerRef" />
            </div>
          </div>
          <div>
            <button className="button-style" style={{ width: "200px" }}>
              Create Return Vocher
            </button>
          </div>
          <div>
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
                    <th>Rv No</th>
                    <th>CustDocument</th>
                    <th>Material Code</th>
                    <th>Weight</th>
                    <th>Length</th>
                    <th>Scrap</th>
                    <th>Scrap Weight</th>
                    <th>Instock</th>
                    <th>Issue</th>
                  </tr>
                </thead>

                <tbody className="tablebody">
                  <tr>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>asdfghj</td>
                    <td>
                      <input type="checkbox" />
                    </td>
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

export default Parts;
