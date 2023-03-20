import React from "react";
import Table from "react-bootstrap/Table";

function DailyReportMaterialReceipt() {
  return (
    <div>
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
              <th>RV No</th>
              <th>Customer</th>
              <th>Customer Doc No</th>
              <th>Type</th>
              <th>Receipt Details</th>
              <th>Quantity</th>
              <th>Weight Caluclated</th>
              <th>Actual Weight</th>
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
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DailyReportMaterialReceipt;
