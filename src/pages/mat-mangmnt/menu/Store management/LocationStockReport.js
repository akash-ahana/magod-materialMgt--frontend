import React from "react";
import Table from "react-bootstrap/Table";

function LocationStockReport() {
  return (
    <div>
      <h4 className="form-title">Location Stock Report</h4>
      <hr className="horizontal-line" />
      <div className="row">
        <div className="col-md-4">
          <h4 className="form-title"> Stock Viewer</h4>

          <div className="row">
            <div className="col-md-12">
              <label className="form-label"> Select Customer</label>
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
            <div className="col-md-6">
              <label className="form-label"> Location</label>
              <input className="" />
            </div>
            <div className="col-md-6">
              {" "}
              <label className="form-label">Capacity</label>
              <input className="" />
            </div>
          </div>
          <div className="row">
            {" "}
            <div className="col-md-6">
              {" "}
              <label className="form-label">Type</label>
              <input className="" />
            </div>
            <div className="col-md-6">
              {" "}
              <label className="form-label">Used</label>
              <input className="" />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h8>Show Stock</h8>
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                {" "}
                <div
                  className="col-md-6 mt-2"
                  style={{ display: "flex", gap: "5px" }}
                >
                  <input
                    className="form-check-input mt-2"
                    type="radio"
                    id="flexCheckDefault"
                    name="updated"
                    //   value={inputPart.upDated}
                    //disabled={boolVal3 | boolVal4}
                    //   disabled={true}
                    //   onChange={changeMaterialHandle}
                  />
                  <label className="">All</label>
                </div>
              </div>
              <div className="row">
                {" "}
                <div
                  className="col-md-8 mt-2"
                  style={{ display: "flex", gap: "5px" }}
                >
                  <input
                    className="form-check-input mt-2"
                    type="radio"
                    id="flexCheckDefault"
                    name="updated"
                    //   value={inputPart.upDated}
                    //disabled={boolVal3 | boolVal4}
                    //   disabled={true}
                    //   onChange={changeMaterialHandle}
                  />
                  <label className="">Customer</label>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row justify-content-center mt-3">
                <button className="button-style " style={{ width: "160px" }}>
                  Summary Report
                </button>
                <button className="button-style " style={{ width: "160px" }}>
                  Details Report
                </button>
              </div>
            </div>

            <div className="col-md-12">
              <label className="form-label">Customer</label>
              <input className="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label className="form-label">Material</label>
              <input className="" />
            </div>
          </div>
          <div className="row">
            {" "}
            <div className="col-md-4">
              <label className="form-label">Dim 1</label>
              <input className="" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Dim 2</label>
              <input className="" />
            </div>
            <div
              className="col-md-4 mt-2"
              style={{ display: "flex", gap: "5px" }}
            >
              <input
                className="form-check-input mt-2"
                type="checkbox"
                id="flexCheckDefault"
                name="updated"
                //   value={inputPart.upDated}
                //disabled={boolVal3 | boolVal4}
                //   disabled={true}
                //   onChange={changeMaterialHandle}
              />
              <label className="">Scrap</label>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div
            style={{
              height: "400px",
              overflowY: "scroll",
              border: "solid #c0c4c2 1px",
              marginTop: "20px",
            }}
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
                  <th>Location No</th>
                  <th>Storage Type</th>
                  <th>Capacity</th>
                  <th>Capacity Utilized</th>
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
        <div className="col-md-7">
          <div className="row">
            <div
              style={{
                height: "200px",
                overflowY: "scroll",
                border: "solid #c0c4c2 1px",
                marginTop: "20px",
              }}
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
                    <th>Customer</th>
                    <th>Material</th>
                    <th>Dim 1</th>
                    <th>Dim 2</th>
                    <th>Quantity</th>
                    <th>Scrap</th>
                    <th>Weight</th>
                    <th>S Weight</th>
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
          <div className="row">
            <div
              style={{
                height: "200px",
                overflowY: "scroll",
                border: "solid #c0c4c2 1px",
                marginTop: "20px",
              }}
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
                    <th>Mtrl Stock ID</th>
                    <th>Dim 1</th>
                    <th>Dim 2</th>
                    <th>Weight</th>
                    <th>Scrap Weight</th>
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
      </div>
    </div>
  );
}

export default LocationStockReport;
