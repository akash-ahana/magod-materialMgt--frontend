import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import BootstrapTable from "react-bootstrap-table-next";

const { getRequest, postRequest } = require("../../../api/apiinstance");
const { endpoints } = require("../../../api/constants");

function LocationStockReport() {
  let [custdata, setCustdata] = useState([]);
  let [locdata, setLocdata] = useState([]);
  let [firstTable, setFirstTable] = useState([]);
  let [secondTable, setSecondTable] = useState([]);
  let [thirdTable, setThirdTable] = useState([]);

  let [selectedfirstRow, setSelectedFirstRow] = useState({
    LocationNo: "",
    CurrentCapacity: "",
    StorageType: "",
    CapacityUtilised: "",
  });
  let [selectedSecondRow, setSelectedSecondRow] = useState({
    Customer: "",
    Mtrl_Code: "",
    DynamicPara1: "",
    DynamicPara2: "",
    Scrap: 0,
  });

  async function fetchCustData() {
    getRequest(endpoints.getCustomers, async (data) => {
      setCustdata(data);
    });
    getRequest(endpoints.getMaterialLocationList, async (data) => {
      for (let i = 0; i < data.length; i++) {
        data[i].id = i + 1;
      }
      setFirstTable(data);
      console.log("Location List = ", data);
    });
  }

  useEffect(() => {
    fetchCustData();
  }, []);

  const columns1 = [
    {
      text: "#",
      dataField: "id",
      hidden: true,
    },
    {
      text: "LocationNo",
      dataField: "LocationNo",
    },
    {
      text: "StorageType",
      dataField: "StorageType",
    },
    {
      text: "Capacity",
      dataField: "Capacity",
    },
    {
      text: "CapacityUtilised",
      dataField: "CapacityUtilised",
    },
  ];
  const columns2 = [
    {
      text: "#",
      dataField: "id",
      hidden: true,
    },
    {
      text: "Customer",
      dataField: "Customer",
    },
    {
      text: "Material",
      dataField: "Mtrl_Code",
    },
    {
      text: "Dim1",
      dataField: "DynamicPara1",
    },
    {
      text: "Dim2",
      dataField: "DynamicPara2",
    },
    {
      text: "Quantity",
      dataField: "Quantity",
    },
    {
      text: "Scrap",
      dataField: "Scrap",
    },
    {
      text: "Weight",
      dataField: "Weight",
    },
    {
      text: "SWeight",
      dataField: "SWeight",
    },
  ];
  const columns3 = [
    {
      text: "#",
      dataField: "id",
      hidden: true,
    },
    {
      text: "MtrlStockID",
      dataField: "MtrlStockID",
    },
    {
      text: "Dim1",
      dataField: "DynamicPara1",
    },
    {
      text: "Dim2",
      dataField: "DynamicPara2",
    },
    {
      text: "Weight",
      dataField: "Weight",
    },
    {
      text: "ScrapWeight",
      dataField: "ScrapWeight",
    },
  ];
  const selectRow1 = {
    mode: "radio",
    clickToSelect: true,
    bgColor: "#98A8F8",
    onSelect: (row, isSelect, rowIndex, e) => {
      console.log("row = ", row);
      setSelectedFirstRow(row);

      let url =
        endpoints.getLocationStockSecond + "?location=" + row.LocationNo;
      getRequest(url, async (data) => {
        for (let i = 0; i < data.length; i++) {
          data[i].id = i + 1;
        }
        setSecondTable(data);
        console.log("second table = ", data);
      });
    },
  };

  const selectRow2 = {
    mode: "radio",
    clickToSelect: true,
    bgColor: "#98A8F8",
    onSelect: (row, isSelect, rowIndex, e) => {
      console.log("row = ", row);
      //setSelectedFirstRow(row);
      setSelectedSecondRow(row);
      let url =
        endpoints.getLocationStockThird +
        "?location=" +
        row.LocationNo +
        "&mtrlcode=" +
        row.Mtrl_Code +
        "&para1=" +
        row.DynamicPara1 +
        "&para2=" +
        row.DynamicPara2 +
        "&custcode=" +
        row.Cust_Code +
        "&scrap=" +
        row.Scrap;
      getRequest(url, async (data) => {
        for (let i = 0; i < data.length; i++) {
          data[i].id = i + 1;
        }
        setThirdTable(data);
        console.log("third table = ", data);
      });
    },
  };

  return (
    <div>
      <h4 className="title">Location Stock Report</h4>
      <div className="row">
        <div className="col-md-4">
          <h4 className="form-title"> Stock Viewer</h4>

          <div className="row">
            <div className="col-md-12">
              <label className="form-label"> Select Customer</label>
              <select
                className="ip-select"
                name="customer"
                //onChange={changeCustomer}
                // disabled={boolVal1}
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
            <div className="col-md-6">
              <label className="form-label"> Location</label>
              <input
                className=""
                name="LocationNo"
                value={selectedfirstRow.LocationNo}
              />
            </div>
            <div className="col-md-6">
              {" "}
              <label className="form-label">Capacity</label>
              <input
                className=""
                name="Capacity"
                value={selectedfirstRow.Capacity}
              />
            </div>
          </div>
          <div className="row">
            {" "}
            <div className="col-md-6">
              {" "}
              <label className="form-label">Type</label>
              <input
                className=""
                name="StorageType"
                value={selectedfirstRow.StorageType}
              />
            </div>
            <div className="col-md-6">
              {" "}
              <label className="form-label">Used</label>
              <input
                className=""
                name="CapacityUtilised"
                value={selectedfirstRow.CapacityUtilised}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h8>Show Stock</h8>
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                {" "}
                <div
                  className="col-md-6 mt-2"
                  style={{ display: "flex", gap: "5px" }}
                >
                  <input
                    className="form-check-input mt-2"
                    type="radio"
                    id="flexCheckDefault"
                    name="updated"
                    //   value={inputPart.upDated}
                    //disabled={boolVal3 | boolVal4}
                    //   disabled={true}
                    //   onChange={changeMaterialHandle}
                  />
                  <label className="">All</label>
                </div>
              </div>
              <div className="row">
                {" "}
                <div
                  className="col-md-8 mt-2"
                  style={{ display: "flex", gap: "5px" }}
                >
                  <input
                    className="form-check-input mt-2"
                    type="radio"
                    id="flexCheckDefault"
                    name="updated"
                    //   value={inputPart.upDated}
                    //disabled={boolVal3 | boolVal4}
                    //   disabled={true}
                    //   onChange={changeMaterialHandle}
                  />
                  <label className="">Customer</label>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row justify-content-center mt-3">
                <button className="button-style " style={{ width: "160px" }}>
                  Summary Report
                </button>
                <button className="button-style " style={{ width: "160px" }}>
                  Details Report
                </button>
              </div>
            </div>

            <div className="col-md-12">
              <label className="form-label">Customer</label>
              <input className="" value={selectedSecondRow.Customer} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label className="form-label">Material</label>
              <input className="" value={selectedSecondRow.Mtrl_Code} />
            </div>
          </div>
          <div className="row">
            {" "}
            <div className="col-md-4">
              <label className="form-label">Dim 1</label>
              <input className="" value={selectedSecondRow.DynamicPara1} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Dim 2</label>
              <input className="" value={selectedSecondRow.DynamicPara2} />
            </div>
            <div
              className="col-md-4 mt-2"
              style={{ display: "flex", gap: "5px" }}
            >
              <input
                className="form-check-input mt-2"
                type="checkbox"
                id="flexCheckDefault"
                name="updated"
                checked={selectedSecondRow.Scrap !== 0 ? true : false}
                //   value={inputPart.upDated}
                //disabled={boolVal3 | boolVal4}
                //   disabled={true}
                //   onChange={changeMaterialHandle}
              />
              <label className="">Scrap</label>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div
            style={{
              height: "400px",
              overflowY: "scroll",
              border: "solid #c0c4c2 1px",
              marginTop: "20px",
            }}
          >
            <BootstrapTable
              keyField="id"
              columns={columns1}
              data={firstTable}
              striped
              hover
              condensed
              selectRow={selectRow1}
              headerClasses="header-class"
            ></BootstrapTable>{" "}
          </div>
        </div>
        <div className="col-md-7">
          <div className="row">
            <div
              style={{
                height: "200px",
                overflowY: "scroll",
                border: "solid #c0c4c2 1px",
                marginTop: "20px",
              }}
            >
              <BootstrapTable
                keyField="id"
                columns={columns2}
                data={secondTable}
                striped
                hover
                condensed
                selectRow={selectRow2}
                headerClasses="header-class"
              ></BootstrapTable>{" "}
            </div>
          </div>
          <div className="row">
            <div
              style={{
                height: "200px",
                overflowY: "scroll",
                border: "solid #c0c4c2 1px",
                marginTop: "20px",
              }}
            >
              <BootstrapTable
                keyField="id"
                columns={columns3}
                data={thirdTable}
                striped
                hover
                condensed
                //selectRow={selectRow1}
                headerClasses="header-class"
              ></BootstrapTable>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationStockReport;
