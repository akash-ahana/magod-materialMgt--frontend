import React, { useState } from "react";
import Tables from "../../../components/Tables";
import { data2 } from "./Data";
import "../../mat-mangmnt/menu/MatMenu.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function CustPartRecceListCreated(props) {
  const [date, setDate] = useState();

  const { values } = props;

  const getHeadings = () => {
    return Object.keys(data2[0]);
  };
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <div
          className="table-data"
          style={{ height: "480px", overflowY: "scroll" }}
        >
          <Tables theadData={getHeadings()} tbodyData={data2} />
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="ip-box form-bg">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="ip-box form-bg">
                <div className="row">
                  <div className="row">
                    <div className="col-md-3 ">
                      <label className="">Receipt Date</label>
                    </div>
                    <div className="col-md-8 ">
                      <input
                        className="in-field"
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 ">
                      <label className="">RV No</label>
                    </div>
                    <div className="col-md-8 ">
                      <input className="in-field" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <label className="">RV Date</label>
                    </div>
                    <div className="col-md-8 ">
                      <input
                        className="in-field"
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 ">
                      <label className="">Cust code</label>
                    </div>
                    <div className="col-md-8 ">
                      <input className="in-field" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 ">
                      <label className="">Customer</label>
                    </div>
                    <div className="col-md-8" style={{ marginTop: "8px" }}>
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
                      <label className="">Cust Docu No</label>
                    </div>

                    <div className="col-md-8 ">
                      <input className="in-field" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 ">
                      <label className="">Total Weight</label>
                    </div>
                    <div className="col-md-8 ">
                      <input className="in-field" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <label className="">Caluclatd weight</label>
                    </div>
                    <div className="col-md-8 ">
                      <input className="in-field" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 ">
                      <label className="">RV status</label>
                    </div>
                    <div className="col-md-8 ">
                      <input className="in-field" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <button className="button-style " style={{ width: "120px" }}>
              Open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustPartRecceListCreated;
