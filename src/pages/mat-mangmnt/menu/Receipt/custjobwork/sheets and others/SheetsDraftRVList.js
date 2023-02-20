import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";

import "../../../MatMenu.css";
import { data2 } from "../../../../components/Data";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useNavigate } from "react-router-dom";

export default function SheetsDraftRVList() {
  const navigate = useNavigate();
  const list = [];

  const columns = [
    {
      text: "RV No",
      dataField: "RV_No",
    },
    {
      text: "RV Date",
      dataField: "RV_Date",
      sort: true,
    },
    {
      text: "Customer",
      dataField: "Customer",
    },
    {
      text: "Cust Doc No",
      dataField: "CustDocuNo",
    },
  ];
  // const selectRow = {
  //   mode: "radio",
  //   clickToSelect: true,
  //   bgColor: "#8A92F0",
  //   onSelect: (row, isSelect, rowIndex, e) => {
  //     console.log(row);
  //     setData({
  //       CustDocuNo: row.CustDocuNo,
  //       Cust_Code: row.Cust_Code,
  //       Customer: row.Customer,
  //       RVStatus: row.RVStatus,
  //       RV_Date: row.RV_Date,
  //       RV_No: row.RV_No,
  //       ReceiptDate: row.ReceiptDate,
  //       RvID: row.RvID,
  //       TotalWeight: row.TotalWeight,
  //       TotalCalculatedWeight: row.TotalCalculatedWeight,
  //     });
  //   },
  // };

  const getHeadings = () => {
    return Object.keys(data2[0]);
  };

  return (
    <>
      <h4 className="form-title">Customer : Parts Receipt List Created</h4>
      <hr className="horizontal-line" />
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <BootstrapTable
            keyField="RvID"
            columns={columns}
            data={list}
            // striped
            // hover
            // condensed
            // pagination={paginationFactory()}
            // selectRow={selectRow}
          ></BootstrapTable>
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
  );
}
