import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import DraftForm from "../../../../components/DraftForm";
import HeaderForm from "../../../../components/HeaderForm";
import Tables from "../../../../../../components/Tables";
import { data3 } from "../../../../components/Data";

function PurOtherNew() {
  const getHeadings = () => {
    return Object.keys(data3[0]);
  };

  return (
    <>
      <div>
        <HeaderForm />
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div
            className="table-data"
            style={{ height: "480px", overflowY: "scroll" }}
          >
            <Tables theadData={getHeadings()} tbodyData={data3} />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="ip-box form-bg">
            <div className="row justify-content-center mt-2">
              <button className="button-style " style={{ width: "260px" }}>
                Add Serial
              </button>
            </div>
            <div className="row justify-content-center mt-2">
              <button className="button-style " style={{ width: "120px" }}>
                Add to stock
              </button>
              <button className="button-style " style={{ width: "130px" }}>
                Remove stock
              </button>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="ip-box form-bg">
                  <div className="row">
                    <p className="form-title-deco">Serial Details</p>

                    <div className="col-md-3 ">
                      <label className="">Part ID</label>
                    </div>
                    <div className="col-md-6" style={{ marginTop: "8px" }}>
                      <select className="ip-select dropdown-field">
                        <option value="option 1">001</option>
                        <option value="option 1">002</option>
                        <option value="option 1">003</option>
                        <option value="option 1">004</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3">
                      <label className="">Para 1</label>
                    </div>
                    <div className="col-md-4 ">
                      <input className="in-field" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <label className="">Para 2</label>
                    </div>
                    <div className="col-md-4 ">
                      <input className="in-field" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <label className="">Para 3</label>
                    </div>
                    <div className="col-md-4 ">
                      <input className="in-field" />
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <p className="form-title-deco">Quantity Details</p>
                    <div className="row">
                      <div className="col-md-3">
                        <label className="">Received</label>
                      </div>
                      <div className="col-md-4 ">
                        <input className="in-field" />
                      </div>
                      <div className="col-md-4">
                        <div
                          className="col-md-12 mt-2"
                          style={{ display: "flex", gap: "5px" }}
                        >
                          <input
                            className="form-check-input mt-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                           <label className="">Inspected</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <label className="">Accepted</label>
                      </div>
                      <div className="col-md-4 ">
                        <input className="in-field" />
                      </div>
                      <div className="col-md-4">
                        <div
                          className="col-md-12 mt-2"
                          style={{ display: "flex", gap: "5px" }}
                        >
                          <input
                            className="form-check-input mt-2"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                           <label className="">Updated</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-3">
                        <label className="">Wt Caluclated 2</label>
                      </div>
                      <div className="col-md-4 ">
                        <input className="in-field" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <label className="">Weight</label>
                      </div>
                      <div className="col-md-4 ">
                        <input className="in-field" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ">
                        <label className="">Location</label>
                      </div>
                      <div className="col-md-6" style={{ marginTop: "8px" }}>
                        <select className="ip-select dropdown-field">
                          <option value="option 1">001</option>
                          <option value="option 1">002</option>
                          <option value="option 1">003</option>
                          <option value="option 1">004</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-2">
              <button className="button-style " style={{ width: "120px" }}>
                Delete Serial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurOtherNew;
