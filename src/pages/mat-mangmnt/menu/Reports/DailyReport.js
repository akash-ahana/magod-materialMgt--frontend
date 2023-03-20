import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import DailyReportMaterialReceipt from "./DailyReportMaterialReceipt";
import DailyReportMaterialDispatch from "./DailyReportMaterialDispatch";
import DailyReportMaterialSales from "./DailyReportMaterialSales";
import DailyReportMaterialPurchase from "./DailyReportMaterialPurchase";

function DailyReport() {
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
          <button className="button-style">Save Data</button>
        </div>
        <div className="col-md-2">
          <button className="button-style">Print Receipt Report</button>
        </div>
        <div className="col-md-2">
          <button className="button-style"> Print Invoice Dispatch</button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Tabs id="controlled-tab-example" className="mb-3 mt-3 tab_font">
            <Tab eventKey="mat_rece" title="Material Receipt">
              <DailyReportMaterialReceipt />
            </Tab>

            <Tab eventKey="mat_dis" title="Material Dispatch">
              <DailyReportMaterialDispatch />
            </Tab>

            <Tab eventKey="mat_sale" title="Material Sales">
              <DailyReportMaterialSales />
            </Tab>

            <Tab eventKey="mat_pur" title="Material Purchase">
              <DailyReportMaterialPurchase />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default DailyReport;
