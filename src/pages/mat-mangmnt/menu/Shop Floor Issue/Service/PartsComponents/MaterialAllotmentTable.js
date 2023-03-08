import React from "react";
import Table from "react-bootstrap/Table";

function MaterialAllotmentTable() {
  return (
    <div>
      <div style={{ height: "400px", overflowY: "scroll", marginTop: "10px" }}>
        <Table bordered>
          <thead
            style={{
              textAlign: "center",
              position: "sticky",
              top: "-1px",
            }}
          >
            <tr>
              <th>Part ID</th>
              <th>Qty / Assembly</th>
              <th>Required</th>
              <th>Alrady used</th>
              <th>Total used</th>
              <th>Rejected</th>
              <th>Available</th>
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
              <td>asdfghj</td>
              <td>asdfghj</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MaterialAllotmentTable;
