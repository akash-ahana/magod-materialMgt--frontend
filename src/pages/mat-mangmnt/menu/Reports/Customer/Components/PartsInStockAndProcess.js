import React from "react";
import NavComp from "../../../../components/NavComp";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function PartsInStockAndProcess() {
  const nav = useNavigate();
  return (
    <div>
      <div className="row-md-6 justify-content-center mt-1 mb-2">
        <h5>Issued : Issued for Production</h5>
        <button
          className="button-style "
          style={{ width: "120px", margin: "0px" }}
          onClick={() =>
            nav(
              "/materialmanagement/shopfloorissue/service/parts/shopfloorallotmentform"
            )
          }
          // disabled={boolVal1 | boolVal4}
        >
          Allot Material
        </button>
      </div>
      <div className="row mt-4">
        <div className="col-md-2">
          <NavComp />
        </div>
        <div className="col-md-10">
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
                  <th>Received</th>
                  <th>Accepted</th>
                  <th>Rejected</th>
                  <th>Issued</th>
                  <th>Used</th>
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

export default PartsInStockAndProcess;
