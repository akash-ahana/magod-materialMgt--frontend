import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProfilesMaterials from "../custjobwork/components/PofilesMaterials";
import Parts from "./components/Parts";

function ReturnNew() {
  return (
    <>
      <h4 className="form-title">Customer Material Information</h4>
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
        <Tab eventKey="mat_rece" title="Profiles Matireals">
          <ProfilesMaterials />
        </Tab>

        <Tab eventKey="mat_retu" title="Parts">
          <Parts />
        </Tab>
      </Tabs>
    </>
  );
}

export default ReturnNew;
