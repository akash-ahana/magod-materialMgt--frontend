import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
function SheetResizeForm() {
  const nav = useNavigate();

  return (
    <div>
      {" "}
      <h4 className="form-title">Raw Material Daily Report</h4>
      <hr className="horizontal-line" />
      <div className="row">
        <div className="col-md-9">
          <label className="form-label">Customer</label>
          <select
            className="ip-select"
            name="customer"
            //onChange={changeCustomer}
            // disabled={boolVal1}
          >
            {/* {custdata.map((customer, index) =>
                  customer.Cust_Code == 0 ? ( */}
            <option>
              {/* key={index} value={customer.Cust_Code} */}
              {/* {customer.Cust_name} */}
            </option>
            {/* ) : (
                    ""
                  )
                )} */}
          </select>
        </div>
        <div className="col-md-2">
          <button
            className="button-style"
            onClick={() =>
              nav(
                "/MaterialManagement/StoreManagement/ResizeSheets/MaterialResizeAndSplittingForm"
              )
            }
          >
            Resize
          </button>
        </div>
      </div>
      <div className="row mt-4">
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
                <th>Mtrl Stock</th>
                <th>Mtrl Code</th>
                <th>Shape</th>
                <th>Length</th>
                <th>Width</th>
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
                <td>asdfghj</td>
                <td>asdfghj</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default SheetResizeForm;
