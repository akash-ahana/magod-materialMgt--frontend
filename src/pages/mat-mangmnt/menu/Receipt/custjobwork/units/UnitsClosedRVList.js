import React, { useState, useEffect } from "react";
import { dateToShort, formatDate } from "../../../../../../utils";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const { getRequest, postRequest } = require("../../../../../api/apiinstance");
const { endpoints } = require("../../../../../api/constants");

function UnitsClosedRVList() {
  const nav = useNavigate();
  let [custdata, setCustdata] = useState([]);

  const [tabledata, setTableData] = useState([]);
  const [allData, setAllData] = useState([]);

  const [data, setData] = useState({
    CustDocuNo: "",
    Cust_Code: "",
    Customer: "",
    RVStatus: "",
    RV_Date: "",
    RV_No: "",
    ReceiptDate: "",
    RvID: "",
    TotalWeight: "",
    TotalCalculatedWeight: "",
  });

  const fetchData = () => {
    getRequest(endpoints.getCustomers, (data) => {
      setCustdata(data);
    });

    getRequest(endpoints.getUnitsClosedMaterial, (data) => {
      setTableData(data);
      setAllData(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  let changeCustomer = async (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    const found = allData.filter((obj) => obj.Cust_Code === value);
    //console.log("table data = ", tabledata);
    setTableData(found);
  };

  // Process the returned date in the formatter
  function statusFormatter(cell, row, rowIndex, formatExtraData) {
    //return dateToShort(cell);
    return formatDate(new Date(cell), 3);
  }

  const openButtonClick = () => {
    //console.log("data = ", data);
    //console.log("button click : ");
    if (data && data.RvID !== "") {
      nav("/materialmanagement/receipt/openbuttonclosedsheetunit", {
        state: { id: data.RvID },
      });
    } else {
      toast.error("Select Customer");
    }
  };

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    bgColor: "#8A92F0",
    onSelect: (row, isSelect, rowIndex, e) => {
      setData({
        CustDocuNo: row.CustDocuNo,
        Cust_Code: row.Cust_Code,
        Customer: row.Customer,
        RVStatus: row.RVStatus,
        RV_Date: formatDate(new Date(row.RV_Date), 3), //dateToShort(row.RV_Date),
        RV_No: row.RV_No,
        ReceiptDate: formatDate(new Date(row.ReceiptDate), 3), //dateToShort(row.ReceiptDate),
        RvID: row.RvID,
        TotalWeight: row.TotalWeight,
        TotalCalculatedWeight: row.TotalCalculatedWeight,
      });
    },
  };

  const columns = [
    {
      text: "RV No",
      dataField: "RV_No",
    },
    {
      text: "RV Date",
      dataField: "RV_Date",
      sort: true,
      formatter: statusFormatter,
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
  return (
    <div>
      <>
        <h4 className="form-title">Customer : Units Receipt List Closed</h4>
        <hr className="horizontal-line" />
        <div className="row">
          <div className="col-md-7 mb-3">
            <label className="form-label">Customer</label>
            <select
              className="ip-select"
              name="customer"
              onChange={changeCustomer}
            >
              <option value="" disabled selected>
                Select Customer
              </option>
              {custdata.map((customer, index) => (
                <option key={index} value={customer.Cust_Code}>
                  {customer.Cust_name}
                </option>
              ))}
            </select>
          </div>

          <div
            style={{ height: "420px", overflowY: "scroll" }}
            className="col-md-7 col-sm-12"
          >
            {/* <BootstrapTable keyField="id" data={products} columns={columns} /> */}
            <BootstrapTable
              keyField="RvID"
              //keyField="id"
              columns={columns}
              data={tabledata}
              striped
              hover
              condensed
              //pagination={paginationFactory()}
              selectRow={selectRow}
            ></BootstrapTable>
          </div>

          <div className="col-md-5 col-sm-12">
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
                            value={data.ReceiptDate}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">RV No</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            value={data.RV_No}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">RV Date</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            value={data.RV_Date}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Cust code</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            value={data.Cust_Code}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Customer</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            value={data.Customer}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Cust Docu No</label>
                        </div>

                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            value={data.CustDocuNo}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">Total Weight</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            value={data.TotalWeight}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-3">
                          <label className="">Calculatd weight</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            value={data.TotalCalculatedWeight}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <label className="">RV status</label>
                        </div>
                        <div className="col-md-8 ">
                          <input
                            className="in-field"
                            value={data.RVStatus}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <button
                  className="button-style "
                  style={{ width: "120px" }}
                  //data.RvID
                  onClick={openButtonClick}
                >
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

export default UnitsClosedRVList;
