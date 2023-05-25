import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PartsInStockAndProcess from "./Components/PartsInStockAndProcess";
import ReceiptAndUsage from "./Components/ReceiptAndUsage";

const { getRequest, postRequest } = require("../../../../api/apiinstance");
const { endpoints } = require("../../../../api/constants");

function PartsReport() {
  const nav = useNavigate();
  let [custdata, setCustdata] = useState([]);
  let [custCode, setCustCode] = useState("");

  async function fetchData() {
    getRequest(endpoints.getCustomers, (data) => {
      setCustdata(data);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  let changeCustomer = async (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    console.log("value = ", value);
    setCustCode(value);
  };

  return (
    <>
      <h4 className="title">Customer Parts Stock</h4>
      <div className="row">
        <div className="col-md-8">
          <label className="form-label">Select Customer</label>
          <select className="ip-select" onChange={changeCustomer}>
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
        <div className="col-md-4">
          <button
            className="button-style "
            id="btnclose"
            type="submit"
            onClick={() => nav("/materialmanagement")}
          >
            Close
          </button>
        </div>
      </div>
      <Tabs id="controlled-tab-example" className="mb-3 mt-3 tab_font">
        <Tab eventKey="mat_rece" title="Parts In Stock And Process">
          <PartsInStockAndProcess custCode={custCode} />
        </Tab>

        <Tab eventKey="mat_retu" title="Receipt And Usage">
          <ReceiptAndUsage custCode={custCode} />
        </Tab>
      </Tabs>
    </>
  );
}

export default PartsReport;
