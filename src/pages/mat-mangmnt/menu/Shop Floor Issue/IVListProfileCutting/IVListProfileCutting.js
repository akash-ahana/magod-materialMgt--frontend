import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../../utils";

const { getRequest, postRequest } = require("../../../../api/apiinstance");
const { endpoints } = require("../../../../api/constants");

function IVListProfileCutting(props) {
  const nav = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [rowData, setRowData] = useState({});

  const fetchData = () => {
    let url =
      props.type === "closed"
        ? endpoints.getMaterialIssueVoucherList + "?status=Closed"
        : endpoints.getMaterialIssueVoucherList + "?status=Created";
    getRequest(url, (data) => {
      setTableData(data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  function statusFormatter(cell, row, rowIndex, formatExtraData) {
    return formatDate(new Date(cell), 3);
  }

  const columns = [
    {
      text: "IssueID",
      dataField: "IssueID",
    },
    {
      text: "IV No",
      dataField: "IV_No",
    },
    {
      text: "Issue Date",
      dataField: "Issue_date",
      formatter: statusFormatter,
    },
    {
      text: "NC Program No",
      dataField: "NcId",
    },
    {
      text: "Qty Issued",
      dataField: "QtyIssued",
    },
    {
      text: "Qty Used",
      dataField: "QtyUsed",
    },
    {
      text: "Qty Returned",
      dataField: "QtyReturned",
    },
    {
      text: "Remarks",
      dataField: "Remarks",
    },
  ];
  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    bgColor: "#8A92F0",
    onSelect: (row, isSelect, rowIndex, e) => {
      setRowData({
        Cust_Name: row.Cust_Name,
        IV_No: row.IV_No,
        Issue_date: formatDate(new Date(row.Issue_date), 3),
        NC_ProgramNo: row.NC_ProgramNo,
        AssyName: row.AssyName,
        Operation: row.Operation,
        TaskNo: row.TaskNo,
        Mtrl_Code: row.Mtrl_Code,
        QtyIssued: row.QtyIssued,
        QtyUsed: row.QtyUsed,
        QtyReturned: row.QtyReturned,
        //RV_Date: formatDate(new Date(row.RV_Date), 3), //dateToShort(row.RV_Date),
      });
    },
  };

  return (
    <div>
      <>
        <h4 className="form-title">Material Issue Vouchers List</h4>
        <hr className="horizontal-line" />
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div style={{ height: "400px", overflowY: "scroll" }}>
              <BootstrapTable
                keyField="IssueID"
                //keyField="id"
                columns={columns}
                data={tableData}
                striped
                hover
                condensed
                //pagination={paginationFactory()}
                selectRow={selectRow}
              ></BootstrapTable>
            </div>
          </div>

          <div className="col-md-5 col-sm-12">
            <div className="ip-box form-bg">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="ip-box form-bg">
                    <div className="row">
                      <div className="row justify-content-center mt-2">
                        <button
                          onClick={() =>
                            nav(
                              "/materialmanagement/shopfloorissue/ivlistprofilecutting/closed/shopmatissuevocher"
                            )
                          }
                          className="button-style"
                          style={{ width: "120px" }}
                        >
                          Open
                        </button>
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
                        <div className="col-md-3 ">
                          <label className="">Issue Vr No</label>
                        </div>
                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Vr Date</label>
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
                        <div className="col-md-3">
                          <label className="">Program No</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            // onChange={(e) => setDate(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Assembly Name</label>
                        </div>
                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Operation</label>
                        </div>

                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Material</label>
                        </div>
                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Alloted</label>
                        </div>
                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Used</label>
                        </div>
                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Returned</label>
                        </div>
                        <div className="col-md-8 ">
                          <input className="in-field" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default IVListProfileCutting;
