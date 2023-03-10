import React from "react";
import NavComp from "../Components/NavComp";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function ShopFloorMaterialAllotment() {
  const nav = useNavigate();
  return (
    <div>
      <h4 className="form-title">Shop Floor Naterial Allotment</h4>
      <hr className="horizontal-line" />
      <div className="row-md-6 justify-content-center mt-1 mb-2">
        <h4 style={{ marginLeft: "30px" }}>Parts</h4>
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
                  <th>Tak NO</th>
                  <th>PStatus</th>
                  <th>CutName</th>
                  <th>NCProgram No</th>
                  <th>Machine</th>
                  <th>Operation</th>
                  <th>Mtrl Code</th>
                  <th>Sourse</th>
                  <th>Qty</th>
                  <th>Qty Alloted</th>
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

export default ShopFloorMaterialAllotment;
