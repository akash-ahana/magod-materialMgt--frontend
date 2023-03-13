import React from "react";
import { CRVdata3 } from "../../../components/Data";
import Tables from "../../../../../components/Tables";

function ReturnPendingDispatchList() {
  const getHeadings3 = () => {
    return Object.keys(CRVdata3[0]);
  };

  return (
    <>
      <h4 className="form-title">Material Return Issue Vocher</h4>
      <hr className="horizontal-line" />
      <div className="row">
        <div className="col-md-8">
          <label className="form-label">Select Customer</label>
          <select className="ip-select">
            <option value="option 1"> Customer one</option>
            <option value="option 1">Customer two</option>
            <option value="option 1">Customer three</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div
            className="col-md-4 mt-4"
            style={{ display: "flex", gap: "5px" }}
          >
            <input
              className="form-check-input mt-2"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
             <label className="">Filter Customer</label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-6 mt-2">
            <button className="button-style">Open IV</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mt-4">
          <Tables theadData={getHeadings3()} tbodyData={CRVdata3} />
        </div>
      </div>
    </>
  );
}

export default ReturnPendingDispatchList;
