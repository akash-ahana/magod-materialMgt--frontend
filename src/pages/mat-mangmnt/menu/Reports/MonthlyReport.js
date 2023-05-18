import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import BootstrapTable from "react-bootstrap-table-next";
import MonthlyMatPurDetails from "./MonthlyMatPurDetails";
import MonthlyMatSalesDetails from "./MonthlyMatSalesDetails";
import MonthlyMatPurSummary from "./MonthlyMatPurSummary";
import MonthlyMatHandlingSummary from "./MonthlyMatHandlingSummary";
import MonthlyMatSalesSummary from "./MonthlyMatSalesSummary";
import { formatDate } from "../../../../utils";

const { getRequest, postRequest } = require("../../../api/apiinstance");
const { endpoints } = require("../../../api/constants");

function MonthlyReport() {
  const [firstTab, setFirstTab] = useState([]);
  const [secondTab, setSecondTab] = useState([]);
  const [thirdTab, setThirdTab] = useState([]);
  const [fourthTab, setFourthTab] = useState([]);
  const [fifthTab, setFifthTab] = useState([]);

  const [dateVal, setDateVal] = useState("1988-01-01");
  const [monthval, setMonthVal] = useState(0);
  const [yearval, setYearVal] = useState(1900);
  const InputEvent = (e) => {
    const { name, value } = e.target;
    console.log("value = ", value);
    console.log("year = ", formatDate(new Date(value), 6));
    console.log("month = ", formatDate(new Date(value), 8));
    setDateVal(value);
    setMonthVal(formatDate(new Date(value), 8));
    setYearVal(formatDate(new Date(value), 6));
  };
  return (
    <div>
      {" "}
      <h4 className="title">Raw Material Daily Report</h4>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <label>Select Month</label>
          <input type="date" name="date" onChange={InputEvent} />
        </div>
        <div className="col-md-2">
          <button className="button-style">Load Data</button>
        </div>

        <div className="col-md-2">
          <button className="button-style">Print Report</button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-1"></div>
        <div className="col-md-11">
          <Tabs id="controlled-tab-example" className="mb-3 mt-3 tab_font">
            <Tab eventKey="mat_rece" title="Material Purchase Details">
              <MonthlyMatPurDetails />
            </Tab>
            <Tab eventKey="mat_sale" title="Material Sales Datails">
              <MonthlyMatSalesDetails />
            </Tab>
            <Tab eventKey="mat_sale_sum" title="Material Sales Summary">
              <MonthlyMatSalesSummary />
            </Tab>
            <Tab eventKey="mat_pur" title="Material Purchase Summary">
              <MonthlyMatPurSummary />
            </Tab>

            <Tab
              eventKey="mat_han_sum"
              title="Monthly Material Handling Summary"
            >
              <MonthlyMatHandlingSummary />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default MonthlyReport;
