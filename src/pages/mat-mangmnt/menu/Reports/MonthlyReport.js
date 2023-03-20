import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import MonthlyMatPurDetails from "./MonthlyMatPurDetails";
import MonthlyMatSalesDetails from "./MonthlyMatSalesDetails";
import MonthlyMatPurSummary from "./MonthlyMatPurSummary";
import MonthlyMatHandlingSummary from "./MonthlyMatHandlingSummary";
import MonthlyMatSalesSummary from "./MonthlyMatSalesSummary";

function MonthlyReport() {
  return (
    <div>
      {" "}
      <h4 className="form-title">Raw Material Daily Report</h4>
      <hr className="horizontal-line" />
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <label>Select Month</label>
          <input type="date" />
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
