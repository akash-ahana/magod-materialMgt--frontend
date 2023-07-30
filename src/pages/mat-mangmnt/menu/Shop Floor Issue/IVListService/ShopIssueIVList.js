import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../../utils";
import { toast } from "react-toastify";

const { getRequest, postRequest } = require("../../../../api/apiinstance");
const { endpoints } = require("../../../../api/constants");

function ShopIssueIVList(props) {
  const nav = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [rowData, setRowData] = useState({});
  const [issueIDVal, setIssueIDVal] = useState("");

  const fetchData = () => {
    let url =
      props.type === "closed"
        ? endpoints.getPartIssueVoucherList + "?status=Closed"
        : endpoints.getPartIssueVoucherList + "?status=Created";
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
      hidden: true,
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
      text: "Task No",
      dataField: "TaskNo",
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
    bgColor: "#98A8F8",
    onSelect: (row, isSelect, rowIndex, e) => {
      setIssueIDVal(row.IssueID);
      console.log("row = ", row);
      setRowData({
        Cust_Name: row.Cust_Name,
        IV_No: row.IV_No,
        Issue_date: formatDate(new Date(row.Issue_date), 3),
        NC_ProgramNo: row.NC_ProgramNo,
        AssyName: row.AssyName,
        Operation: row.Operation,
        Mtrl_Code: row.Mtrl_Code,
        QtyIssued: row.QtyIssued,
        QtyReturned: row.QtyReturned,
        //RV_Date: formatDate(new Date(row.RV_Date), 3), //dateToShort(row.RV_Date),
      });
    },
  };

  const openButton = () => {
    if (issueIDVal === "") {
      toast.error("Please select Part");
    } else {
      nav(
        "/materialmanagement/shopfloorissue/ivlistservice/issued/shopmatissuevocher", //ProductionMatIssueParts
        {
          state: { issueIDVal },
        }
      );
    }
  };
  return (
    <div>
      <>
        <h4 className="title">Parts Issue Vouchers List</h4>
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <div style={{ height: "420px", overflowY: "scroll" }}>
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
                headerClasses="header-class"
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
                          onClick={openButton}
                          className="col-md-6 button-style"
                          style={{ width: "120px" }}
                        >
                          Open
                        </button>
                        <button
                          className="col-md-6 button-style "
                          id="btnclose"
                          type="submit"
                          onClick={() => nav("/materialmanagement")}
                        >
                          Close
                        </button>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Customer</label>
                        </div>
                        <div className="col-md-8">
                          <input
                            className="in-field"
                            disabled
                            value={rowData.Cust_Name}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Issue Vr No</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            disabled
                            value={rowData.IV_No}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Vr Date</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            disabled
                            value={rowData.Issue_date}
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
                            disabled
                            value={rowData.NC_ProgramNo}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Assembly Name</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            disabled
                            value={rowData.AssyName}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Operation</label>
                        </div>

                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            disabled
                            value={rowData.Operation}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Material</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            disabled
                            value={rowData.Mtrl_Code}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Alloted</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            disabled
                            value={rowData.QtyIssued}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Returned</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            disabled
                            value={rowData.QtyReturned}
                          />
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

export default ShopIssueIVList;
