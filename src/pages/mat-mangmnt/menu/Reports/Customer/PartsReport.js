import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PartsInStockAndProcess from "./Components/PartsInStockAndProcess";
import ReceiptAndUsage from "./Components/ReceiptAndUsage";

function PartsReport() {
  return (
    <>
      <h4 className="form-title">Customer Parts Stock</h4>
      <hr className="horizontal-line" />
      <div className="row">
        <div className="col-md-8">
          <label className="form-label">Select Customer</label>
          <select className="ip-select">
            <option value="option 1"> Customer one</option>
            <option value="option 1">Customer two</option>
            <option value="option 1">Customer three</option>
          </select>
        </div>
      </div>
      <Tabs id="controlled-tab-example" className="mb-3 mt-3 tab_font">
        <Tab eventKey="mat_rece" title="Parts In Stock And Process">
          <PartsInStockAndProcess />
        </Tab>

        <Tab eventKey="mat_retu" title="Receipt And Usage">
          <ReceiptAndUsage />
        </Tab>
      </Tabs>
    </>
  );
}

export default PartsReport;
