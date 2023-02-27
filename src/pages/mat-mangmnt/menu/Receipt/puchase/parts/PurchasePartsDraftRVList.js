import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../../../MatMenu.css";
import { data2 } from "../../../../components/Data";
import { useDispatch, useSelector } from "react-redux";
// import { getMaterialReceiptByType } from "../../../../actions/materialReceiptAction";
import MessageBox from "../../../../components/MessageBox";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useNavigate } from "react-router-dom";

function PurchasePartsDraftRVList() {
  const [selectedRow, setSelectedRow] = useState();

  const selectedRowFn = (item, index) => {
    let list = { ...item, index: index };
    // setMachine_srl(item.Machine_srl);
    // api call

    setSelectedRow();
  };

  return (
    <div>
      <>
        <h4 className="form-title">Magod : Parts Receipt List Created</h4>
        <hr className="horizontal-line" />
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div style={{ height: "400px", overflowY: "scroll" }}>
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
                    <th>RV Date</th>
                    <th>Customer</th>
                    <th>Cust Doc No</th>
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

          <div className="col-md-6 col-sm-12">
            <div className="ip-box form-bg">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="ip-box form-bg">
                    <div className="row">
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Part ID</label>
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
                        <div className="col-md-3 ">
                          <label className="">Receipt Date</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            type="date"
                            // onChange={(e) => setDate(e.target.value)}
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
                            // onChange={(e) => setDate(e.target.value)}
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
      </>
    </div>
  );
}

export default PurchasePartsDraftRVList;
