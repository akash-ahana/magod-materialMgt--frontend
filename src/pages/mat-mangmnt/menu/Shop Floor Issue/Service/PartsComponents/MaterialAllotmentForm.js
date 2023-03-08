import React from "react";

function UnitMaterialAllotmentForm() {
  return (
    <div>
      <div>
        <h4 className="form-title">Material Allotment Form</h4>
        <hr className="horizontal-line" />

        <div className="row">
          <div className="col-md-4">
            <label className="">Task No</label>
            <input type="text" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Customer</label>
            <select className="ip-select">
              <option value="option 1"> A A Industries</option>
              <option value="option 1">Test Industries</option>
              <option value="option 1">Ahana Systems and solutions</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div style={{ marginBottom: "9px" }}>
              <label className="">NC Program No</label>
              <input className="" />
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ marginBottom: "9px" }}>
              <label className="">Material Code</label>
              <input className="" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <label className="">Priorty</label>
            <input className="" />
          </div>

          <div className="col-md-3">
            <label className="">Machine</label>
            <input className="" />
          </div>
          <div className="col-md-3">
            <label className="">Quantity</label>
            <input className="" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <label className="">Status</label>
            <input className="" />
          </div>

          <div className="col-md-3">
            <label className="">Process</label>
            <input className="" />
          </div>
          <div className="col-md-3">
            <label className="">Alloted</label>
            <input className="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label className="">Sourse</label>
            <input className="" />
          </div>

          <div className="col-md-3"></div>
          <div className="col-md-3">
            <label className="">Issue NO</label>
            <input className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnitMaterialAllotmentForm;
