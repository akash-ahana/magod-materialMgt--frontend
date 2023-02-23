import React from "react";
import Tables from "../../../../../../components/Tables";
import {
  returnnewpartdata1,
  returnnewpartdata2,
  returnnewpartdata3,
} from "../../../../components/Data";

function Parts() {
  const getHeadings1 = () => {
    return Object.keys(returnnewpartdata1[0]);
  };
  const getHeadings2 = () => {
    return Object.keys(returnnewpartdata2[0]);
  };
  const getHeadings3 = () => {
    return Object.keys(returnnewpartdata3[0]);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-2 col-sm-12">
          {" "}
          <div
            className="table-data"
            style={{ height: "480px", overflow: "scroll" }}
          >
            <Tables theadData={getHeadings1()} tbodyData={returnnewpartdata1} />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div
            className="table-data"
            style={{ height: "480px", overflow: "scroll" }}
          >
            <Tables theadData={getHeadings2()} tbodyData={returnnewpartdata2} />
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="row">
            <div className="col-md-4">
              <label className="">RV_No</label>
              <input type="text" name="rvNo" />
            </div>
            <div className="col-md-7">
              <label className="">Customer Ref</label>
              <input type="text" name="customerRef" />
            </div>
          </div>
          <div>
            <button className="button-style" style={{ width: "200px" }}>
              Create Return Vocher
            </button>
          </div>
          <div
            className="table-data"
            style={{ height: "480px", overflow: "scroll", marginTop: "10px" }}
          >
            <Tables theadData={getHeadings3()} tbodyData={returnnewpartdata3} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Parts;
