import React from "react";
import Table from "react-bootstrap/Table";

function ProductionMatIssueParts() {
  return (
    <div>
      <h4 className="form-title">Production Material Issue :Parts</h4>
      <hr className="horizontal-line" />
      <div className="table_top_style">
        <form action="">
          <div className="row">
            <div className="col-md-3">
              <label className="form-label">Issue Vr Not</label>
              <input className="" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Assembly Name</label>
              <input className="" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Alloted</label>
              <input className="" />
            </div>
            <div className="col-md-3">
              <button className="button-style ">Print</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label className="form-label">Vr Date</label>
              <input className="" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Operation</label>
              <input className="" />
            </div>
            <div className="col-md-3">
              <label className="form-label">Returned</label>
              <input className="" />
            </div>
            <div className="col-md-3">
              <button className="button-style ">Cancel</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label className="form-label">Program No</label>
              <input className="" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Material</label>
              <input className="" />
            </div>

            <div className="col-md-3">
              <button className="button-style ">Accept Return</button>
            </div>
          </div>
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
          </div>
        </form>
      </div>
      <div>
        <div
          style={{ height: "400px", overflowY: "scroll", marginTop: "30px" }}
        >
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
                <th>Part ID</th>
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
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ProductionMatIssueParts;
