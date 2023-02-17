import React, { useState } from "react";
import { CRVdata1, CRVdata2, CRVdata3 } from "../../../components/Data";
import Tables from "../../../../../components/Tables";
import { width } from "@mui/system";
import CreateDCModal from "../../../components/CreateDCModal";

function ReturnNew() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const getHeadings1 = () => {
    return Object.keys(CRVdata1[0]);
  };
  const getHeadings2 = () => {
    return Object.keys(CRVdata2[0]);
  };
  const getHeadings3 = () => {
    return Object.keys(CRVdata3[0]);
  };
  return (
    <>
      <CreateDCModal show={show} setShow={setShow} />

      <h4 className="form-title">Customer Material Information</h4>
      <hr className="horizontal-line" />
      <div className="row">
        <div className="col-md-4">
          <label className="form-label">Select Customer</label>
          <select className="ip-select">
            <option value="option 1"> Customer one</option>
            <option value="option 1">Customer two</option>
            <option value="option 1">Customer three</option>
          </select>
        </div>
      </div>
      <div>
        <button className="button-style" onClick={handleShow}>
          Create Return Vocher
        </button>
      </div>
      <div
        className="table-data"
        style={{ height: "165px", overflowY: "scroll", marginTop: "15px" }}
      >
        <Tables theadData={getHeadings1()} tbodyData={CRVdata1} />
      </div>
      <div className="mat-reci">
        <div className="ip-box">
          <div className="row">
            <div
              className="col-md-6 table-data"
              style={{ height: "180px", overflow: "scroll" }}
            >
              <Tables theadData={getHeadings2()} tbodyData={CRVdata2} />
            </div>
            <div
              className="col-md-6 table-data"
              style={{ height: "180px", overflow: "scroll" }}
            >
              <Tables theadData={getHeadings3()} tbodyData={CRVdata3} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReturnNew;
