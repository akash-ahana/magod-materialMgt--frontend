import React from 'react'

function New() {
  return (
    <div>

      <h4 className="form-title">Customer Parts Receipt Voucher</h4>
      <hr className="horizontal-line" />

      <div className="row">
          
          <div className="col-md-3">
            <label className="">Receipt Date</label>
            <input type="text" />
          </div>
          <div className="col-md-3">
            <label className="">RV No</label>
            <input type="text" />
          </div>
          <div className="col-md-3">
            <label className="">RV Date</label>
            <input type="text" />
          </div>
          <div className="col-md-3">
            <label className="">status</label>
            <input type="text" />
          </div>
          
        </div>
      <div className="row">

        <div className="col-md-8">
            <label className="form-label">Customer</label>
            <select className="ip-select">
              <option value="option 1"> A A Industries</option>
              <option value="option 1">Test Industries</option>
              <option value="option 1">Ahana Systems and solutions</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="">Weight</label>
            <input type="text" />
          </div>
          </div>
          <div className="row">

        <div className="col-md-8">
        <label className="">Reference</label>
            <input type="text" />
          </div>
          <div className="col-md-4">
            <label className="">Caluclated Weight</label>
            <input type="text" />
          </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-8 justify-content-center">
          <button className="button-style" style={{ width: "196px" }}>
            Save
          </button>
          <button className="button-style" style={{ width: "196px" }}>
            Allot RV No
          </button>
          <button className="button-style" style={{ width: "196px" }}>
            Delete RV
          </button>
          </div>
          <div className="col-md-4">
            <label className="form-label"></label>
            <textarea
              style={{ height: "110px" }}
              className="form-control"
            ></textarea>
          </div>
        </div>

    </div>
  )
}

export default New