import React, { useState, useEffect } from "react";
import { dateToShort } from "../../../../../utils";
import BootstrapTable from "react-bootstrap-table-next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const { getRequest, postRequest } = require("../../../../api/apiinstance");
const { endpoints } = require("../../../../api/constants");

function ReturnListing(props) {
  const nav = useNavigate();

  const [data, setdata] = useState([]);
  const [allData, setAllData] = useState([]);

  const [checkData, setCheckData] = useState([]);
  const [selectData, setSelectData] = useState();
  const [checkboxDisable, setCheckboxDisable] = useState("on");

  const [checkboxVal, setCheckboxVal] = useState("off");
  let [custdata, setCustdata] = useState([]);
  let [propsType, setPropsType] = useState(props.type);
  //console.log("listing form type = ", propsType);
  async function fetchData() {
    getRequest(endpoints.getCustomers, async (data) => {
      setCustdata(data);
    });

    if (props.type === "pendingDispatch") {
      getRequest(endpoints.getReturnPendingList, async (data) => {
        setCheckData(data);
        setdata(data);
        setAllData(data);
      });
    } else if (props.type === "returnSaleListing") {
      getRequest(endpoints.getSalesIVList, async (data) => {
        setCheckData(data);
        setdata(data);
        setAllData(data);
      });
    } else if (props.type === "customerIVList") {
      getRequest(endpoints.getCustomerIVList, async (data) => {
        setCheckData(data);
        setdata(data);
        setAllData(data);
        //console.log("data = ", data);
      });
    } else if (props.type === "returnCancelled") {
      getRequest(endpoints.getCancelledList, async (data) => {
        setCheckData(data);
        setdata(data);
        setAllData(data);
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []); //[inputPart]);

  let totalFetchData = checkData;
  const columns = [
    {
      text: "Iv_Id",
      dataField: "Iv_Id",
      hidden: true,
    },

    {
      text: "IV No",
      dataField: "IV_No",
    },
    {
      text: "IV Date",
      dataField: "IV_Date",
      sort: true,
      formatter: statusFormatter,
    },
    {
      text: "Customer",
      dataField: "Customer",
    },
    {
      text: "Wieght",
      dataField: "TotalWeight",
    },
    {
      text: "Type",
      dataField: "Type",
    },
  ];

  let changeCustomer = async (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    //console.log("all data = ", data);
    const found = allData.filter((obj) => obj.Cust_code === value);
    setdata(found);
    //setCustdata(filterData);
    setCheckboxVal("on");
    setCheckboxDisable("off");
  };

  let handleClick = async (e) => {
    e.preventDefault();
    const { value, name } = e.target;
  };

  function statusFormatter(cell, row, rowIndex, formatExtraData) {
    if (!cell) return;
    return dateToShort(cell);
  }

  let openClick = async (e) => {
    //console.log("selected data = ", selectData);
    console.log("data = ", selectData);
    if (selectData && selectData.Type !== "Parts") {
      nav(
        "/materialmanagement/return/customerjobwork/OutwordMaterialIssueVocher",
        {
          state: { selectData, propsType },
        }
      );
    } else if (selectData && selectData.Type === "Parts") {
      nav("/materialmanagement/return/customerjobwork/OutwordPartIssueVocher", {
        state: { selectData, propsType },
      });
    } else {
      toast.error("Select IV");
    }

    /*e.preventDefault();
    nav(
      "/materialmanagement/return/customerjobwork/OutwordMaterialIssueVocher",
      {
        state: { selectData },
      }
    );*/
  };
  let changeCheckbox = (e) => {
    console.log("val = ", e.target.value);
    setdata(allData);
    setCheckboxVal("off");
  };

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    bgColor: "#8A92F0",
    onSelect: (row, isSelect, rowIndex, e) => {
      console.log(row);
      setSelectData({
        Iv_Id: row.Iv_Id,
        IV_No: row.IV_No,
        IV_Date: row.IV_Date,
        Customer: row.Customer,
        TotalWeight: row.TotalWeight,
        TotalCalculatedWeight: row.TotalCalculatedWeight,
        Type: row.Type,
      });
    },
  };

  return (
    <>
      <h4 className="form-title">Material Return Issue Vocher</h4>
      <hr className="horizontal-line" />
      <div className="row">
        <div className="col-md-8">
          <label className="form-label">Select Customer</label>
          <select
            className="ip-select"
            name="pending"
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
              checked={checkboxVal === "on" ? true : false}
              id="flexCheckDefault"
              onChange={changeCheckbox}
              disabled={checkboxDisable === "on" ? true : false}
            />
            <label className="">Filter Customer</label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-6 mt-2">
            <button className="button-style" onClick={openClick}>
              Open IV
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mt-4">
          <div
            style={{ height: "420px", overflowY: "scroll" }}
            className="col-md-12 col-sm-12"
          >
            <BootstrapTable
              keyField="Iv_Id"
              columns={columns}
              data={data}
              striped
              hover
              condensed
              selectRow={selectRow}
            ></BootstrapTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReturnListing;
