import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProfilesMaterials from "../custjobwork/components/PofilesMaterials";
import Parts from "./components/Parts";
import BootstrapTable from "react-bootstrap-table-next";

const { getRequest, postRequest } = require("../../../../api/apiinstance");
const { endpoints } = require("../../../../api/constants");

function ReturnNew() {
  let [custdata, setCustdata] = useState([]);
  let [custCode, setCustCode] = useState("");
  let [custName, setCustName] = useState("");

  async function fetchData() {
    getRequest(endpoints.getCustomers, (data) => {
      setCustdata(data);
    });
  }

  let changeCustomer = async (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setCustCode(value);
    let foundCustomer = custdata.filter((obj) => obj.Cust_Code === value);
    setCustName(foundCustomer[0].Cust_name);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h4 className="form-title">Customer Material Information</h4>
      <hr className="horizontal-line" />
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
      </div>
      <Tabs id="controlled-tab-example" className="mb-3 mt-3 tab_font">
        <Tab eventKey="mat_rece" title="Profiles Matireals">
          <ProfilesMaterials custCode={custCode} custName={custName} />
        </Tab>

        <Tab eventKey="mat_retu" title="Parts">
          <Parts custCode={custCode} custName={custName} />
        </Tab>
      </Tabs>
    </>
  );
}

export default ReturnNew;
