import React from "react";
import Table from "react-bootstrap/Table";

function ReleaseToProduction() {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-md-8 justify-content-center">
          <button className="button-style" style={{ width: "196px" }}>
            Release To Production
          </button>
        </div>
        <div className="col-md-6">
          <div style={{ height: "300px", overflowY: "scroll" }}>
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
                  <th>RV Date</th>
                  <th>Received</th>
                  <th>Accepted</th>
                  <th>Issued</th>
                  <th>Issue No</th>
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

        <div className="col-md-6">
          <div className="ip-box form-bg">
            <div className="row">
              <div className="col-md-3 ">
                <label className="">RV No</label>
              </div>
              <div className="col-md-8 ">
                <input className="in-field" type="text" name="unitWeight" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 ">
                <label className="">Part ID</label>
              </div>
              <div className="col-md-8" style={{ marginTop: "8px" }}>
                <select className="ip-select dropdown-field" name="partId">
                  {/* {mtrlDetails.map((part, index) => (
                      <option key={index} value={part.PartId}>
                        {part.PartId}
                      </option>
                    ))} */}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 ">
                <label className="">Qty Received</label>
              </div>
              <div className="col-md-8 ">
                <input className="in-field" type="text" name="qtyReceived" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 ">
                <label className="">Qty Accepted</label>
              </div>
              <div className="col-md-8 ">
                <input className="in-field" type="text" name="qtyAccepted" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 ">
                <label className="">Qty Issued</label>
              </div>
              <div className="col-md-8 ">
                <input
                  className="in-field"
                  type="text"
                  name="qtyRejected"
                  readOnly
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 ">
                <label className="">Issue Now</label>
              </div>
              <div className="col-md-8 ">
                <input className="in-field" type="text" name="unitWeight" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReleaseToProduction;
